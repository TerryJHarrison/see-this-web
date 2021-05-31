import * as actions from '../actions';

export const addCreatedLink = (link, redirectUrl) => ({
  type: actions.ADD_CREATED_LINK,
  link: link,
  redirectUrl: redirectUrl
});

export const setOwnedLinks = links => ({
  type: actions.SET_OWNED_LINKS,
  links: links
})

export const removeOwnedLink = link => ({
  type: actions.REMOVE_OWNED_LINK,
  link: link
})

export const setLinkCollection = collection => ({
  type: actions.SET_LINK_COLLECTION,
  collection: collection
})
