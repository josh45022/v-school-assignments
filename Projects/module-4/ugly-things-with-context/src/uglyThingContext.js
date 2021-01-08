import React from "react"
const axios = require("axios")
const {Provider, Consumer} = React.createContext()

class UglyThingContextProvider extends React.Component {
    state = {
        listOfItems: [],
        isEditing: false

    }

    createUglyThing = (event) => {
        event.preventDefault()
        axios.post("https://api.vschool.io/joshuabenbaba/thing", this.state)
            .then(response => {

                this.setState(prevState => {
                    return {
                        listOfItems: [...prevState.listOfItems,response.data]
                    }
                })
            })
            .catch(error => (error))
        this.setState({
            title: "",
            description: "",
            imgUrl:""
        })
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

        axios.delete(`https://api.vschool.io/joshuabenbaba/thing/${id}`)
            .then(response => {
                this.setState(
                    prevState => {
                        return{
                            listOfItems: prevState.listOfItems.filter(thing => id !== thing.id)
                        }
                    }
                )
            })
            .catch(error => (error))
        this.getList()
    }

    takeToEdit = () => {
        this.setState({isEditing: true})
    }

    handleEdit = (id, putObject) => {
        axios.put(`https://api.vschool.io/joshuabenbaba/thing/${id}`, putObject)
            .then(response => console.log(response))
            .catch(error => console.log(error))
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