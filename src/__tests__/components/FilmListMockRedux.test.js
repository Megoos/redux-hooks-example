import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import FilmList from '../../components/FilmList';
import { addFilmAction } from '../../redux/actions/filmsActions';

jest.mock('react-redux');

describe('FilmList component', () => {
  it('should render films', () => {
    useSelector.mockImplementation(cb =>
      cb({
        data: ['John Wick', 'Transit']
      })
    );

    const { getByTestId, getByText } = render(<FilmList />);
    const list = getByTestId('list');

    expect(list).toContainElement(getByText('John Wick'));
    expect(list).toContainElement(getByText('Transit'));
  });

  it('should be able to add new film', async () => {
    const { getByTestId, getByText } = render(<FilmList />);
    const form = getByTestId('form');
    const techInput = getByTestId('film-input');

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(techInput, { target: { value: 'Spider-man' } });
    fireEvent.submit(form);

    useSelector.mockImplementation(cb =>
      cb({
        data: ['John Wick', 'Transit', 'Spider-man']
      })
    );

    await waitForElement(() => getByText('Spider-man'));

    expect(dispatch).toHaveBeenCalledWith(addFilmAction('Spider-man'));
  });
});
