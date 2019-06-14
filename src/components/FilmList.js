import React, { useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

function addFilmAction(title) {
  return { type: 'ADD_FILM', payload: title };
}

export default function FilmList() {
  const films = useSelector(state => state.data, shallowEqual);
  const dispatch = useDispatch();

  const addFilm = useCallback(() => dispatch(addFilmAction('Apollo 11')), [dispatch]);

  return (
    <>
      <ul>
        {films.map(film => (
          <li key={film}>{film}</li>
        ))}
      </ul>
      <AddFilmButton onAddFilm={addFilm} />
    </>
  );
}

const AddFilmButton = React.memo(({ onAddFilm }) => <button onClick={onAddFilm}>{'Add film "Apollo 11"'}</button>);
