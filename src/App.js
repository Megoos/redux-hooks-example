import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import FilmList from './components/FilmList';

function App() {
  return (
    <Provider store={store}>
      <FilmList />
    </Provider>
  );
}

export default App;
