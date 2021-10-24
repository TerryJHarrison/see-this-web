import * as actions from '../actions';
import {getUserData, updateUserData} from "../actions/api";
import { v4 as uuid } from 'uuid';

const auth = store => next => async action => {
  switch(action.type){
    case actions.ADD_IMAGE_BY_URL: {
      const images = store.getState().user.images
      images.push({
        index: uuid(),
        text: action.text,
        url: action.url
      });
      await store.dispatch(updateUserData({images}));
      store.dispatch(getUserData());
    } break;
    case actions.REMOVE_IMAGE: {
      let images = store.getState().user.images.filter(i => i.index !== action.index);
      // if(images.length === 0){images = null;}
      await store.dispatch(updateUserData({images}));
      store.dispatch(getUserData());
    } break;
    default:
      break;
  }
  return next(action);
};

export default auth;
