import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

function Movie({title, year, summary, poster}) {
    return (
        <>
        <img src={poster} alt = {title}/>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className ="movie__year">{year}</h5>
            <p className = "movie__summary">{summary}</p>
        </div>
        </>
    )
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
};

export default Movie