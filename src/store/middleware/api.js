import * as actions from '../actions';
import {sessionService} from 'redux-react-session';
import {addFailureToast, addSuccessToast} from "../actions/toasts";
import {addCreatedLink, setOwnedLinks} from "../actions/links";

const axios = require('axios').default;

async function apiPost(apiPath, body = {}){
  return await axios.post(`https://api.seeth.is/${apiPath}`, body);
}

async function userApiGet(apiPath){
  const session = await sessionService.loadSession();
  return await axios.get(`https://api.seeth.is/${apiPath}`, {headers: {'Authorization': session.token}})
}

async function userApiPut(apiPath, body = {}){
  const session = await sessionService.loadSession();
  return await axios.put(`https://api.seeth.is/${apiPath}`, body, {headers: {'Authorization': session.token}})
}

async function userApiPatch(apiPath, body = {}){
  const session = await sessionService.loadSession();
  return await axios.patch(`https://api.seeth.is/${apiPath}`, body, {headers: {'Authorization': session.token}})
}

async function userApiDelete(apiPath){
  const session = await sessionService.loadSession();
  return await axios.delete(`https://api.seeth.is/${apiPath}`, {headers: {'Authorization': session.token}})
}

const api = store => next => async action => {
  switch(action.type){
    case actions.CREATE_SHORT_LINK:
      const data = store.getState();
      const body = {
        link: action.link,
        redirectUrl: action.url
      };
      try {
        let response;
        if(data.session.authenticated){
          response = await userApiPut('links', body)
        } else {
          response = await apiPost('links', body);
        }

        store.dispatch(addCreatedLink(response.data.link, action.url));
        store.dispatch(addSuccessToast('Short link created', `Use it now: seeth.is/l/${response.data.link}`, 10000));
      } catch(e){
        if(e.response.status === 400){
          store.dispatch(addFailureToast('Already exists', 'That link already exists, try a different path'));
        } else {
          store.dispatch(addFailureToast('Uh-oh!', 'Could not create short link, please try again in a few minutes.'));
        }
      }
      break;
    case actions.UPDATE_SHORT_LINK:
      try {
        let response = await userApiPatch('links', {
          link: action.link,
          redirectUrl: action.url
        })

        store.dispatch(addCreatedLink(response.data.link, action.url));
        store.dispatch(addSuccessToast('Short link updated', `Use it now: seeth.is/l/${response.data.link}`, 10000));
      } catch(e){
        if(e.response.status === 400){
          store.dispatch(addFailureToast('Bad request', 'Make sure you entered all data correctly'));
        } else {
          store.dispatch(addFailureToast('Uh-oh!', 'Could not create short link, please try again in a few minutes.'));
        }
      }
      break;
    case actions.DELETE_SHORT_LINK:
      try {
        await userApiDelete('links', {
          link: action.link
        })

        store.dispatch(addSuccessToast('Short link deleted', "It's gone. Recreate it now if you want to claim the link", 10000));
      } catch(e){
        if(e.response.status === 400){
          store.dispatch(addFailureToast('Bad request', 'Make sure you entered all data correctly'));
        } else {
          store.dispatch(addFailureToast('Uh-oh!', 'Could not create short link, please try again in a few minutes.'));
        }
      }
      break;
    case actions.GET_OWNED_LINKS:
      const response = await userApiGet('links');
      store.dispatch(setOwnedLinks(response["data"]))
      break;
    case actions.CLOSE_ACCOUNT:
      await userApiDelete('accounts');
      break;
    default:
      break;
  }
  return next(action);
};

export default api;
