import { createStore } from 'redux';

const INITIAL_STATE = {
  data: ['Plus One', 'John Wick', 'Transit']
};

function films(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FILM':
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
}

const store = createStore(films);

export default store;
