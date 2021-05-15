import * as actions from '../actions';

export const createShortLink = (link, url) => ({
  type: actions.CREATE_SHORT_LINK,
  link: link,
  url: url,
  meta: {
    throttle: 3000
  }
});

export const getOwnedLinks = () => ({
  type: actions.GET_OWNED_LINKS,
  meta: {
    throttle: 3000
  }
});
