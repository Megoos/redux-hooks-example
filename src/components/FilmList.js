import React, { useCallback } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useActions } from '../hooks/useActions';

function addFilmAction(title) {
  return { type: 'ADD_FILM', payload: title };
}

export default function FilmList() {
  const films = useSelector(state => state.data, shallowEqual);
  const [addFilmActionDispatch] = useActions([addFilmAction]);
  const addFilm = useCallback(() => addFilmActionDispatch('Apollo 11'), [addFilmActionDispatch]);

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
