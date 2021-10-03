import * as actions from '../actions';

function links(state = {}, action) {
  switch(action.type){
    case actions.SET_OWNED_LINKS:
      return Object.assign({}, state, {
        owned: action.links['links']
      });
    case actions.SET_OWNED_LINK_COLLECTIONS:
      return Object.assign({}, state, {
        collections: action.collections['collections']
      });
    case actions.SET_LINK_COLLECTION:
      return Object.assign({}, state, {
        activeCollection: action.collection
      });
    case actions.SET_HEADING:
      return Object.assign({}, state, {
        activeCollection: Object.assign({}, state.activeCollection, {heading: action.heading})
      });
    case actions.SET_SUBHEADING:
      return Object.assign({}, state, {
        activeCollection: Object.assign({}, state.activeCollection, {subheading: action.subheading})
      });
    case actions.SET_BUTTON_COLOR:
      return Object.assign({}, state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          page: Object.assign({}, state.activeCollection.page, {
            buttonColor: action.color
          })
        })
      });
    case actions.SET_BUTTON_HOVER_COLOR:
      return Object.assign({}, state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          page: Object.assign({}, state.activeCollection.page, {
            buttonHoverColor: action.color
          })
        })
      });
    case actions.SET_TEXT_HOVER_COLOR:
      return Object.assign({}, state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          page: Object.assign({}, state.activeCollection.page, {
            textHoverColor: action.color
          })
        })
      });
    case actions.SET_BLOCK_COLOR:
      return Object.assign({}, state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          page: Object.assign({}, state.activeCollection.page, {
            blockColor: action.color
          })
        })
      });
    case actions.SET_BACKGROUND_COLOR:
      return Object.assign({}, state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          page: Object.assign({}, state.activeCollection.page, {
            backgroundColor: action.color
          })
        })
      });
    case actions.SET_BUTTON_TEXT_COLOR:
      return Object.assign({}, state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          page: Object.assign({}, state.activeCollection.page, {
            textColor: action.color
          })
        })
      });
    case actions.SET_LINK_TEXT: {
      const links = state.activeCollection.links;
      const link = links[action.index];
      link.text = action.text;
      links[action.index] = link;
      return Object.assign([], state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          links: links
        })
      });
    }
    case actions.SET_LINK_REDIRECT_URL: {
      const links = state.activeCollection.links;
      const link = links[action.index];
      link.redirectUrl = action.redirectUrl;
      links[action.index] = link;
      return Object.assign([], state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          links: links
        })
      });
    }
    case actions.SET_LINK_SHOULD_OPEN_IN_NEW_TAB: {
      const links = state.activeCollection.links;
      const link = links[action.index];
      link.shouldOpenInNewTab = action.shouldOpenInNewTab;
      links[action.index] = link;
      return Object.assign([], state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          links: links
        })
      });
    }
    case actions.SET_LINK_ICON: {
      const links = state.activeCollection.links;
      const link = links[action.index];
      link.icon = action.icon;
      links[action.index] = link;
      return Object.assign([], state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          links: links
        })
      });
    }
    case actions.SET_LINK_ICON_SIZE: {
      const links = state.activeCollection.links;
      const link = links[action.index];
      link.iconSize = action.iconSize;
      links[action.index] = link;
      return Object.assign([], state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          links: links
        })
      });
    }
    case actions.SET_LINK_ICON_LOCATION: {
      const links = state.activeCollection.links;
      const link = links[action.index];
      link.iconLocation = action.iconLocation;
      links[action.index] = link;
      return Object.assign([], state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          links: links
        })
      });
    }
    case actions.ADD_EMPTY_LINK_TO_ACTIVE_COLLECTION:
      return Object.assign([], state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          links: [...state.activeCollection.links, {index: state.activeCollection.links.length.toString(), redirectUrl: "", text: ""}]
        })
      });
    case actions.REMOVE_LINK_FROM_ACTIVE_COLLECTION:
      return Object.assign({}, state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          links: state.activeCollection.links.filter(l => l.index !== action.linkIndex).map(l => {
            return l.index < action.linkIndex ? l : Object.assign({}, l, {index: (l.index - 1).toString()})
          })
        })
      });
    case actions.SET_COLLECTION_HEADER_LOCATION:
      return Object.assign([], state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          headerAlign: action.align
        })
      });
    case actions.SET_COLLECTION_SUBHEADER_LOCATION:
      return Object.assign([], state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          subheaderAlign: action.align
        })
      });
    case actions.SET_COLLECTION_HEADER_TEXT_COLOR:
      return Object.assign([], state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          headerTextColor: action.color
        })
      });
    case actions.SET_COLLECTION_SUBHEADER_TEXT_COLOR:
      return Object.assign([], state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          subheaderTextColor: action.color
        })
      });
    case actions.SET_COLLECTION_HEADER_TEXT_SIZE:
      return Object.assign([], state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          headerTextSize: action.size
        })
      });
    case actions.SET_COLLECTION_SUBHEADER_TEXT_SIZE:
      return Object.assign([], state, {
        activeCollection: Object.assign({}, state.activeCollection, {
          subheaderTextSize: action.size
        })
      });
    case actions.REMOVE_OWNED_LINK:
      return Object.assign({}, state, {
        owned: state.owned.filter(l => l.link !== action.link)
      });
    case actions.ADD_CREATED_LINK:
      return Object.assign({}, state, {
        created: [...state.created, {
          link: action.link,
          redirectUrl: action.redirectUrl
        }]
      });
    default:
      return state;
  }
}

export default links;
