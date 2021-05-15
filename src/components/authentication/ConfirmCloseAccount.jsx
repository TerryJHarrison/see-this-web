import React, {useState} from 'react';
import {connect} from 'react-redux';
import {closeAccount} from '../../store/actions/auth';
import {Redirect} from 'react-router-dom';
import {addSuccessToast} from "../../store/actions/toasts";
import {Button} from "semantic-ui-react";

export const ConfirmCloseAccount = ({closeAccount, addSuccessToast}) => {
  const [shouldRedirect, logoutRedirect] = useState(false);

  const closeAccountCall = () => {
    closeAccount();
    addSuccessToast('Account closed', "We're sorry to see you go!")
    logoutRedirect(true);
  };

  return shouldRedirect ? <Redirect to="/logout"/> : (
    <div className="article-container">
      <div className="container">
        <h2 className="center">Close your account?</h2>
        <div className="row center-align">
          <div className="col s12">Warning, this cannot be undone! <Button className="red" onClick={closeAccountCall}>Close</Button></div>
        </div>
      </div>
    </div>
  );
};

const actionCreators = {
  closeAccount,
  addSuccessToast
};

export default connect(null, actionCreators)(ConfirmCloseAccount);
