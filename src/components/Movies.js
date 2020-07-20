import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = () => {
    return movies.map((movie, index) => {
      return (<div key={index}>
        <p>Title: {movie.title}</p>
        <p>Run Time: {movie.time} Minutes</p>
        <p>Genres:</p>
        <ul>
          {renderGenres(movie.genres)}
        </ul>
      </div>)
    })
  }
  
  const renderGenres = movieGenres => {
    return movieGenres.map((genre, index) => {
      return <li key={index}>{genre}</li>
    })
  }


  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
