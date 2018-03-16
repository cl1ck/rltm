import { combineReducers } from 'redux';
import language from 'ducks/language';
import route from 'ducks/route';

export default combineReducers({
  language,
  route,
});
