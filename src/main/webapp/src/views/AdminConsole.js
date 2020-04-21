import React from 'react';
import { Form, Row, Col, Button} from 'react-bootstrap'
import ManagerConsole from "./ManagerConsole";
import {withRouter} from 'react-router-dom'

class AdminConsole extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            id: "",
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            recommemder_id: -1
        }
    }
    
    createUser = () => {
        fetch(`http://localhost:8080/api/user/create`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(() => alert("user created!"),
            () => alert("failed to create user!"))
    }
    
    deleteUser = () => {
        fetch(`http://localhost:8080/api/user/${this.state.userId}/delete`, {
            method: "DELETE"
        }).then(() => alert("user deleted!"),
            () => alert("failed to delete user!"))
    }
    
    updateUser = () => {
        fetch(`http://localhost:8080/api/user/${this.state.userId}/update`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(() => alert("user updated!"),
            () => alert("failed to update user!"))
    }
    
    findAllUsers = () => {
        fetch(`http://localhost:8080/api/user/all`,)
            .then(response => response.json())
            .then(response => alert(`All users: ${response.map(user => user.username)}`))
    }
    
    render() {
        return (
            <div>
                <ManagerConsole/>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control onChange={(event) => this.setState({userId: event.target.value})} placeholder="User's ID" />
                        </Col>
                        <Col>
                            <Form.Control onChange={(event) => this.setState({username: event.target.value})} placeholder="Username" />
                        </Col>
                        <Col>
                            <Form.Control onChange={(event) => this.setState({password: event.target.value})} placeholder="Password" />
                        </Col>
                        <Col>
                            <Form.Control onChange={(event) => this.setState({firstname: event.target.value})} placeholder="Firstname" />
                        </Col>
                        <Col>
                            <Form.Control onChange={(event) => this.setState({lastname: event.target.value})} placeholder="Lastname" />
                        </Col>
                        <Col>
                            <Form.Control onChange={(event) => this.setState({recommemder_id: event.target.value})} placeholder="Recommemder ID" />
                        </Col>
                    </Row>
                    <Row>
                        <Button onClick={this.createUser}>Create User</Button>
                    </Row>
                    <Row>
                        <Button onClick={this.updateUser}>Update User</Button>
                    </Row>
                    <Row>
                        <Button onClick={this.deleteUser}>Delete User</Button>
                    </Row>
                    <Row>
                        <Button onClick={this.findAllUsers}>Find All User</Button>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default withRouter(AdminConsole)