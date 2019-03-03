import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './store';

// COMPONENT
import Home from './pages/home';
import { GlobalStyles } from './utils/globalStyle';

const { persistor, store } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyles />
      <Home />
    </PersistGate>
  </Provider>
);

export default App;
