import React from "react"

function Color(props) {
    return(
        <div onClick={props.changeColor} className="box1" style={{backgroundColor:`#${props.color}`}}>
        </div>
    )
}

export default Color