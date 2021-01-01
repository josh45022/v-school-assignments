import React from "react"
const axios = require("axios")

class Form extends React.Component {

    state = {
        title: "",
        description: "",
        imgUrl:""

    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    createUglyThing = (event) => {
        event.preventDefault()
        axios.post("https://api.vschool.io/joshuabenbaba/thing", this.state)
            .then(response => console.log(response))
            .catch(error => (error))
        this.setState({
            title: "",
            description: "",
            imgUrl:""
        })
    }





    // handleDelete = () => {
    //     const notDeletedItems = 

    // }



    render(){
        return(
            <form onSubmit={this.createUglyThing}>
                <input
                type="text"
                name="imgUrl"
                placeholder="Image Url"
                value={this.state.imgUrl}
                onChange={this.handleChange}
                
                />
                <input
                type="text"
                name="description"
                placeholder="Image Description"
                value={this.state.description}
                onChange={this.handleChange}
                />
                <input
                type="text"
                name="title"
                placeholder="Image Title"
                value={this.state.title}
                onChange={this.handleChange}
                />
                <button type="submit">Submit</button>            
            </form>
        )
    }
}


export default Form