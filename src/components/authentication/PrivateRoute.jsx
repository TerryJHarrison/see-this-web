import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import {sessionService} from 'redux-react-session';
import {logout} from "../../store/actions/auth";
import PageLayout from "../layouts/PageLayout";

const PrivateRoute = ({component, exact = false, path, authenticated, logout, Layout = PageLayout}) => {
  useEffect(() => {
    async function checkSession(){
      const session = await sessionService.loadSession();
      if (Date.now() > session.expiresAt) {
        logout();
      }
    }
    checkSession();
  });

  return <Route exact={exact}
    path={path}
    render={props =>
      authenticated ?
        <Layout component={React.createElement(component, props)}/>
        : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
    }
  />
}

const actionCreators = {
  logout
};

const mapStateToProps = state => ({
  authenticated: state.session.authenticated
});

export default connect(mapStateToProps, actionCreators)(PrivateRoute);
