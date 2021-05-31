import * as actions from '../actions';

export const createShortLink = (link, url) => ({
  type: actions.CREATE_SHORT_LINK,
  link: link,
  url: url,
  meta: {
    throttle: 3000
  }
});

export const updateShortLink = (link, url) => ({
  type: actions.UPDATE_SHORT_LINK,
  link: link,
  url: url,
  meta: {
    throttle: 1500
  }
});

export const deleteShortLink = link => ({
  type: actions.DELETE_SHORT_LINK,
  link: link,
  meta: {
    throttle: 1500
  }
});

export const getOwnedLinks = () => ({
  type: actions.GET_OWNED_LINKS,
  meta: {
    throttle: 3000
  }
});

export const getLinkCollection = (id) => ({
  type: actions.GET_LINK_COLLECTION,
  id: id,
  meta: {
    throttle: 3000
  }
});
