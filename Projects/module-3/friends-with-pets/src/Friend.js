
import React from "react"
import PetFunc from "./Pet.js"

function Friend (props) {
    const h1Styles = {
        backgroundColor: "#93E9BE",
        color: "black",
        textAlign: "center",
        margin: "auto 500px auto 500px"
    }
    const elseStyles = {
        textAlign: "center"
    }  
    return (
        <div>
            <h1 style={h1Styles}>Friend: {props.person.name} </h1>
            <p style={elseStyles}>Age: {props.person.age}</p>
             {props.person.pets.map(function (secitem) {
                 return (
                    <PetFunc key={secitem.id} currentPet = {secitem}/>
                 )
             })}
            
            
            
        </div>
    )
}

export default Friend