import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import FilmList from '../../components/FilmList';
import { filmsReducer } from '../../redux/reducers/filmsReducers';

function renderWithRedux(ui, { initialState, store = createStore(filmsReducer, initialState) } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

describe('FilmList component (renderWithRedux)', () => {
  it('should render films', () => {
    const { getByTestId, getByText } = renderWithRedux(<FilmList />, {
      initialState: {
        data: ['John Wick', 'Transit']
      }
    });
    const list = getByTestId('list');

    expect(list).toContainElement(getByText('John Wick'));
    expect(list).toContainElement(getByText('Transit'));
  });

  it('should be able to add new film', async () => {
    const { getByTestId, getByText } = renderWithRedux(<FilmList />);

    const form = getByTestId('form');
    const techInput = getByTestId('film-input');

    fireEvent.change(techInput, { target: { value: 'Spider-man' } });
    fireEvent.submit(form);

    const newFilmElement = await waitForElement(() => getByText('Spider-man'));
    const list = getByTestId('list');

    expect(list).toContainElement(newFilmElement);
  });
});
