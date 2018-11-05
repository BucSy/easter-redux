import dataReducer from './dataReducer';
import articleReducer from './articleReducer';
import selectedItemReducer from './selectedItemReducer';
import sendReducer from './sendReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  state: (state = {}) => state,
  dataR: dataReducer,
  article: articleReducer,
  items: selectedItemReducer,
  send: sendReducer
});
