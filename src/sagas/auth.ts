import { all, call, fork, put, take } from 'redux-saga/effects';
import { IGetProfile, IPutProfile } from '../actions/auth';
import * as authApi from '../api/auth';
import {
  GET_PROFILE,
  GET_PROFILE_FAILURE,
  GET_PROFILE_SUCCESS,
  LOGOUT,
  PUT_PROFILE,
  PUT_PROFILE_FAILURE,
  PUT_PROFILE_SUCCESS,
} from '../constants/actionTypes';

function* getProfile(action: IGetProfile) {
  try {
    const { user } = yield call(authApi.getProfile);
    if (!user) {
      throw new Error();
    }
    yield put({
      type: GET_PROFILE_SUCCESS,
      user,
    });
  } catch (err) {
    yield put({
      type: GET_PROFILE_FAILURE,
    });
  }
}
function* putProfile(action: IPutProfile) {
  const { user } = action;
  try {
    const {
      data: { user: updatedUser },
    } = yield call(authApi.updateProfile, user);
    yield put({
      type: PUT_PROFILE_SUCCESS,
      user: updatedUser,
    });
  } catch (error) {
    yield put({
      type: PUT_PROFILE_FAILURE,
    });
  }
}
function* watchGetProfile() {
  while (true) {
    const actions = yield take(GET_PROFILE);
    yield call(getProfile, actions);
  }
}
function* watchPutProfile() {
  while (true) {
    const action = yield take(PUT_PROFILE);
    yield call(putProfile, action);
  }
}
function* watchLogout() {
  while (true) {
    yield take(LOGOUT);
    yield call(authApi.logout);
  }
}
export default function* authSaga() {
  yield all([fork(watchGetProfile), fork(watchPutProfile), fork(watchLogout)]);
}
