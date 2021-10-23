import { createStore } from "redux";
import { sessionService } from 'redux-react-session';
import rootReducer from "./reducers";
import middleware from './middleware';

const initialState = {
  toasts: {
    toasts: [],
    counter: 0
  },
  links: {
    owned: [],
    collections: [],
    created: [],
    activeCollection: {}
  }
};

const store = createStore(rootReducer, initialState, middleware);
sessionService.initSessionService(store, {driver: 'COOKIES'});

export default store;
