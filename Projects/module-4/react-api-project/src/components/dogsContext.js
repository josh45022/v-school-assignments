import React, { useContext } from "react"
const axios = require('axios')
const {Provider, Consumer} = React.createContext()

class DogsContextProvider extends React.Component{
    state = {
        list: [],
        current: 15,
        isLoading: true,
        noPic: true
    }
    componentDidMount() {
            axios.get("https://dog.ceo/api/breed/germanshepherd/images")
            .then(response => this.setState({list: response.data.message, isLoading: false}))
            .catch(error => console.log(error))  
  

    }
 

    handleClick = (number) => {
        this.setState({current: number, noPic: false})
    }
        render() {
        return(
            <Provider value = {{
                ...this.state, 
                handleClick: this.handleClick,
            }}>
                {this.props.children}
            </Provider>

        )
    }
    
}

export {DogsContextProvider, Consumer as DogsContextConsumer}