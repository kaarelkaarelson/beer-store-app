import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import App from './App';
import store from './app/store';
import './scss/main.scss';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ShoppingCartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ShoppingCartProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
