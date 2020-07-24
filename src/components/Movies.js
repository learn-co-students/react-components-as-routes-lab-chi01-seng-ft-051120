import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
          {movies.map(movie => {
            return( 
              <div>
                  <h3>{movie.title}</h3>
                  <p>Genres: {movie.genres.join(", ")}</p>
                  <p>Runtime: {movie.time}</p>
                  <em>Score: {movie.metascore}</em>
                  <br/><br/>
              </div>
            )
          })}
    </div>
  );
};

export default Movies;
