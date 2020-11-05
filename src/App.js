import React, {useState, useContext} from 'react'
import './App.css';
import Routes from "./state/Routes"
import Store from "./state/Store"

export default function App() {

    return (
        <Store>
            <Routes></Routes>
        </Store>
    );
}

// /*fox for cores*/
