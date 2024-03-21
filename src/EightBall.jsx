import React, { useState } from "react";
import { choice } from "./choice";
import responses from "./responses.json"
import "./EightBall.css"


const EightBall = () => {
    const [response, setResponse] = useState({
        msg: 'Please Think of a Question',
        color: 'black'
    })

    function handleChoiceClick(){
        setResponse(choice(responses))
    }

    function handleResetClick(){
        setResponse({
            msg: 'Please Think of a Question',
            color: 'black'
        })
    }

    return (
        <div>
            <button 
            onClick={handleChoiceClick} 
            style={{backgroundColor: response.color}} 
            className="EightBall-normal-btn">
                <b>{response.msg}</b>
            </button>
            <br />
            <button onClick={handleResetClick} className="EightBall-reset-btn">
                <b>Reset</b>
            </button>
        </div>
    )
}

export default EightBall;