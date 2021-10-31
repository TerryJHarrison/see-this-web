import * as actions from '../actions';

export const addImageByUrl = (text, url) => ({
  type: actions.ADD_IMAGE_BY_URL,
  text: text,
  url: url,
  meta: {
    throttle: 500
  }
});

export const removeImage = index => ({
  type: actions.REMOVE_IMAGE,
  index: index
})

export const setProfileImage = imageId => ({
  type: actions.SET_PROFILE_IMAGE,
  imageId: imageId
});

export const setProfileImageShape = shape => ({
  type: actions.SET_PROFILE_IMAGE_SHAPE,
  shape: shape
});

export const setProfileImageSize = size => ({
  type: actions.SET_PROFILE_IMAGE_SIZE,
  size: size
});

export const setQRCodeImage = imageId => ({
  type: actions.SET_QR_CODE_IMAGE,
  imageId: imageId
});
