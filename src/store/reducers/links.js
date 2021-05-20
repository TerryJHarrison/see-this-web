import * as actions from '../actions';

function links(state = {}, action) {
  switch(action.type){
    case actions.SET_OWNED_LINKS:
      return Object.assign({}, state, {
        owned: action.links['links']
      });
    case actions.ADD_CREATED_LINK:
      return Object.assign({}, state, {
        created: [...state.created, {
          link: action.link,
          redirectUrl: action.redirectUrl
        }]
      });
    default:
      return state;
  }
}

export default links;
