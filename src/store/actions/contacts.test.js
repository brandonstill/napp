import * as actionTypes from './types';
import * as actions from './index';

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = actions.fetchContacts();
    expect(action.type).toEqual(actionTypes.FETCH_CONTACTS);
  });
});

describe('recieveContacts', () => {
  it('has the correct type', () => {
    const action = actions.recieveContacts();
    expect(action.type).toEqual(actionTypes.RECIEVE_CONTACTS);
  });
  it('has the correct payload', () => {
    const action = actions.recieveContacts('New Contact');
    expect(action.payload).toEqual('New Contact');
  });
});

describe('saveContact', () => {
  it('has the correct type', () => {
    const action = actions.saveContact();
    expect(action.type).toEqual(actionTypes.SAVE_CONTACT);
  });
  it('has the correct payload', () => {
    const action = actions.saveContact('New Contact');
    expect(action.payload).toEqual('New Contact');
  });
});

describe('contactModal', () => {
  it('has the correct type', () => {
    const action = actions.contactModal();
    expect(action.type).toEqual(actionTypes.CONTACT_MODAL);
  });
  it('has the correct payload', () => {
    const action = actions.contactModal(true);
    expect(action.payload).toEqual(true);
  });
});