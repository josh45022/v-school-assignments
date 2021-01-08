import React from "react"
const axios = require('axios')
const {Provider, Consumer} = React.createContext()

class CatsContextProvider extends React.Component{
    state = {
        list: [],
        current: 0,
        isLoading: true,
        noPic: true,
    }
    componentDidMount() {
        let config = {method: 'GET', headers: {'x-api-key':'2c39b36b-1436-41a4-a356-c9dc8397fea1'}, mode: 'cors'}
        fetch("https://api.thecatapi.com/v1/breeds", config)
            .then(response => response.json())
            .then(response => this.setState({list: response, isLoading: false}))
            .catch(error => console.log(error))
        
     

    }
    handleClick = (e, number) => {
        e.preventDefault()
        this.setState({current: number, noPic: false})
    }
        render() {
        return(
            <Provider value = {{
                ...this.state,
                handleClick: this.handleClick 
                }}>
                {this.props.children}
            </Provider>

        )
    }
}

export {CatsContextProvider, Consumer as CatsContextConsumer}