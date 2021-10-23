import * as actions from '../actions';
import {sessionService} from 'redux-react-session';
import * as jwt from 'jsonwebtoken';
import {logout} from "../actions/auth";

const axios = require('axios').default;

const auth = store => next => async action => {
  switch(action.type){
    case actions.PROCESS_LOGIN:
      const loginData = jwt.decode(action.token);
      const expiry = loginData.exp * 1000;
      await sessionService.saveSession({
        token: action.token,
        expiresAt: expiry
      });
      await sessionService.saveUser({
        userId: action.id,
        email: action.email,
        username: action.username,
        token: action.token
      });
      //Automatically logout once token is expired
      setTimeout(() => {
        store.dispatch(logout());
      }, expiry);
      action.history.push('/');
      break;
    case actions.LOGOUT:
      sessionService.deleteSession();
      sessionService.deleteUser();
      await axios.get(`${process.env.REACT_APP_AUTH_URL}/logout?response_type=token&client_id=${process.env.REACT_APP_AUTH_CLIENT_ID}`, {headers: {'Authorization': store.getState().session.token}})
      break;
    default:
      break;
  }
  return next(action);
};

export default auth;
