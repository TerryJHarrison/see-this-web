import * as actions from '../actions';
import {sessionService} from 'redux-react-session';
import {addFailureToast, addSuccessToast} from "../actions/toasts";
const axios = require('axios').default;

/**
 * Creates default POST request options
 * @param token {?null | string} Signed JWT
 * @param method {'get' | 'post' | 'put' | 'patch'}
 * @param body {?null | object}
 */
function requestOptions(body = null, method = 'post', token = null) {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: method,
    body: body,
    mode: 'no-cors'
  };

  if(token !== null){
    options.headers.Authorization = token;
  }

  return options;
}

/**
 * Makes POST (by default) requests to SeeTh.is API
 * @param apiPath {string} URL path to call
 * @param body {{}} Request body
 * @return {Promise<any>}
 */
async function apiCall(apiPath, body = {}){
  try {
    return await axios.post(`https://api.seeth.is/${apiPath}`, body);
  } catch (e){
    console.error(e);
    return {"data": {
      'statusCode': 500,
      'message': 'Could not generate short link'
    }};
  }
}

function handleCreateShortLinkResponse(store, response, link){
  if(response.data.statusCode === 200){
    store.dispatch(addSuccessToast('Short link created', `Use it now: seeth.is/l/${link}`, 10000));
  } else if(response.data.statusCode === 400){
    store.dispatch(addFailureToast('Already exists', 'That link already exists, try a different path'));
  } else {
    store.dispatch(addFailureToast('Uh-oh!', 'Could not create short link, please try again in a few minutes.'));
  }
}

async function userApiCall(apiPath, method = 'get', body = null){
  const session = await sessionService.loadSession();
  const response = await fetch(`https://api.seeth.is/users/${apiPath}`, requestOptions(session.token, method, body));
  return response.json();
}

const api = store => next => async action => {
  switch(action.type){
    case actions.CREATE_SHORT_LINK:
      const response = await apiCall('links', {
        link: action.link,
        url: action.url
      });
      handleCreateShortLinkResponse(store, response, action.link);
      break;
    case actions.CLOSE_ACCOUNT:
      await userApiCall('', 'delete');
      break;
    default:
      break;
  }
  return next(action);
};

export default api;
