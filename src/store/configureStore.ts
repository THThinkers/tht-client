import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
// import rootSaga from '../sagas';

const configureStoreDev = (initialState?: object) => {
  const middlewares = [
    /* redux-logger 같은거 넣어주면 될듯 */
    reduxImmutableStateInvariant(),
  ];
  // redux devtool과 middleware를 compose
  const composeEnhancers =(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // !는 typescript보다 내가 type을 더 잘할 때,
  // 있다고 확신할 때 쓰면 됨.
  const store = createStore(
    rootReducer,
    initialState!,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
}

const configureStoreProd = (initialState?: object) => {
  const middlewares = [
    /* redux-logger 같은거 넣어주면 될듯 */
  ];
  // !는 typescript보다 내가 type을 더 잘할 때,
  // 있다고 확신할 때 쓰면 됨.
  const store = createStore(
    rootReducer,
    initialState!,
    // applyMiddleware(...middlewares)
  );
  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

console.log(process.env.NODE_ENV);
export default configureStore;
