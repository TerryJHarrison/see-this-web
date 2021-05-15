import {Container} from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Example from "./pages/Example";
import API from "./pages/API";
import Collections from "./pages/Collections";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Login from "./components/authentication/Login"
import Logout from "./components/authentication/Logout"
import Register from "./components/authentication/Register"
import LoginCallback from "./components/authentication/LoginCallback"
import LogoutCallback from "./components/authentication/LogoutCallback"
import RegisterCallback from "./components/authentication/RegisterCallback"
import ConfirmCloseAccount from "./components/authentication/ConfirmCloseAccount"
import PrivateRoute from "./components/authentication/PrivateRoute"
import ToastDisplay from "./components/ToastDisplay";

import './css/index.css'
import {connect} from "react-redux";

const AppRouter = ({checked}) => {
  return (
    <Router>
      <Header/>
      <Container>
        {checked &&
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/collections" component={Collections}/>
          <Route path="/api" component={API}/>
          <Route path="/example" component={Example}/>
          <Route path="/register" exact component={Register}/>
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
    </Router>
  );
}

const mapStateToProps = state => ({
  checked: state.session.checked
});

export default connect(mapStateToProps)(AppRouter);
