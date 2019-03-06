import { all, call, fork, put, take, takeLatest } from 'redux-saga/effects';
import { IGetProfile, ISignup } from '../actions/auth';
import * as authApi from '../api/auth';
import {
  GET_PROFILE,
  GET_PROFILE_FAILURE,
  GET_PROFILE_SUCCESS,
  LOGOUT,
  SIGNUP,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from '../constants/actionTypes';

function* getProfile(action: IGetProfile) {
  try {
    const { user } = yield call(authApi.getProfile);
    if (!user) {
      throw Error();
    }
    yield put({ type: GET_PROFILE_SUCCESS, user });
  } catch (err) {
    yield put({
      type: GET_PROFILE_FAILURE,
    });
  }
}
function* signup(action: ISignup) {
  try {
    const { user } = action;
    yield call(authApi.signup, user);
    yield put({ type: SIGNUP_SUCCESS });
  } catch (err) {
    yield put({
      error: err.response ? err.response.error : '',
      type: SIGNUP_FAILURE,
    });
  }
}

function* watchGetProfile() {
  while (true) {
    const actions = yield take(GET_PROFILE);
    yield call(getProfile, actions);
  }
}

function* watchSignup() {
  yield takeLatest(SIGNUP, signup);
}

function* watchLogout() {
  while (true) {
    yield take(LOGOUT);
    yield call(authApi.logout);
  }
}

export default function* authSaga() {
  yield all([fork(watchGetProfile), fork(watchSignup), fork(watchLogout)]);
}
