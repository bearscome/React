import React, {useEffect, useState,} from 'react'
import Movie from './Components/Movie';
import MovieForm from './Components/MovieForm';

function App() {
  const [movies, setmovies] = useState([
    { title: 'hysoung Coder1', year : 2001, },
    { title: 'hysoung Coder2', year : 2002,  },
    { title: 'hysoung Coder3', year : 2003, },
  ]);

  const renderMovies = movies.map(movie => {
    return (
      <Movie movie = {movie} key = {movie.title}/>
    )
  });
  const addMovie = (movie) => {
    setmovies([
      ...movies,
      movie
    ])
  };

  
  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieForm addMovie = {addMovie}/>
      {renderMovies}
    </div>
  );
}

export default App;
