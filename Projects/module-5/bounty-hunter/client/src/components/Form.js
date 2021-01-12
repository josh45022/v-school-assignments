// import e, { response } from "express"
import React, {useState} from "react"


function Form(props) {
    // const {submit, buttonText, firstName, lastName, living, bountyAmount, type } = props
    const initInputs = 
    {
        firstName: ""||props.firstName, 
        lastName: ""||props.lastName, 
        living: props.living, 
        bountyAmount: ""||props.bountyAmount,
        type: ""||props.type
    }

    const [inputs, setInputs] = useState(initInputs)
    
    const handleChange = (event) => {
        const {name, value} = event.target
        return setInputs(prevInputs => ({...prevInputs, [name]:value})) 
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }
    console.log(inputs)
    console.log(inputs.living)
    console.log(inputs.firstName)

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}

            />
            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
            />
            <select name="living" value={inputs.living} onChange={handleChange}>
                <option value=""></option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
            <input 
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
            />
            <select name="type" value={inputs.type} onChange={handleChange}>
                <option value=""></option>
                <option value="Sith">True</option>
                <option value="Jedi">False</option>
            </select>
            <button >{props.buttonText}</button>
        </form>
    )

}

export default Form