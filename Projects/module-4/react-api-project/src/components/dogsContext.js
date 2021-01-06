import React from "react"
const axios = require('axios')
const {Provider, Consumer} = React.createContext()
class DogsContextProvider extends React.Component{
    state = {
        list: [],
        current: 15
    }
    componentDidMount() {
            axios.get("https://dog.ceo/api/breed/germanshepherd/images")
            .then(response => this.setState({list: response.data.message}))
            .catch(error => console.log(error))  
  

    }
 

    handleClick = (number) => {
        this.setState({current: number})
    }
        render() {
        return(
            <Provider value = {{list: this.state.list, current: this.state.current, handleClick: this.handleClick}}>
                {this.props.children}
            </Provider>

        )
    }
    
}

export {DogsContextProvider, Consumer as DogsContextConsumer}