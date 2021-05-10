import * as actions from '../actions';
import {sessionService} from 'redux-react-session';

const auth = store => next => async action => {
  switch(action.type){
    case actions.PROCESS_LOGIN:
      await sessionService.saveSession({token: action.token});
      await sessionService.saveUser({
        userId: action.id,
        email: action.email,
        token: action.token
      });
      action.history.push('/');
      break;
    default:
      break;
  }
  return next(action);
};

export default auth;
