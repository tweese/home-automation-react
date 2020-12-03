import React,{useEffect,useContext, useState} from 'react'
import {Context} from "./state/Store";

export default function Home() {
    //imports global state
    const [state, dispatch] = useContext(Context)
    const [garageState, setGarageState] = useState(false)


    const changeGarageStatus = () => {
        const currentGarageState = "Open" ? false : true
        const options = {
            method: "POST",
            body: JSON.stringify({
              state: currentGarageState
            }),
            headers: {
                Authorization: "Bearer " + state.bearerToken
            }
        }
        fetch("http://localhost:5000/garageDoor/state", options)

        setGarageState(garageState==="Open"? "Closed" : "Open")

    }
    useEffect (() => {
        const getGarageState = async() => {
            const options = {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + state.bearerToken
                }
            }
            const response = await fetch("http://localhost:5000/garageDoor/status", options)
            const jsonResponse = await response.json()
            if(jsonResponse.garageStatus===true)
                setGarageState("Open")
            else
                setGarageState("Closed")
        }
        getGarageState()
    },[])
    return (
       <div>
           Hello Home - You can not conduct business on continental grounds.
           <div>next time check status on interval</div>
           <div>
               Initial Status of Garage: {garageState}
           </div>
           {
               (garageState === "Open") ? <button onClick={changeGarageStatus}>Close</button> : <button onClick={changeGarageStatus}>Open</button>
           }
       </div>


    );
}

