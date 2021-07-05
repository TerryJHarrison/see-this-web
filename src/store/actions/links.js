import * as actions from '../actions';
import {SET_LINK_TEXT} from "../actions";

export const addCreatedLink = (link, redirectUrl) => ({
  type: actions.ADD_CREATED_LINK,
  link: link,
  redirectUrl: redirectUrl
});

export const setOwnedLinks = links => ({
  type: actions.SET_OWNED_LINKS,
  links: links
});

export const setOwnedLinkCollections = collections => ({
  type: actions.SET_OWNED_LINK_COLLECTIONS,
  collections: collections,
  meta: {
    throttle: 3000
  }
});

export const removeOwnedLink = link => ({
  type: actions.REMOVE_OWNED_LINK,
  link: link
});

export const setLinkCollection = collection => ({
  type: actions.SET_LINK_COLLECTION,
  collection: collection
});

export const setHeading = heading => ({
  type: actions.SET_HEADING,
  heading: heading
});

export const setSubheading = subheading => ({
  type: actions.SET_SUBHEADING,
  subheading: subheading
});

export const setLinkText = (index, text) => ({
  type: actions.SET_LINK_TEXT,
  index: index,
  text: text
});

export const setLinkRedirectUrl = (index, redirectUrl) => ({
  type: actions.SET_LINK_REDIRECT_URL,
  index: index,
  redirectUrl: redirectUrl
});
