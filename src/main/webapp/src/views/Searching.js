import React from 'react'
import MovieList from "../components/MovieList";
import SearchField from "../components/SearchField";

class Searching extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            movies: []
        }
    }
    
    componentDidMount() {
        if (this.props.keyword.location.state) {
            fetch(`http://www.omdbapi.com/?apikey=f0a3305c&s=${this.props.keyword.location.state.keyword}`)
                .then(response => response.json())
                .then(response => this.setState({movies: response.Search}))
        }
    }
    
    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.props.keyword.location.state) {
            fetch(`http://www.omdbapi.com/?apikey=f0a3305c&s=${this.props.keyword.location.state.keyword}`)
                .then(response => response.json())
                .then(response => this.setState({movies: response.Search}))
        }
    }
    
    render() {
        let movieList = this.state.movies.length === 0 ? null : <MovieList movies={this.state.movies}/>
        return(
            <>
                <SearchField keyword={this.props.keyword.location.state.keyword} movies={this.state.movies}/>
                <hr/>
                {movieList}
            </>
        )
    }
}

export default Searching