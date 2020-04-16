import React from 'react';
import { Navbar } from "react-bootstrap";

class Footer extends React.Component {
    render() {
        return (
            <Navbar fixed='bottom'>
                <Navbar.Collapse className='justify-content-center'>
                    <Navbar.Text>Designed By NuMDB Team.</Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Footer;