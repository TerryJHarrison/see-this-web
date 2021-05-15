import React from 'react';
import {Redirect} from 'react-router-dom';
import {logout} from '../../store/actions/auth';
import {connect} from 'react-redux';

export const LogoutCallback = ({logout}) => {
  logout();
  return <Redirect to="/"/>;
};

const actionCreators = {
  logout
};

export default connect(null, actionCreators)(LogoutCallback);
