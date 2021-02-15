import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieList = movies.map(movie => {
    return(
      <div>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time} minutes</p>
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })
  
  return (
    <div>
        <h1>Movies Pages</h1>
        {movieList}
    </div>
  );
};

export default Movies;
