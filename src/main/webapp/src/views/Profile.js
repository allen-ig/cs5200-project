import React from 'react';
import {withRouter, Link} from "react-router-dom";
import SearchField from "../components/SearchField";
import {Button} from "react-bootstrap";

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo: this.props.userInfo,
            reviews: []
        }
    }
    
    renderReviewList = () => {
        fetch(`http://localhost:8080/api/reviews/all/user/${this.state.userInfo.id}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    reviews: response
                })
            })
    }
    
    renderRecommendeeList = () => {
        console.log(this.state.userInfo)
    }
    
    render() {
        let recommendeeList = this.state.userInfo.users ?
            <ul> All Recommendee
                {this.state.userInfo.users.map((user, index) => {
                    return <li key={index}>{user.username}</li>
                })}
            </ul> : null

        return (
            <div>
                <SearchField/>
                {
                    Object.entries(this.state.userInfo).map((info, index) => {
                        return info[0] !== 'password'
                            && info[0] !== 'reviews'
                            && info[0] !== 'users' ? <div key={index}>{`${info[0]}: ${info[1]}`}</div> : null
                    })
                }
                <Button onClick={this.renderReviewList}>Get Review List</Button>
                {<ul>
                    {this.state.reviews.map((review, index) => {
                        console.log(review)
                        return (
                            <Link to={`/movie/${review.imdbId}`}>
                                <li key={index}>{review.text} on {review.imdbId}</li>
                            </Link>
                        )
                    })}
                </ul>}
                {/*<Button onClick={this.renderRecommendeeList}>Get Recommendee List</Button>*/}
                {recommendeeList}
            </div>
            
        )
    }
}

export default withRouter(Profile);