import React, {Component} from 'react';
import './Movie.css';
import PropTypes from 'prop-types'
import { render } from '@testing-library/react';

class Movie extends Component{

    static propTypes = {
        title: PropTypes.string,
        poster: PropTypes.string,
    }
    render(){
        return(
        <div>
        <MoviePoster poster={this.props.poster}></MoviePoster>
            <h1>{this.props.title}</h1>
        </div>
        )
    }
}

class MoviePoster extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired
    }
    render(){
        console.log(this.props);
        return(
            <img src={this.props.poster}></img>
        )
        }
}
export default Movie;
