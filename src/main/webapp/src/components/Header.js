import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Button from "react-bootstrap/Button";

class Header extends React.Component {

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
                        <Nav.Link onClick={this.openLoginModal}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;