import React, {useState,useContext} from 'react'
import {Base64} from "js-base64/base64";
import {Redirect} from "react-router-dom";
import {Context} from "./state/Store"


export default function Login(props) {
    const [state, dispatch] = useContext(Context);
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");

    const login = async (event) => {
        event.preventDefault();

        const userPass = Base64.encode(userName + ":" + passWord)
        const options = {
            method: "GET",
            headers: {
                Authorization: "Basic " + userPass
            }
        }
        const response = await fetch("http://localhost:5000/garageDoor/login", options)

        dispatch({
            type: "setIsAuthenticated",
            payload: response.ok
        })
        const jsonResponse = await response.json()

        dispatch({
            type: "setBearerToken",
            payload: jsonResponse.bearerToken
        })
    }
    if(state.isAuthenticated){
        return <Redirect to="/home"/>
    }
    return (
        <form className="user-pass-container" onSubmit={login}>
            <div className="user-pass-input">
                <input type="text" onChange={(event) => setUserName(event.target.value)} placeholder="User Name"></input>
                <input type="password" onChange={(event) => setPassWord(event.target.value)} placeholder="Password"></input>
                <button type="submit">submit</button>
            </div>
        </form>
    );
}