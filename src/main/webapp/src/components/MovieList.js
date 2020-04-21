import React from 'react'
import MovieCard from "./MovieCard";

class MovieList extends React.Component{
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div className='d-flex'>
                {this.props.movies.map((movie, index) => {
                    return (
                        <MovieCard movie={movie} key={index} style={{display: 'inline'}}/>
                    )
                })}
            </div>
        )
    }
}

export default MovieList