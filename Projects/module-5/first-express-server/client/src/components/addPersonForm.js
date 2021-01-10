import React, {useState} from "react"

function AddPersonForm(props) {
    const initInputs = {name: props.name||"", age: props.age|| ""}
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
            <input type="text" name="name" value={inputs.name} onChange={handleChange }/>
            <input type="number" name="age" value={inputs.age} onChange={handleChange }/>
            <button>{props.buttonText}</button>
        </form>
    )
}

export default AddPersonForm