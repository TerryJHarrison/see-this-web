import * as actions from '../actions';
import {sessionService} from 'redux-react-session';
import * as jwt from 'jsonwebtoken';

const auth = store => next => async action => {
  switch(action.type){
    case actions.PROCESS_LOGIN:
      const loginData = jwt.decode(action.token);
      await sessionService.saveSession({
        token: action.token,
        expiresAt: loginData.exp * 1000
      });
      await sessionService.saveUser({
        userId: action.id,
        email: action.email,
        username: action.username,
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
