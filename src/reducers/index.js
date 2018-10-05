import { combineReducers } from 'redux-seamless-immutable';
import BaseNavigation from '../Router';
import dataReducer from './dataReducer';
import articleReducer from './articleReducer';
import selectedItemReducer from './selectedItemReducer';
import sendReducer from './sendReducer';

export default combineReducers({
  navigation: (state, action) => BaseNavigation.router.getStateForAction(action, state),
  state: (state = {}) => state,
  dataR: dataReducer,
  article: articleReducer,
  items: selectedItemReducer,
  send: sendReducer
});
