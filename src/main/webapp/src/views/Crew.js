import React from 'react';
import {withRouter} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

class Crew extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            crew: {}
        }
    }
    
    componentDidMount() {
        let crewname = this.props.match.params.crewname
        fetch(`https://api.themoviedb.org/3/search/person?api_key=0788ca74a1131272543b5ecb011892b4&language=en-US&query=${crewname}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(response => {
                return fetch(`https://api.themoviedb.org/3/person/${response.results[0].id}?api_key=0788ca74a1131272543b5ecb011892b4&language=en-US`)
            })
            .then(response => response.json())
            .then(response => {
                this.setState({crew: response})
                let requestBody = {
                    id: this.state.crew.id,
                    birth_year: this.state.crew.birthday.split('-')[0],
                    role: 'actor',
                    name: this.state.crew.name
                }
                return fetch(`http://localhost:8080/api/crew/create`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                })
            })
    }
    
    render() {
        let data_columns = ['name', 'gender', 'birthday']
        let res =
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${this.state.crew.profile_path}`} alt='pic'/>
                        <hr/>
                        <Button>Like</Button>
                    </div>
                    <div className="col-md-6">
                        {
                            data_columns.map((column, index) => {
                                let info = column === 'gender' ?
                                    <div key={index} className='row'>{column}: {this.state.crew[column] === 1 ? 'female' : 'male'}</div> :
                                    <div key={index} className='row'>{column}: {this.state.crew[column]}</div>
                                return info
                            })
                        }
                    </div>
                </div>
            </div>
        return this.state.crew.length === 0 ? null : res;
    }
}

export default withRouter(Crew);