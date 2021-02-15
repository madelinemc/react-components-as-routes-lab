import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorList = directors.map(director => {
    return(
      <div>
        <h3>Name: {director.name}</h3>
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
  
  return (
    <div>
      <h1>Directors Pages</h1>
      {directorList}
    </div>
  );
}

export default Directors
