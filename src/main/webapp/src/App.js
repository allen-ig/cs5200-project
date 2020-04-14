import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Landing from "./views/Landing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Register from "./views/Register";

function App() {
  return (
    <div className="App">
        <Header/>
      <Router>
        <Route path='/' exact render={() => <Landing/>}/>
        <Route path='/register' exact render={() => <Register/>}/>
      </Router>
        <Footer/>
    </div>
  );
}

export default App;
