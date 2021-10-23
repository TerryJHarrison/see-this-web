import { combineReducers } from "redux";
import { sessionReducer as session } from 'redux-react-session';
import toasts from './toasts';
import links from './links';

export default combineReducers({
  toasts,
  links,
  session
});
