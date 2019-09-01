export const INITIAL_STATE = {
  data: ['Plus One', 'John Wick', 'Transit']
};

export function filmsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FILM':
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
}
