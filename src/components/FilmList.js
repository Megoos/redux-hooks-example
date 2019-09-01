import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFilmAction } from '../redux/actions/filmsActions';

export default function FilmList() {
  const [newFilm, setNewFilm] = useState('');

  const films = useSelector(state => state.data);
  const dispatch = useDispatch();

  function handleAddFilm(event) {
    event.preventDefault();

    setTimeout(() => {
      dispatch(addFilmAction(newFilm));
      setNewFilm('');
    }, 2000);
  }

  return (
    <div data-testid="container">
      <ul data-testid="list">
        {films.map(film => (
          <li key={film}>{film}</li>
        ))}
      </ul>

      <form data-testid="form" onSubmit={handleAddFilm}>
        <input data-testid="film-input" value={newFilm} onChange={event => setNewFilm(event.target.value)} />
        <button type="submit">Add film</button>
      </form>
    </div>
  );
}
