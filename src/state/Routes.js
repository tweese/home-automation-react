import React, {useContext} from "react"
import {Context} from "./Store";
import Login from '../Login'
import Home from '../Home'
import {BrowserRouter as Router, Route} from "react-router-dom"



export default function Routes(){
    const [state, dispatch]= useContext(Context)
    return (
        <Router>
            <Route exact path="/" render={() => <Login/>}/>
            {state.isAuthenticated ?
                <div>
                    <Route exact path="/Home" render={() => <Home/>}/>
                </div> :
                <div></div>
            }
        </Router>
    )
}