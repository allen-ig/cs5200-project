import React from 'react';
import {withRouter} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

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
        let data_columns = ['Title', 'Year', 'Director', 'Writer', 'Actors', 'Language', 'Country', 'Production']
        let res =
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={this.state.movie.Poster} alt='pic'/>
                        <hr/>
                        <Button>Like</Button>
                    </div>
                    <div className="col-md-6">
                        {
                            // Object.entries(this.state.movie).map((data, index) => {
                            // return (
                            //     <div key={index}>{`${data[0]}:${data[1]}`}</div>
                            // )
                            // })
                            data_columns.map((column, index) => {
                                return (
                                    <div key={index} className='row'>{column}: {this.state.movie[column]}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="row">
                    <Form.Group controlId='formBasicUsername' className='col-md'>
                        <Form.Label>Share your comment:</Form.Label>
                        <Form.Control placeholder="Your comment"/>
                        <Button variant="primary" size='lg' className='col-md'>Submit</Button>
                    </Form.Group>
                </div>
            </div>
        return this.state.movie.length === 0 ? null : res;
    }
}

export default withRouter(Movie);


{/*<div className="background-image" style={{*/}
{/*    backgroundImage: `url(${this.state.movie.Poster})`,*/}
{/*    backgroundSize: 'cover',*/}
{/*    backgroundRepeat: 'non-repeat',*/}
{/*    filter: 'blur(4px)',*/}
{/*    '-webkit-filter': 'blur(4px)',*/}
{/*    height: '100%'*/}
{/*}}> </div>*/}