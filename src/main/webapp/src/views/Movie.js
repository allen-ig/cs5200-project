import React from 'react';
import {withRouter} from "react-router-dom";
import {Button, Form, Toast} from "react-bootstrap";

class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movie: {},
            reviews: [],
            newComment: "",
            userId: -1,
            emotion: null,
            rating: 5
        }
    }
    
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=f0a3305c&i=${this.props.match.params.id}`)
            .then(response => response.json())
            .then(response => this.setState({
                movie: response
            }))
            .then(() => fetch(`http://localhost:8080/api/reviews/all/movie/${this.props.match.params.id}`,{
                mode: 'cors',
                headers: {
                    'content-type': 'application/json'
                }
            }))
            .then(response => response.json())
            .then(response => this.setState({
                reviews: response
            }))
    }
    
    submitReview = () => {
        let requestBody = {
            text: this.state.newComment,
            emotion: this.state.emotion,
            rate: this.state.rating
        }
        fetch(`http://localhost:8080/api/review/${this.state.userId}/${this.state.movie.imdbID}/create`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        }).then(() => this.forceUpdate())
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
                    {this.state.reviews.map((review, index) =>{
                        return (
                            <Toast key={index}>
                                <Toast.Header closeButton={false}>
                                    <strong className="mr-auto">{review.username}</strong>
                                    <small>{review.emotion}</small>
                                </Toast.Header>
                                <Toast.Body>{review.text}</Toast.Body>
                            </Toast>
                        )
                    })}
                    <hr/>
                <div className="row">
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>select rating</Form.Label>
                        <Form.Control as="select" onChange={event => this.setState({rating: event.target.value})}>
                            <option>{1.0}</option>
                            <option>{2.0}</option>
                            <option>{3.0}</option>
                            <option>{4.0}</option>
                            <option>{5.0}</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>select emotion</Form.Label>
                        <Form.Control as="select" onChange={event => this.setState({emotion: event.target.value})}>
                            <option>HAPPY</option>
                            <option>PEACE</option>
                            <option>SAD</option>
                            <option>SCARED</option>
                            <option>LAUGH</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='formBasicUsername' className='col-md'>
                        <Form.Label>Share your comment:</Form.Label>
                        <Form.Control placeholder="Your comment" onChange={event => this.setState({newComment: event.target.value})}/>
                        <Button variant="primary" size='lg' className='col-md' onClick={this.submitReview}>Submit</Button>
                    </Form.Group>
                </div>
                <hr/>
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