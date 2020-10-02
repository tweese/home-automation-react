import React, {useState} from 'react'
import {Base64} from "js-base64/base64";

export default function Login() {

    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");

    const [apiResponse, setApiResponse] = useState();

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
        const jsonResponse = await response.json()
        setApiResponse(jsonResponse.bearerToken)
        setUserName("")
        setPassWord("")
    }

    return (
        <form className="user-pass-container" onSubmit={login}>
            <div className="user-pass-input">
                <input type="text" onChange={(event) => setUserName(event.target.value)} placeholder="User Name"></input>
                <input type="password" onChange={(event) => setPassWord(event.target.value)} placeholder="Password"></input>
                <button type="submit">submit</button>
            </div>
            <h2>{apiResponse}</h2>
        </form>
    );
}