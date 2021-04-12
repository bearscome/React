import React, {useEffect, useState,} from 'react'
import Movie from './Components/Movie';
import MovieForm from './Components/MovieForm';

function App() {
  const [movies, setmovies] = useState([]);

  const removeMovie = (id) => {
    setmovies(movies.filter(movie => {
      return movie.id !== id
    }))
    console.log(movies)
  }

  const renderMovies = movies.length ? movies.map(movie => {
    return (
      <Movie 
        movie = {movie} 
        key = {movie.id}
        removeMovie = {removeMovie}/>
    )
  }) : '추가된 영화가 없습니다.';
  
  const addMovie = (movie) => {
    setmovies([
      ...movies,
      movie
    ])
  };

  
  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieForm addMovie = {addMovie} removeMovie = {removeMovie}/>
      {renderMovies}
    </div>
  );
}

export default App;
