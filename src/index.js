import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from './GlobalStyles';

// new
// import {store}
import { Provider } from 'react-redux';
import { store } from 'components/redux/store';
import { persistor } from 'components/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
//

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      <GlobalStyle />
    </Provider>
  </React.StrictMode>
);
