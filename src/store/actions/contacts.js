import * as actionTypes from './types';

export const fetchContacts = () => {
  return { type: actionTypes.FETCH_CONTACTS }
}

export const recieveContacts = data => {
  return {
    type: actionTypes.RECIEVE_CONTACTS,
    payload: data
  }
}

export const saveContact = data => {
  return { 
    type: actionTypes.SAVE_CONTACT,
    payload: data
  }
}

export const contactModal = data => {
  return { 
    type: actionTypes.CONTACT_MODAL,
    payload: data
  }
}