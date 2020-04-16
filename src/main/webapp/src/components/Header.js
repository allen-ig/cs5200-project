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
            <Navbar className='justify-content-between'>
                <Navbar.Brand href='/'>NuMDB</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href='/about'>about</Nav.Link>
                        <Button variant='link' onClick={this.openLoginModal}>login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;