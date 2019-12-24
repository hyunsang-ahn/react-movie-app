import React, {Component} from 'react';
import './Movie.css';
import { render } from '@testing-library/react';

class Movie extends Component{
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
    render(){
        console.log(this.props);
        return(
            <img src={this.props.poster}></img>
        )
        }
}
export default Movie;
