import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter basename="/yourPets-project-front">
          <App />
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>  </React.StrictMode>
);
