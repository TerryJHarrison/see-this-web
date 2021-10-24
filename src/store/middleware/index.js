import {applyMiddleware} from 'redux';
import api from './api';
import throttle from './throttle';
import auth from './auth';
import user from './user';

export default applyMiddleware(...[throttle, api, user, auth]);
