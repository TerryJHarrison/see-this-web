import { combineReducers } from "redux";
import { sessionReducer as session } from 'redux-react-session';
import auth from './auth';
import toasts from './toasts';

export default combineReducers({
  auth,
  toasts,
  session
});
