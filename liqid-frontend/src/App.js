import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './store';

// COMPONENT
import Home from './pages/home';

const { persistor, store } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Home />
    </PersistGate>
  </Provider>
);

export default App;
