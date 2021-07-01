import React, { useState, useContext } from "react"
import { UglyThingContext } from "../uglyThingContext"
import axios from "axios"

function Form () {
    const context = useContext(UglyThingContext)


    const initState = {
        title: "",
        description: "",
        imgUrl:""

    }

    const [state, setState] = useState(initState)
    
    const handleChange = (event) => {
        const {name, value} = event.target
        return setState(prevState => ({...prevState, [name]: value}))
        
    }

    

    const createUglyThing = (event) => {
        event.preventDefault()
        axios.post("https://api.vschool.io/joshuabenbaba/thing", state)
            .then(response => console.log(response))
            .catch(error => (error))
        setState({
            title: "",
            description: "",
            imgUrl:""
        })
        return context.getList()
    }











        return(
                <form onSubmit={(e) => {
                    createUglyThing(e)
                    return context.getList()
                    }
                    }>


                    <input
                    type="text"
                    name="title"
                    placeholder="Image Title"
                    value={state?state.title:null}
                    onChange={handleChange}
                    />
                                        <input
                    type="text"
                    name="description"
                    placeholder="Image Description"
                    value={state?state.description:null}
                    onChange={handleChange}
                    />
                                        <input
                    type="text"
                    name="imgUrl"
                    placeholder="Image Url"
                    value={state?state.imgUrl:null}
                    onChange={handleChange}
                    
                    />
                    <button type="submit">Submit</button>            
                </form>

        )
}


export default Form