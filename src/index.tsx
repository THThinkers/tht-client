import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { GlobalStyle } from './components';
import App from './root';
import configureStore from './store/configureStore';

const store: Store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <>
      <GlobalStyle />
      <App />
    </>
  </Provider>,
  document.getElementById('root'),
);
