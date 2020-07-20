import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const renderDirectors = () => {
    return directors.map((director, index) => {
      return (<div key={index}>
        <p>Name: {director.name}</p>
        <p>Movies:</p>
        <ul>
          {renderMovies(director.movies)}
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
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
