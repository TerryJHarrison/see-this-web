import React from 'react';
import ExternalRedirect from '../ExternalRedirect';

//Render to redirect to logout flow
export const Logout = () => {
  return <ExternalRedirect url={`${process.env.REACT_APP_AUTH_URL}/logout?response_type=token&client_id=${process.env.REACT_APP_AUTH_CLIENT_ID}&logout_uri=${process.env.REACT_APP_AUTH_LOGOUT_CALLBACK}`}/>;
};

export default Logout;
