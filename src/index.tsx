import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
// @ts-expect-error TS(6142): Module './context/ShoppingCartContext' was resolve... Remove this comment to see the full error message
import { ShoppingCartProvider } from './context/ShoppingCartContext';
// @ts-expect-error TS(6142): Module './App' was resolved to 'C:/Users/kaarelso/... Remove this comment to see the full error message
import App from './App';
import store from './app/store';
import './scss/main.scss';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <React.StrictMode>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <Provider store={store}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <PersistGate persistor={persistor}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <ShoppingCartProvider>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <BrowserRouter>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <App />
          </BrowserRouter>
        </ShoppingCartProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
