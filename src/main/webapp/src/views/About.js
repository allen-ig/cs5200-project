import React from 'react'
import { CardDeck, Card } from 'react-bootstrap'

class About extends React.Component{

    teamMembers = [
        'Yanchi Li',
        'Junyao Wang',
        'Xintong Liu',
        'Dongyu Zhou'
    ];

    render() {
        return(
            <CardDeck>
                {this.teamMembers.map((name, index) => {
                    return (
                        <Card style={{width: '18rem'}} key={index} bg='primary' text='white' border='dark'>
                            <Card.Header>{name}</Card.Header>
                            <Card.Body>
                                <Card.Text>{`${name} is a developer`}</Card.Text>
                            </Card.Body>
                        </Card>)
                })}
            </CardDeck>
        )
    }
}
export default About