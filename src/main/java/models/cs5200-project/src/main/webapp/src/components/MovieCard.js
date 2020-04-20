import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class MovieCard extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <Card style={{width: '15rem'}}>
                <Link to={`/movies/${this.props.movie.imdbID}`}>
                    <Card.Img variant='top' src={this.props.movie.Poster} style={{width: "10rem"}}/>
                    <Card.Body>
                        <Card.Title>{this.props.movie.Title}</Card.Title>
                        <Card.Text>
                             {this.props.movie.Year}
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        )
    }
}

export default MovieCard;