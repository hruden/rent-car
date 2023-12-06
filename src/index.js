import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>...loading</div>} persistor={persistor}>
        <BrowserRouter basename="/rent-car">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  /* </React.StrictMode> */
);
