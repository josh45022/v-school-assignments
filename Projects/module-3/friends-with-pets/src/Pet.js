import React from "react"
function PetFunc(props){
    const elseStyles = {
        textAlign: "center"
    }    
    return (
        <div>
            <p style={elseStyles}> Pet Name: {props.currentPet.name}</p>
            <p style={elseStyles}> Pet Breed: {props.currentPet.breed}</p>
            {console.log(props.currentPet.name)}
            {console.log('AAHHAHDHSHFHDSFH')}
        </div>
    )
}

export default PetFunc

