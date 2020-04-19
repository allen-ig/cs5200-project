import React from 'react';
import {withRouter} from "react-router-dom";

class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movie: []
        }
    }
    
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=f0a3305c&i=${this.props.match.params.id}`)
            .then(response => response.json())
            .then(response => this.setState({
                movie: response
            }))
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.movie)
    }
    
    render() {
        let res = <div>{this.state.movie.Title}</div>
        return this.state.movie.length === 0 ? null : res;
    }
}

export default withRouter(Movie);