import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Landing from "./views/Landing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Register from "./views/Register";
import Login from "./components/Login";
import About from "./views/About"
import Searching from "./views/Searching";
import MovieCard from "./components/MovieCard";
import Movie from "./views/Movie";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            showLoginModal: false
        }
    }

    openLoginModal = () => {
        this.setState({
            showLoginModal: true
        })
    }

    render() {
        return (
            <div className="App">
                <Header openLoginModal={this.openLoginModal} isLoggedIn={this.state.isLoggedIn}/>
                <Login isLoggedIn={this.state.isLoggedIn} show={this.state.showLoginModal}/>
                <Router>
                    <Route path='/' exact render={() => <Landing/>}/>
                    <Route path='/register' exact render={() => <Register/>}/>
                    <Route path='/about' exact render={() => <About/>}/>
                    <Route path='/search' exact render={(keyword) => <Searching keyword={keyword}/>}/>
                    <Route path='/movies/:id' exact render={() => <Movie/>}/>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;
