import React from 'react';
import axios from 'axios'
import Movie from './Movie'
import './App.css'
class App extends React.Component {

  state = {
    isLoading : true,
    movies : [],
  }

  getMoves = async () => {
   const {
     data : {
       data : {movies}
     }
   } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')

   this.setState({movies, isLoading:false})
  }

  render() {
    const {isLoading, movies} = this.state; 

    return (
      <section className="container">

        {isLoading ? 
          <div className="loading">
            <span className="loader__text">Loading...</span>
          </div>
          : <div className="movies">
            {
               movies.map(movies => {
                return <Movie key = {movies.id}  year = {movies.year} title = {movies.title} summary = {movies.summary} poster = {movies.large_cover_image} genres = {movies.genres}/>
            })}
          </div>
        }
      </section>
    )
  }

  componentDidMount() {
    this.getMoves()
  }
}
export default App;
