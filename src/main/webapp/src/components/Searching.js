import React from 'react';
import { Form, FormControl, Button } from "react-bootstrap";

class Searching extends React.Component{
    
    render() {
        return (
            <div className="d-flex justify-content-center row">
                <Form inline>
                    <FormControl type="text" placeholder="search" className="sm-2"/>
                    <Button type="search">Search</Button>
                </Form>
            </div>
        )
    }
}
export default Searching