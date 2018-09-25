import { CONTACT_MODAL } from '../actions/types';
import { RECIEVE_CONTACTS } from '../actions/types';

export const contactModalReducer = (state = false, action) => {
  switch (action.type) {
    case CONTACT_MODAL:
      return action.payload;
    default:
      return state;
  }
}

export const contactsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_CONTACTS:
      return action.payload;
    default:
      return state;
  }
}