import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const renderActors = () => {
    return actors.map((actor, index) => {
      return (<div key={index}>
        <p>Name: {actor.name}</p>
        <p>Movies:</p>
        <ul>
          {renderMovies(actor.movies)}
        </ul>
      </div>)
    })
  }
  
  const renderMovies = movies => {
    return movies.map((movie, index) => {
      return <li key={index}>{movie}</li>
    })
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
