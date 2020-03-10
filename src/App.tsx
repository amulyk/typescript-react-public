// Core
import React, { FC } from 'react';
import { Provider } from 'react-redux';

// Other
import { store } from './init/store';

export const App: FC = () => (
  <Provider store={store}>

  </Provider>
);
