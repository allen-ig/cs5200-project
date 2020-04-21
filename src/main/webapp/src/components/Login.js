import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show: this.props.show,
            isLoggedIn: this.props.isLoggedIn
        }
    }

    handleClose = () => {
        this.setState({
            show: !this.state.show
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            show: nextProps.show
        })
    }
    //
    // login = () => {
    //     fetch
    //     this.props.login(userinfo)
    // }

    render() {
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='formBasicUsername'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder="Enter your Username"/>
                        </Form.Group>
                        <Form.Group controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder="Password"/>
                        </Form.Group>
                        {/*<Link to={{pathname: '/'}} >*/}
                        {/*    <Button className="login" variant="success" size='lg' block>login</Button>*/}
                        {/*</Link>*/}
                        {/*<Link to={{pathname: '/register'}}>*/}
                        {/*    <Button className="register" variant="primary" size='lg' block>register</Button>*/}
                        {/*</Link>*/}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="login" variant="primary" size='lg' block >login</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default Login;