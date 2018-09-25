import * as reducers from './contacts';
import * as actionTypes from '../actions/types';

describe('contactModalReducer', () => {

  it('handles action of type CONTACT_MODAL', () => {
    const action = {
      type: actionTypes.CONTACT_MODAL,
      payload: true
    }
    
    const newState = reducers.contactModalReducer([], action);
    expect(newState).toEqual(true);
  });

  it('has a default', () => {
    const action = {
      type: 'NO_ACTION',
      payload: true
    }
    
    const newState = reducers.contactModalReducer(false, action);
    expect(newState).toEqual(false);
  });

});

describe('contactsReducer', () => {

  it('handles action of type RECIEVE_CONTACTS', () => {
    const action = {
      type: actionTypes.RECIEVE_CONTACTS,
      payload: { firstName: 'Name' }
    }
    
    const newState = reducers.contactsReducer([], action);
    expect(newState).toEqual({ firstName: 'Name' });
  });

  it('has a default', () => {
    const action = {
      type: 'NO_ACTION',
      payload: true
    }
    
    const newState = reducers.contactsReducer([], action);
    expect(newState).toEqual([]);
  });

});
