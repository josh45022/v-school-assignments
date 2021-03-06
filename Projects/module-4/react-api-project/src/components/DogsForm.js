import React,{useState} from "react"
function DogsForm(props){
    const [chosenNumber, setChosenNumber]= useState(0)
    const handleChange = (event) => {
        const {name, value} = event.target
        return (
            setChosenNumber(value)
        )
    }
    return(
        <div>
        <form>
            <input
            type="number"
            name="chosenNumber"
            value={chosenNumber}
            onChange={handleChange}
            />


        </form>
            <button onClick={()=>props.handleClick(chosenNumber)}>
                Submit Number
            </button>
        </div>

    )
}
export default DogsForm
