import React, {useState} from 'react';
import * as AWS from 'aws-sdk';
import 'amazon-cognito-js';
import * as jwt from 'jsonwebtoken';
import {useLocation} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import * as querystring from 'querystring';
import {connect} from 'react-redux';
import {processLogin, logout} from '../../store/actions/auth';
import history from 'history/browser';
import {MAX_LOGIN_RETRY_ATTEMPTS, ZERO, ONE} from '../../store/constants';

export const LoginCallback = ({processLogin, logout}) => {
  const location = useLocation();
  const hash = querystring.decode(location.hash);
  const token = hash['#id_token'];
  const decoded = jwt.decode(token);
  const [numRetries, setNumRetries] = useState(ZERO);

  if(!('email' in decoded)){
    logout();
    // eslint-disable-next-line no-console
    console.warn(`No email found in decoded JWT ${decoded}`);
    return <Redirect to="/"/>;
  }

  AWS.config.region = 'us-east-1';
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
    Logins: {
      [`cognito-idp.us-east-1.amazonaws.com/${process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID}`]: token
    }
  });

  const getCredentials = () => {
    AWS.config.credentials.get(err => {
      if(err) {
        if(numRetries < MAX_LOGIN_RETRY_ATTEMPTS){
          getCredentials();
          setNumRetries(numRetries + ONE);
        }
        logout();
      } else {

        const cognito = new AWS.CognitoSyncManager();
        cognito.openOrCreateDataset('info', (err, dataset) => {
          dataset.put('email', decoded['email'], (err, record) => {});
          dataset.put('username', decoded['cognito:username'], (err, record) => {});
          dataset.put('id', AWS.config.credentials.identityId, (err, record) => {});

          dataset.synchronize({
            onSuccess: (dataset, newRecords) => {
              processLogin(AWS.config.credentials.identityId, decoded['email'], decoded['cognito:username'], token, history);
            },
            onFailure: err => {
              logout();
            },
            onConflict: (dataset, conflicts, callback) => {
              const resolved = [];
              for (let i = 0; i < conflicts.length; i++) {
                //use local version
                resolved.push(conflicts[i].resolveWithLocalRecord());
              }

              dataset.resolve(resolved, function () {
                return callback(true);
              });
            }
          });
        });
      }
    });
  };

  getCredentials();
  return <Redirect to="/"/>;
};

const actionCreators = {
  processLogin,
  logout
};

export default connect(null, actionCreators)(LoginCallback);
