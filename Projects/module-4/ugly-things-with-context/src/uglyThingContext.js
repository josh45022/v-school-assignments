import React from "react"
const axios = require("axios")
const {Provider, Consumer} = React.createContext()

class UglyThingContextProvider extends React.Component {
    state = {
        listOfItems: [],

    }
    getList = () => {
        axios.get("https://api.vschool.io/joshuabenbaba/thing")
            .then(response => (this.setState({listOfItems: response.data})))
            .catch(error => (error))
    }
    componentDidMount() {
        this.getList()
        this.setState({isLoading: false})
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


    render(){
        return(
            <Provider value={{listOfItems: this.state.listOfItems, handleDelete: this.handleDelete}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyThingContextProvider, Consumer as UglyThingContextConsumer}