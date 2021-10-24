import { combineReducers } from "redux";
import { sessionReducer as session } from 'redux-react-session';
import toasts from './toasts';
import links from './links';
import user from './user';

export default combineReducers({
  toasts,
  links,
  user,
  session
});
