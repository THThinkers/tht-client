import { all, call, fork, put, take } from 'redux-saga/effects';
import { IGetProfile, IPutProfile } from '../actions/auth';
import * as authApi from '../api/auth';
import {
  GET_PROFILE,
  GET_PROFILE_FAILURE,
  GET_PROFILE_SUCCESS,
  PUT_PROFILE,
  PUT_PROFILE_FAILURE,
  PUT_PROFILE_SUCCESS,
} from '../constants/actionTypes';

function* getProfile(action: IGetProfile) {
  try {
    const { data } = yield call(authApi.getProfile);
    const { user } = data;
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
  const { name, userId } = action;
  try {
    const {
      data: { user },
    } = yield call(authApi.updateProfile, userId, name);
    yield put({
      type: PUT_PROFILE_SUCCESS,
      user,
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
export default function* authSaga() {
  yield all([fork(watchGetProfile), fork(watchPutProfile)]);
}
