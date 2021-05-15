import * as actions from '../actions';

export const logout = () => ({
  type: actions.LOGOUT
});

export const processLogin = (id, email, username, token, history) => ({
  type: actions.PROCESS_LOGIN,
  id: id,
  email: email,
  username: username,
  token: token,
  history: history
});

export const closeAccount = () => ({
  type: actions.CLOSE_ACCOUNT
});
