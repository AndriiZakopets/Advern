import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <div style={{ position: 'absolute', top: 0, left: 0 }}>
      <ReactNotification />
    </div>
  </StrictMode>,
  document.getElementById('root'),
);
