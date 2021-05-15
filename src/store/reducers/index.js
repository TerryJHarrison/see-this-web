import { combineReducers } from "redux";
import { sessionReducer as session } from 'redux-react-session';
import auth from './auth';
import toasts from './toasts';
import links from './links';

export default combineReducers({
  auth,
  toasts,
  links,
  session
});
