import axios from 'axios';
import * as actions from '../actions';
import { put, call } from 'redux-saga/effects';
import { API_ROOT } from '../../appConstants/api';

export function* fetchContactsSaga() {
  // const response = yield axios.get('/api/contacts');
  const response = yield call(axios.get, `${API_ROOT}/api/contacts`);
  yield put(actions.recieveContacts(response.data));
}

export function* saveContactsSaga(data) {
  //yield axios.post('/api/contacts/new', data.payload);
  yield call(axios.post, `${API_ROOT}/api/contacts/new`, data.payload);
  yield put(actions.contactModal(false));
  yield put(actions.fetchContacts());
}


