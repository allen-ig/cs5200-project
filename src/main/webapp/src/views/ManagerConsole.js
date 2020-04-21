import React from 'react';
import { Form, Row, Col, Button} from 'react-bootstrap'

export default class ManagerConsole extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            imdbId: "",
            title: "",
            language: "",
            year: -1
        }
    }
    
    createMovie = () => {
        fetch(`http://localhost:8080/api/movie/create`, {
            method: "POST",
            body: this.state
        }).then(() => alert("movie created!"),
            () => alert("failed to create movie!"))
    }
    
    deleteMovie = () => {
        fetch(`http://localhost:8080/api/movie/${this.state.imdbId}/delete`, {
            method: "DELETE"
        }).then(() => alert("movie deleted!"),
            () => alert("failed to delete movie!"))
    }
    
    updateMovie = () => {
        fetch(`http://localhost:8080/api/movie/${this.state.imdbId}/update`, {
            method: "PUT"
        }).then(() => alert("movie updated!"),
            () => alert("failed to update movie!"))
    }
    
    render() {
        return (
            <Form>
                <Row>
                    <Col>
                        <Form.Control onChange={(event) => this.setState({imdbId: event.target.value})} placeholder="Movie's IMDB ID" />
                    </Col>
                    <Col>
                        <Form.Control onChange={(event) => this.setState({title: event.target.value})}placeholder="Title" />
                    </Col>
                    <Col>
                        <Form.Control onChange={(event) => this.setState({language: event.target.value})}placeholder="Language" />
                    </Col>
                    <Col>
                        <Form.Control onChange={(event) => this.setState({year: event.target.value})}placeholder="Year" />
                    </Col>
                </Row>
                <Row>
                    <Button onClick={this.createMovie}>Create Movie</Button>
                </Row>
                <Row>
                    <Button onClick={this.updateMovie}>Update Movie</Button>
                </Row>
                <Row>
                    <Button onClick={this.deleteMovie}>Delete Movie</Button>
                </Row>
            </Form>
        );
    }
}