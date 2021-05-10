import * as actions from '../actions';
import {sessionService} from 'redux-react-session';

function auth(state = {}, action) {
  switch(action.type){
    case actions.LOGOUT:
      sessionService.deleteSession();
      sessionService.deleteUser();
      return state;
    default:
      return state;
  }
}

export default auth;
