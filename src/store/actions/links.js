import * as actions from '../actions';

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

export const setButtonColor = color => ({
  type: actions.SET_BUTTON_COLOR,
  color: color
});

export const setButtonHoverColor = color => ({
  type: actions.SET_BUTTON_HOVER_COLOR,
  color: color
});

export const setTextHoverColor = color => ({
  type: actions.SET_TEXT_HOVER_COLOR,
  color: color
});

export const setBlockColor = color => ({
  type: actions.SET_BLOCK_COLOR,
  color: color
});

export const setBackgroundColor = color => ({
  type: actions.SET_BACKGROUND_COLOR,
  color: color
});

export const setButtonTextColor = color => ({
  type: actions.SET_BUTTON_TEXT_COLOR,
  color: color
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

export const setLinkShouldOpenInNewTab = (index, shouldOpenInNewTab) => ({
  type: actions.SET_LINK_SHOULD_OPEN_IN_NEW_TAB,
  index: index,
  shouldOpenInNewTab: shouldOpenInNewTab
});

export const setLinkIcon = (index, icon) => ({
  type: actions.SET_LINK_ICON,
  index: index,
  icon: icon
});

export const setLinkIconSize = (index, iconSize) => ({
  type: actions.SET_LINK_ICON_SIZE,
  index: index,
  iconSize: iconSize
});

export const setLinkIconLocation = (index, iconLocation) => ({
  type: actions.SET_LINK_ICON_LOCATION,
  index: index,
  iconLocation: iconLocation
});
