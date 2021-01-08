import React,{useState} from "react"
function CatsForm(props){
    const [chosenNumber, setChosenNumber]= useState(0)
    // const handleChange = (event) => {
    //     const {value} = event.target
    //     setChosenNumber(value) 
    // }
    return(
        <div>
        <form onSubmit={(e)=>props.handleClick(e,chosenNumber)}>
            <input
            type="number"
            name="chosenNumber"
            value={chosenNumber}
            onChange={(e) => setChosenNumber(e.target.value)}
            />
            <button >Submit Number</button>
        </form>

            
        </div>

    )
}
export default CatsForm
