import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { IGetMembers } from '../actions/member';
import * as memberApi from '../api/member';
import { GET_MEMBERS, GET_MEMBERS_FAILURE, GET_MEMBERS_SUCCESS } from '../constants/actionTypes';

function* getMembers(action: IGetMembers) {
  try {
    const { query } = action;
    const members = yield call(memberApi.getMembers, query);
    yield put({
      type: GET_MEMBERS_SUCCESS,
      members,
    });
  } catch (err) {
    yield put({
      type: GET_MEMBERS_FAILURE,
      error: err.data.error,
    });
  }
}
function* watchGetMembers() {
  yield takeLatest(GET_MEMBERS, getMembers);
}
export default function* memberSaga() {
  yield all([fork(watchGetMembers)]);
}
