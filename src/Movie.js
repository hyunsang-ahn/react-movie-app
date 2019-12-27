import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types'


function Movie(title, poster){
    return(
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>
    )
}

// dump state로 만든 MoviePoster
function MoviePoster({poster}){
    return(
        <img src={poster} alt="Movie Poster"></img>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
}





export default Movie;
