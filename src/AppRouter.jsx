import {lazy, Suspense} from "react";
import {Container} from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './css/index.css'
import {connect} from "react-redux";
import {init} from "@amplitude/analytics-browser";

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./pages/Home'));
const Example = lazy(() => import('./pages/Example'));
const API = lazy(() => import('./pages/API'));
const Profile = lazy(() => import('./pages/Profile'));
const Login = lazy(() => import('./components/authentication/Login'));
const Logout = lazy(() => import('./components/authentication/Logout'));
const LoginCallback = lazy(() => import('./components/authentication/LoginCallback'));
const LogoutCallback = lazy(() => import('./components/authentication/LogoutCallback'));
const RegisterCallback = lazy(() => import('./components/authentication/RegisterCallback'));
const ConfirmCloseAccount = lazy(() => import('./components/authentication/ConfirmCloseAccount'));
const PrivateRoute = lazy(() => import('./components/authentication/PrivateRoute'));
const ToastDisplay = lazy(() => import('./components/ToastDisplay'));


init("583dd5bcdd6c5501fbe7dd9795d35c85");
const AppRouter = ({checked}) => {
  return (
    <Router>
      <Suspense fallback={null}><Header/></Suspense>
      <Suspense fallback={null}>
        <Container>
          {checked &&
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/api" component={API}/>
            <Route path="/example" component={Example}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/logout" exact component={Logout}/>
            <Route path="/authorize/register" component={RegisterCallback}/>
            <Route path="/authorize/login" component={LoginCallback}/>
            <Route path="/authorize/logout" component={LogoutCallback}/>
            <PrivateRoute path="/profile" exact component={Profile}/>
            <PrivateRoute path="/profile/close" exact component={ConfirmCloseAccount}/>
          </Switch>
          }
          <ToastDisplay key="toasts-display"/>
          <Footer/>
        </Container>
      </Suspense>
    </Router>
  );
}

const mapStateToProps = state => ({
  checked: state.session.checked
});

export default connect(mapStateToProps)(AppRouter);
