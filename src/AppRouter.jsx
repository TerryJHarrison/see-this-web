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
import Register from "./pages/Register";
import Footer from "./components/Footer";
import ToastDisplay from "./components/ToastDisplay";

import './css/index.css'

function AppRouter() {
  return (
    <Router>
      <Header/>
      <Container>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/collections">
            <Register/>
          </Route>
          <Route path="/api">
            <API/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <Register/>
          </Route>
          <Route path="/example">
            <Example/>
          </Route>
        </Switch>
        <ToastDisplay key="toasts-display"/>
      </Container>
      <Footer/>
    </Router>
  );
}

export default AppRouter;
