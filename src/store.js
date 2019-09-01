import { createStore } from 'redux';
import { filmsReducer } from './redux/reducers/filmsReducers';

const store = createStore(filmsReducer);

export default store;
