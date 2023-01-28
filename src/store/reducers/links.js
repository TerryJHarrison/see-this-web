import * as actions from '../actions';

function links(state = {}, action) {
  switch(action.type){
    case actions.SET_OWNED_LINKS:
      return Object.assign({}, state, {
        owned: action.links['links']
      });
    case actions.REMOVE_OWNED_LINK:
      return Object.assign({}, state, {
        owned: state.owned.filter(l => l.link.toLowerCase() !== action.link.toLowerCase())
      });
    case actions.ADD_CREATED_LINK:
      return Object.assign({}, state, {
        created: [...state.created, {
          link: action.link.toLowerCase(),
          redirectUrl: action.redirectUrl
        }]
      });
    case actions.REMOVE_CREATED_LINK:
      return Object.assign({}, state, {
        created: state.created.filter(l => l.link.toLowerCase() !== action.link.toLowerCase())
      });
    default:
      return state;
  }
}

export default links;
