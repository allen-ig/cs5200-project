import React from 'react';
import {withRouter, Link} from "react-router-dom";
import { Form, Button } from 'react-bootstrap'
import Login from "../components/Login";

class Landing extends React.Component{
    render() {
        return (
            <Form>
                {/*<Form.Group>*/}
                {/*    <Form.Label>Username</Form.Label>*/}
                {/*    <Form.Control placeholder="Enter your Username"/>*/}
                {/*</Form.Group>*/}
                {/*<Link to={{pathname: '/'}} >*/}
                {/*    <Button className="login" variant="success" size='lg' block>login</Button>*/}
                {/*</Link>*/}
                {/*<Link to={{pathname: '/register'}}>*/}
                {/*    <Button className="register" variant="primary" size='lg' block>register</Button>*/}
                {/*</Link>*/}
                <h1>Landing</h1>
            </Form>
        )
    }
}

export default withRouter(Landing);