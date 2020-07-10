import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import './index.css';
import App from './App';
import {store, persistor} from './redux/store';

ReactDOM.render(
  <Provider store={store}> 
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App /> 
          </PersistGate> 
        </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// 1) The Provider ensures that the redux store is used throughout the app
// 2) Browser Router around app gives the entire routing facility to the app