import React from 'react';
import { Form, Row, Col, Button} from 'react-bootstrap'

export default class ManagerConsole extends React.Component{
    
    constructor(props){
        super(props)
    }
    
    createMovie = () => {
    
    }
    
    
    render() {
        return (
            <Form>
                <Row>
                    <Col>
                        <Form.Control placeholder="Movie's IMDB ID" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Title" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Language" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Year" />
                    </Col>
                </Row>
                <Row>
                    <Button onclick={this.createMovie}>Create Movie</Button>
                </Row>
                <Row>
                    <Button>Update Movie</Button>
                </Row>
                <Row>
                    <Button>Delete Movie</Button>
                </Row>
            </Form>
        );
    }
}