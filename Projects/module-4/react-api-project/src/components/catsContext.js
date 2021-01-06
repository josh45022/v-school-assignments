import React from "react"
const axios = require('axios')
const {Provider, Consumer} = React.createContext()

class CatsContextProvider extends React.Component{
    state = {
        // list: [],
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
            // .then(response => console.log(response[0].image.url))
            .catch(error => console.log(error))

            

        // axios.get("https://api.thecatapi.com/v1/breeds")
        // .then(response => this.setState({list: response.data}))
        // .catch(error => console.log(error))
        
 
            // axios.get("https://api.thecatapi.com/v1/images/search")
            //     .then(response => this.setState({list: response.data}))
            //     .catch(error => console.log(error))    
    
        
     

    }
    handleClick = (number) => {
        this.setState({current: number, noPic: false})
    }
        render() {
        return(
            <Provider value = {{
                list: this.state.list, 
                current: this.state.current, 
                handleClick: this.handleClick, 
                isLoading: this.state.isLoading, 
                noPic: this.state.noPic
                }}>
                {this.props.children}
            </Provider>

        )
    }
}

export {CatsContextProvider, Consumer as CatsContextConsumer}