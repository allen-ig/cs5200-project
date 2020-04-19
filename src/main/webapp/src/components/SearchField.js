import React from 'react';
import { Form, FormControl, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

class SearchField extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            keyword: '',
            movies: []
        }
    }
    
    handleChange = event => {
        this.setState({
            keyword: event.target.value
        })
    }
    
    searchMovie = () => {
        fetch(`http://www.omdbapi.com/?apikey=f0a3305c&s=${this.state.keyword}`)
            .then(response => response.json())
            .then(response => this.setState({movies: response.Search}))
    }
    
    render() {
        return (
            <div className="d-flex justify-content-center row">
                <Form inline>
                    <FormControl type="text" placeholder="search" className="sm-2" onChange={this.handleChange}/>
                    <Link to={{pathname:"/search", state:{'keyword': this.state.keyword}}}>
                        <Button onClick={this.searchMovie}>Search</Button>
                    </Link>
                </Form>
            </div>
        )
    }
}
export default SearchField