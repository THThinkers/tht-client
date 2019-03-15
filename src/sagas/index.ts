import { all, call, fork, take } from 'redux-saga/effects';
import { SET_ROOT_VALUE } from '../constants/actionTypes';
import authSaga from './auth';
import { init } from './metaData';
// redux-saga에 effects가 있고 effects를 이용해서 만든 helper가 있음.

// SET_ROOT_VALUE를 dispatch 할 때마다 루프를 한 번 씩 돈다.
// take는 인자로 받는 action이 dispatch 될 때 까지 동작을 block시킴.
function* watchSetRootValue() {
  while (true) {
    const { type, value } = yield take(SET_ROOT_VALUE);
    console.log(`Action: ${type}: next value is ${value}`);
  }
}

// sagamiddleware가 처음 시작되면 generator의 next()를 이용하여 다음 yield 값(effects)를 찾음. 그리고 또 next()... 반복
// 이 effects들은 실제로 보면 saga가 알아들을 수 있는 Object를 반환함.
// 실제 동작은 그 Object를 보고 middleware에서 함.

// 모든 generator의 root가 되는 generator.
// fork는 인자로 받는 함수를 block 없이 실행.
export default function* rootSaga() {
  yield all([fork(watchSetRootValue), fork(authSaga)]);
  yield call(init);
}
