import React from 'react';
import ExternalRedirect from '../ExternalRedirect';

//Render to redirect to registration flow
export const Register = () => {
  return <ExternalRedirect url={`${process.env.REACT_APP_AUTH_URL}/signup?response_type=token&client_id=${process.env.REACT_APP_AUTH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_AUTH_REGISTER_CALLBACK}`}/>;
};

export default Register;
