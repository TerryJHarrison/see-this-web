import * as actions from '../actions';

export const createShortLink = (link, url) => ({
  type: actions.CREATE_SHORT_LINK,
  link: link,
  url: url,
  meta: {
    throttle: 500
  }
});

export const createShortLinkCollection = name => ({
  type: actions.CREATE_SHORT_LINK_COLLECTION,
  name: name,
  meta: {
    throttle: 500
  }
});

export const updateShortLinkCollection = (id, updates) => ({
  type: actions.UPDATE_SHORT_LINK_COLLECTION,
  id: id,
  updates: updates,
  meta: {
    throttle: 500
  }
});

export const deleteShortLinkCollection = id => ({
  type: actions.DELETE_SHORT_LINK_COLLECTION,
  id: id,
  meta: {
    throttle: 500
  }
});

export const updateShortLink = (link, url) => ({
  type: actions.UPDATE_SHORT_LINK,
  link: link,
  url: url,
  meta: {
    throttle: 500
  }
});

export const deleteShortLink = link => ({
  type: actions.DELETE_SHORT_LINK,
  link: link,
  meta: {
    throttle: 500
  }
});

export const getOwnedLinks = () => ({
  type: actions.GET_OWNED_LINKS,
  meta: {
    throttle: 500
  }
});

export const getOwnedLinkCollections = () => ({
  type: actions.GET_OWNED_LINK_COLLECTIONS,
  meta: {
    throttle: 500
  }
});

export const getLinkCollection = id => ({
  type: actions.GET_LINK_COLLECTION,
  id: id,
  meta: {
    throttle: 500
  }
});

export const addEmptyLinkToActiveCollection = () => ({
  type: actions.ADD_EMPTY_LINK_TO_ACTIVE_COLLECTION
});

export const removeLinkFromActiveCollection = linkIndex => ({
  type: actions.REMOVE_LINK_FROM_ACTIVE_COLLECTION,
  linkIndex: linkIndex
});

export const setHeaderTextColor = color => ({
  type: actions.SET_COLLECTION_HEADER_TEXT_COLOR,
  color: color
});

export const setSubheaderTextColor = color => ({
  type: actions.SET_COLLECTION_SUBHEADER_TEXT_COLOR,
  color: color
});

export const recordLinkClick = (collectionId, linkIndex) => ({
  type: actions.RECORD_LINK_CLICK,
  linkIndex: linkIndex,
  collectionId: collectionId
});

export const setCollectionHeaderLocation = align => ({
  type: actions.SET_COLLECTION_HEADER_LOCATION,
  align: align
});

export const setCollectionSubheaderLocation = align => ({
  type: actions.SET_COLLECTION_SUBHEADER_LOCATION,
  align: align
});
