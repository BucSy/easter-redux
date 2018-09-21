import { combineReducers } from 'redux';
import BaseNavigation from '../Router';
import dataReducer from './dataReducer';
import articleReducer from './articleReducer';
import selectedItemReducer from './selectedItemReducer'

export default combineReducers({
  navigation: (state, action) => BaseNavigation.router.getStateForAction(action, state),
  state: (state = {}) => state,
  dataR: dataReducer,
  article: articleReducer,
  items: selectedItemReducer,
});
