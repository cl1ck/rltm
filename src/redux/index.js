import { combineReducers } from 'redux-immutable';
import app from './app';
import language from './language';
import route from './route';

export default combineReducers({
  app,
  language,
  route,
});
