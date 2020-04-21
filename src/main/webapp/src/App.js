import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Landing from "./views/Landing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Register from "./views/Profile";
import Login from "./components/Login";
import About from "./views/About"
import Searching from "./views/Searching";
import Profile from "./views/Profile";
import Movie from "./views/Movie";
import Crew from "./views/Crew";
import AdminConsole from "./views/AdminConsole";
import ManagerConsole from "./views/ManagerConsole";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            showLoginModal: false,
            userInfo: {}
        }
    }

    openLoginModal = () => {
        this.setState({
            showLoginModal: true
        })
    }
    
    login = userinfo => {
        this.setState({
            isLoggedIn: true,
            userInfo: userinfo
        })
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state)
    }
    
    render() {
        return (
            <div className="App">
                <Router>
                    <Header openLoginModal={this.openLoginModal} userInfo={this.state.userInfo} isLoggedIn={this.state.isLoggedIn}/>
                    <Login isLoggedIn={this.state.isLoggedIn} login={this.login} show={this.state.showLoginModal}/>
                    <Route path='/' exact render={() => <Landing/>}/>
                    <Route path='/register' exact render={() => <Register/>}/>
                    <Route path='/about' exact render={() => <About/>}/>
                    <Route path='/search' render={(keyword) => <Searching keyword={keyword}/>}/>
                    <Route path='/movies/:id' exact render={() => <Movie userId={this.state.userInfo.id}/>}/>
                    <Route path='/crews/:crewname' exact render={() => <Crew/>}/>
                    <Route path='/user/:username' exact render={() => <Profile userInfo={this.state.userInfo}/>}/>
                    <Route path='/admin/' exact render={() => <AdminConsole userInfo={this.state.userInfo}/>}/>
                    <Route path='/manager/' exact render={() => <ManagerConsole userInfo={this.state.userInfo}/>}/>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;
