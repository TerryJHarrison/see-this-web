import {applyMiddleware} from 'redux';
import api from './api';
import throttle from './throttle';
import auth from './auth';

export default applyMiddleware(...[throttle, api, auth]);
