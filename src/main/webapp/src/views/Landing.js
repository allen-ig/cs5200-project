import React from 'react';
import { Form, Carousel } from 'react-bootstrap'
import SearchField from '../components/SearchField'

class Landing extends React.Component{
    
    MyCarousel = () => {
        return (
            <Carousel interval={4000}>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={require("./../cinema1.png")}
                        alt="cinema1"
                    />
                    <Carousel.Caption>
                        <h3>First</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={require("./../movies2.png")}
                        alt="logo"
                    />
                    <Carousel.Caption>
                        <h3>Second</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
    
    render() {
        return (
            <div className="container mt-4 mb-4">
                <SearchField/>
                <hr/>
                <this.MyCarousel/>
            </div>
        )
    }
}

export default Landing;