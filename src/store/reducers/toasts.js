import * as actions from '../actions';

function toasts(state = {}, action) {
  switch(action.type){
    case actions.ADD_SUCCESS_TOAST:
    case actions.ADD_FAILURE_TOAST:
      action.id = state.counter;
      return Object.assign({}, state, {
        toasts: [...state.toasts, action],
        counter: state.counter + 1
      });
    default:
      return state;
  }
}

export default toasts;
