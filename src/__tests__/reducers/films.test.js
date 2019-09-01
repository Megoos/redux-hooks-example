import { filmsReducer, INITIAL_STATE } from '../../redux/reducers/filmsReducers';
import * as FilmsActions from '../../redux/actions/filmsActions';

describe('Films reducer', () => {
  it('action ADD_FILM', () => {
    const state = filmsReducer(INITIAL_STATE, FilmsActions.addFilmAction('Fallout'));

    expect(state).toStrictEqual({ data: ['Plus One', 'John Wick', 'Transit', 'Fallout'] });
  });

  it('without initial state and default action type', () => {
    const state = filmsReducer(undefined, { type: 'INIT' });

    expect(state).toStrictEqual(INITIAL_STATE);
  });
});
