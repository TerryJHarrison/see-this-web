import * as actions from '../actions';

export const addSuccessToast = (header, content, duration = 4500) => ({
  type: actions.ADD_SUCCESS_TOAST,
  header: header,
  content: content,
  duration: duration,
  displayType: 'success'
});

export const addFailureToast = (header, content, duration = 4500) => ({
  type: actions.ADD_FAILURE_TOAST,
  header: header,
  content: content,
  duration: duration,
  displayType: 'failure'
});
