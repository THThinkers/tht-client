import { all, call, fork, put, take, takeLatest } from 'redux-saga/effects';
import {
  IGetProfile,
  IOauthLink,
  IOauthLinkFailure,
  IOauthLinkSuccess,
  ISignin,
  ISigninFailure,
  ISigninSuccess,
} from '../actions/auth';
import * as authApi from '../api/auth';
import {
  GET_PROFILE,
  GET_PROFILE_FAILURE,
  GET_PROFILE_SUCCESS,
  LOGOUT,
  OAUTH_LINK,
  OAUTH_LINK_FAILURE,
  OAUTH_LINK_SUCCESS,
  SIGNIN,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
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

function* signin(action: ISignin) {
  try {
    const { user } = action;
    const { success, user: successUser } = yield call(authApi.signin, user);
    if (success) {
      yield put<ISigninSuccess>({ type: SIGNIN_SUCCESS, user: successUser });
    } else {
      throw new Error('로그인에 실패하였습니다. 다시 시도해주세요.');
    }
  } catch (err) {
    const message = err.response.data ? err.response.data.error : err.message;
    yield put<ISigninFailure>({ error: message, type: SIGNIN_FAILURE });
  }
}

function* oauthLink(action: IOauthLink) {
  try {
    const { user } = action;
    const { success } = yield call(authApi.oauthLink, user);
    if (success) {
      yield put<IOauthLinkSuccess>({ type: OAUTH_LINK_SUCCESS });
    } else {
      throw new Error('로그인에 실패하였습니다.');
    }
  } catch (err) {
    yield put<IOauthLinkFailure>({
      error: '계정 연동에 실패하였습니다. 다시 시도해주세요',
      type: OAUTH_LINK_FAILURE,
    });
  }
}

function* watchGetProfile() {
  while (true) {
    const actions = yield take(GET_PROFILE);
    yield call(getProfile, actions);
  }
}

function* watchSignin() {
  yield takeLatest(SIGNIN, signin);
}

function* watchOauthLink() {
  yield takeLatest(OAUTH_LINK, oauthLink);
}

function* watchLogout() {
  while (true) {
    yield take(LOGOUT);
    yield call(authApi.logout);
    window.location.replace('/');
  }
}

export default function* authSaga() {
  yield all([fork(watchGetProfile), fork(watchSignin), fork(watchOauthLink), fork(watchLogout)]);
}
