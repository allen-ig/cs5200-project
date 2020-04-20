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

// <Card>
// <Card.Img variant={'top'} src={movie.Poster}/>
// <Card.Body>
//     <Card.Title>{movie.Title}</Card.Title>
//     <Card.Text>{movie.Year}</Card.Text>
//     <Link to={`/movie/${movie.imdbID}`}>
//         <Button>Open up</Button>
//     </Link>
// </Card.Body>
// </Card>