import React from 'react';
import ExternalRedirect from '../ExternalRedirect';

//Render to redirect to login page
export const Login = () => {
  return <ExternalRedirect url={`${process.env.REACT_APP_AUTH_URL}/login?response_type=token&client_id=${process.env.REACT_APP_AUTH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_AUTH_LOGIN_CALLBACK}`}/>;
};

export default Login;
