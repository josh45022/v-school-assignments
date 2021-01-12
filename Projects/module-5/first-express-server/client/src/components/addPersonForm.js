import React, {useState} from "react"

function AddPersonForm(props) {
    const initInputs = {name: props.name||"", age: props.age|| "", favColor: props.favColor||""}
    const [inputs, setInputs] = useState(initInputs)
    console.log(inputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={inputs.name} defaultValue={"Name"} onChange={handleChange }/>
            <input type="number" name="age" value={inputs.age} defaultValue={"Age"} onChange={handleChange }/>
            <select name="favColor" onChange={handleChange}>
                <option value="reset">Favorite Color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
            </select>
            <button>{props.buttonText}</button>
        </form>
    )
}

export default AddPersonForm