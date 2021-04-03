import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

function Movie({title, year, summary, poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt = {title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className ="movie__year">{year}</h5>
                <ul className = "movie__genres">
                    {genres.map((genres, Idx) => {
                        return <li className="movie__genres" key ={Idx}>{genres}</li>
                    })}
                </ul>
                <p className = "movie__summary" >{checkStr(summary)}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
};


function checkStr(str) {
    console.log('str체크',str.length)
    if(str.length > 180) {
        const strSlice = str.slice(0,180)
        return strSlice + '...'
    } else {
        return str
    }
} 
export default Movie

/**
{generes.map((generes) => {
                    return <li className = "movie__generes">{generes}</li>
                })}
 */