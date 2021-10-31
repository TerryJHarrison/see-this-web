import * as actions from '../actions';

function user(state = {}, action) {
  switch(action.type){
    case actions.SET_USER_DATA:
      return Object.assign({}, state, {
        images: action.userData.images || [],
        imgurApiKey: action.userData.imgurApiKey,
        profileImage: action.userData.profileImage,
        qrCodeImage: action.userData.qrCodeImage
      });
    default:
      return state;
  }
}

export default user;
