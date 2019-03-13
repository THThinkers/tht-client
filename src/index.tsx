import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { GlobalStyle, ModalProvider } from './components';
import App from './root';
import configureStore from './store/configureStore';

const store: Store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <>
      <GlobalStyle />
      <ModalProvider>
        <App />
      </ModalProvider>
    </>
  </Provider>,
  document.getElementById('root'),
);
