import React, {useState, useEffect} from 'react'
import Movie from './Components/Movie';

function App() {
  const movies = [
    { title: 'hysoung Coder1', year : 2001, id :1 },
    { title: 'hysoung Coder2', year : 2002, id :2 },
    { title: 'hysoung Coder3', year : 2003, id :3 },
  ]

  const renderMovies = movies.map(movie => {
    return (
      <Movie movie = {movie} key = {movie.id}/>
    )
  });

  return (
    <div className="App">
      <h1>Movie List</h1>
      {renderMovies}
    </div>
  );
}

export default App;
