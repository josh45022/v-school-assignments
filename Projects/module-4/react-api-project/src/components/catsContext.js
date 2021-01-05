import React from "react"
const axios = require('axios')
const {Provider, Consumer} = React.createContext()

class CatsContextProvider extends React.Component{
    state = {
        list: [],
        cat: "hhh",
    }
    componentDidMount() {
        axios.get("https://api.thecatapi.com/v1/images/search")
            .then(response => this.setState({cat: response.data[0].url}))
            .catch(error => console.log(error))    

    }
    newCat = () => {
        axios.get("https://api.thecatapi.com/v1/images/search")
            .then(response => this.setState({cat: response.data[0].url}))
            .catch(error => console.log(error))    
    }
        render() {
        return(
            <Provider value = {{cat: this.state.cat, newCat: this.newCat}}>
                {this.props.children}
            </Provider>

        )
    }
}

export {CatsContextProvider, Consumer as CatsContextConsumer}