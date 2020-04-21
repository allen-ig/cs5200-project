import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {withRouter, Link} from 'react-router-dom'

class Header extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: this.props.isLoggedIn,
            userInfo: this.props.userInfo
        }
    }

    openLoginModal = () => {
        const { openLoginModal } = this.props;
        openLoginModal();
    }
    
    render() {
        return (
            <Navbar sticky='top' bg='light'>
                <Navbar.Brand href='/'>NuMDB</Navbar.Brand>
                <Nav>
                    <Nav.Link href='/about'>About</Nav.Link>
                </Nav>
                <Navbar.Collapse className='justify-content-end'>
                    <Nav>
                        {this.props.isLoggedIn ?
                            (this.props.userInfo.username === 'admin' ?
                                <Link to={`/admin`}>
                                    <Nav>{this.props.userInfo.username}</Nav>
                                </Link>
                                :
                                (this.props.userInfo.username.includes("manager") ?
                                    <Link to={`/manager`}>
                                        <Nav>{this.props.userInfo.username}</Nav>
                                    </Link> :
                                <Link to={`/user/${this.props.userInfo.username}`}>
                                    <Nav>{this.props.userInfo.username}</Nav>
                                </Link>)
                            ):
                            <Nav.Link onClick={this.openLoginModal}>Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(Header);