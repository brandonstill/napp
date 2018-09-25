import * as actions from '../actions';
import { call, put } from 'redux-saga/effects';
import { API_ROOT } from '../../appConstants/api';
import { fetchContactsSaga, saveContactsSaga } from './contacts';
import assert from 'assert';
import axios from 'axios';

describe('fetchContactsSaga', () => {
  let iterator;

  const response = {
    data: 'mock'
  };

  beforeEach(() => {
    iterator = fetchContactsSaga();
  });

  it('should complete the saga', () => {

    assert.deepEqual(
      iterator.next().value, 
      call(axios.get, `${API_ROOT}/api/contacts`),
      'should call axios.get with path "${API_ROOT}/api/contacts"'
    );

    assert.deepEqual(
      iterator.next(response).value, 
      put(actions.recieveContacts(response.data)),
      'should call recieveContacts action with response.data'
    );

    assert.deepEqual(
      iterator.next().done, 
      true,
      'saga should be done'
    );

  });

});

describe('saveContactsSaga', () => {
  let iterator;

  const data = {
    payload: {
      stuff: 'mock'
    }
  };

  beforeEach(() => {
    iterator = saveContactsSaga(data);
  });

  it('should complete the saga"', () => {

    assert.deepEqual(
      iterator.next().value, 
      call(axios.post, `${API_ROOT}/api/contacts/new`, data.payload), 
      'it should call axios.post to path "${API_ROOT}/api/contacts" with data.payload'
    );

    assert.deepEqual(
      iterator.next().value, 
      put(actions.contactModal(false)),
      'it should call the contactModal action with false'
    );

    assert.deepEqual(
      iterator.next().value, 
      put(actions.fetchContacts()),
      'it should call the fetchContacts action'
    );

    assert.deepEqual(
      iterator.next().done, 
      true,
      'saga should be done'
    );

  });
});