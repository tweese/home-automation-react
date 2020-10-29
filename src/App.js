import React from 'react'
import './App.css';
import Login from './Login'
import Home from './Home'
import {BrowserRouter as Router, Route} from "react-router-dom"

export default function App() {
    
  return (
    <Router>
        <Route exact path="/" render={()=> <Login/>}/>
        <Route exact path="/Home" render={()=> <Home/>}/>

    </Router>
  );
}

// /*fox for cores*/
