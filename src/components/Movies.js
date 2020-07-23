import React from "react";
import { movies } from "../data";
import { move } from "superagent";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return (
          <div>
            <p>{movie.title}</p>
            <p>{movie.time}</p>
            <ul>
              {movie.genres.map((genre) => {
                return <li>{genre}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
