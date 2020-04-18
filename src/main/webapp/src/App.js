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
                <Header openLoginModal={this.openLoginModal}/>
                <Login isLoggedIn={this.state.isLoggedIn} show={this.state.showLoginModal}/>
                <Router>
                    <Route path='/' exact render={() => <Landing/>}/>
                    <Route path='/register' exact render={() => <Register/>}/>
                    <Route path='/about' exact render={() => <About/>}/>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;
