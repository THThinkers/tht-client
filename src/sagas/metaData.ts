import { put } from 'redux-saga/effects';
import { GET_PROFILE } from '../constants/actionTypes';

export function* init() {
  // app 시작시 호출하는 것.
  // TODO: url pathname을 보고 리다이렉팅이라면 따로 분기 처리
  yield put({ type: GET_PROFILE });
}
