import * as actions from '../actions';

export const logout = () => ({
  type: actions.LOGOUT
});

export const processLogin = (id, email, token, history) => ({
  type: actions.PROCESS_LOGIN,
  id: id,
  email: email,
  token: token,
  history: history
});

export const closeAccount = () => ({
  type: actions.CLOSE_ACCOUNT
});
