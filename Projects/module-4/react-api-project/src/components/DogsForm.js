import React,{useState} from "react"
import {DogsContextConsumer} from "./dogsContext.js"
function DogsForm(props){
    const [chosenNumber, setChosenNumber]= useState(0)
    const handleChange = (event) => {
        const {name, value} = event.target
        return (
            setChosenNumber(value)
        )
    }
    console.log(chosenNumber)
    console.log(document.getElementById('yuuuh'))
    return(
        <div>
        <form>
            <input
            id="yuuuh"
            type="number"
            name="chosenNumber"
            value={chosenNumber}
            onChange={handleChange}
            />


        </form>
            <button onClick={()=>props.handleSubmit(chosenNumber)}>
                Submit Number
            </button>
        </div>

    )
}
export default DogsForm
