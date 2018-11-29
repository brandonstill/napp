import axios from 'axios';
import * as actions from '../actions';
import { put, call } from 'redux-saga/effects';
import { API_ROOT } from '../../appConstants/api';

export function* fetchContactsSaga() {
  try {
    const response = yield call(axios.get, `${API_ROOT}/api/contacts`);
    yield put(actions.recieveContacts(response.data));
  } catch (error) {
    console.log('fetchError');
  }
}

export function* saveContactsSaga(data) {
  try {
    yield call(axios.post, `${API_ROOT}/api/contacts/new`, data.payload);
    yield put(actions.contactModal(false));
    yield put(actions.fetchContacts());
  } catch (error) {
    console.log('saveError');
  }
}

export function* deleteContactSaga(data) {
  try {
    yield call(axios.post, `${API_ROOT}/api/contacts/delete`, data.payload);
    const response = yield call(axios.get, `${API_ROOT}/api/contacts`);
    yield put(actions.recieveContacts(response.data));
  } catch (error) {
    console.log('deleteError');
  }
}
