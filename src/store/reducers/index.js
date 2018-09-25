import { combineReducers } from 'redux';
import * as reducers from './contacts';

export default combineReducers({
  contacts: reducers.contactsReducer,
  contactModal: reducers.contactModalReducer
});