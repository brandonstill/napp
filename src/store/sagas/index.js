import * as actionTypes from '../actions/types';
import { takeEvery } from 'redux-saga/effects';
import { fetchContactsSaga, saveContactsSaga, deleteContactSaga } from './contacts';

export function* watchContactsSaga() {
  yield takeEvery(actionTypes.FETCH_CONTACTS, fetchContactsSaga);
  yield takeEvery(actionTypes.SAVE_CONTACT, saveContactsSaga);
  yield takeEvery(actionTypes.DELETE_CONTACT, deleteContactSaga);
}