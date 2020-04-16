import React from 'react'
import { CardGroup, Card } from 'react-bootstrap'

class About extends React.Component{

    teamMembers = [
        'Yanchi Li',
        'Junyao Wang',
        'Xintong Liu',
        'Dongyu Zhou'
    ];

    render() {
        return(
            <CardGroup>
                {this.teamMembers.map((name, index) => {
                    return (
                        <Card style={{width: '18rem'}} key={index}>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>{`${name} is a developer`}</Card.Text>
                            </Card.Body>
                        </Card>)
                })}
            </CardGroup>
        )
    }
}
export default About