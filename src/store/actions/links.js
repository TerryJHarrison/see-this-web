import * as actions from '../actions';

export const addCreatedLink = (link, url) => ({
  type: actions.ADD_CREATED_LINK,
  link: link,
  url: url
});

export const setOwnedLinks = links => ({
  type: actions.SET_OWNED_LINKS,
  links: links
})
