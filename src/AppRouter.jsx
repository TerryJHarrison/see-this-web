import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Home from "./pages/Home";
import Example from "./pages/Example";
import API from "./pages/API";
import Collections from "./pages/Collections";
import Profile from "./pages/Profile";
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
import LinkCollection from "./pages/LinkCollection";
import PublicRoute from "./components/authentication/PublicRoute";
import CollectionLayout from "./components/layouts/CollectionLayout";
import EditLinkCollection from "./components/collections/EditCollection";

const AppRouter = ({checked}) => {
  return (
    <Router>
        {checked &&
        <Switch>
          <PublicRoute exact path="/" component={Home}/>
          <PublicRoute exact path="/collections" component={Collections}/>
          <PublicRoute path="/api" component={API}/>
          <PublicRoute path="/example" component={Example}/>
          <PublicRoute path="/register" exact component={Register}/>
          <PublicRoute path="/login" exact component={Login}/>
          <PublicRoute path="/logout" exact component={Logout}/>
          <PublicRoute path="/authorize/register" component={RegisterCallback}/>
          <PublicRoute path="/authorize/login" component={LoginCallback}/>
          <PublicRoute path="/authorize/logout" component={LogoutCallback}/>
          <PrivateRoute path="/profile/collections/:id" component={EditLinkCollection}/>
          <PrivateRoute path="/profile" exact component={Profile}/>
          <PrivateRoute path="/profile/close" exact component={ConfirmCloseAccount}/>
          <PublicRoute path="/portfolio/:id" component={LinkCollection} Layout={CollectionLayout}/>
        </Switch>
        }
      <ToastDisplay key="toasts-display"/>
    </Router>
  );
}

const mapStateToProps = state => ({
  checked: state.session.checked
});

export default connect(mapStateToProps)(AppRouter);
