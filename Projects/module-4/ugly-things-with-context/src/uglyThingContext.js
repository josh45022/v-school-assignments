import React from "react"
const axios = require("axios")
const {Provider, Consumer} = React.createContext()

class UglyThingContextProvider extends React.Component {
    state = {
        listOfItems: [],
        isEditing: false

    }
    getList = () => {
        axios.get("https://api.vschool.io/joshuabenbaba/thing")
            .then(response => (this.setState({listOfItems: response.data})))
            .catch(error => (error))
        this.setState({isEditing: false})
    }
    componentDidMount() {
        this.getList()
        this.setState({isLoading: false})
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleDelete = (id) => {
        // const filteredList = this.state.listOfItems.filter(
        //     (meme) => {
        //         return(meme.id !== id)
        //     }
        // ) 
        axios.delete(`https://api.vschool.io/joshuabenbaba/thing/${id}`)
            .then(response => console.log(response))
            .catch(error => (error))
        this.getList()
    }

    takeToEdit = () => {
        this.setState({isEditing: true})
    }

    handleEdit = (id, putObject) => {
        axios.put(`https://api.vschool.io/joshuabenbaba/thing/${id}`, putObject)
            .then(response => console.log(response))
            .catch(error => (error))
        this.setState({isEditing: false})
    }

    render(){
        return(
            <Provider value={{listOfItems: this.state.listOfItems, handleDelete: this.handleDelete, handleChange:this.handleChange, isEditing: this.state.isEditing, getList: this.getList, handleEdit: this.handleEdit, takeToEdit: this.takeToEdit}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyThingContextProvider, Consumer as UglyThingContextConsumer}