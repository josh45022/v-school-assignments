import React from "react"
import './App.css';

function Victim(props) {
    const index= props.index
    return (
        <div className={`box${index}`}>
            <section>{props.personInfo.name}</section>
            <img src={props.personInfo.image}/>
        </div>
    )
}

export default Victim