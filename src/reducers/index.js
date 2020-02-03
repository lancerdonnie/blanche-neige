import { combineReducers } from 'redux';
import logReducer from './logReducer';
import itemsReducer from './itemsReducer';
const rootReducer = combineReducers({
  log: logReducer,
  items: itemsReducer
});

export default rootReducer;
