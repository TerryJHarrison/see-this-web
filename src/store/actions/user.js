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
