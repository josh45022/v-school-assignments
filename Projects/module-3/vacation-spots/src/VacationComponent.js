import React from "react"

function VacationComp (props) {
    const h1Styles = {
        color: "black", 
        backgroundColor: "#30D5C8",
        textAlign: "center",
        margin: "0px"
      }
    const elseStyles = {
        textAlign:"center"
    }
    return (
        <div>
            <h1 style={h1Styles}>Place: {props.choice.place}</h1>
            <p style={elseStyles}>Price: {props.choice.price} dollars</p>
            <p style={elseStyles}>Time to Go: {props.choice.timeToGo}</p>
            <hr/>
        </div>
        
    )
}

export default VacationComp