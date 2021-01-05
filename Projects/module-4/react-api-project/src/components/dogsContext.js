import React from "react"
const axios = require('axios')
const {Provider, Consumer} = React.createContext()
class DogsContextProvider extends React.Component{
    state = {
        list: [],
        current: 3,
    }
    componentDidMount() {
        axios.get("https://dog.ceo/api/breed/germanshepherd/images")
            .then(response => this.setState({list: response.data.message}))
            .catch(error => console.log(error))    

    }
    handleSubmit = (number) => {
        this.setState({current: number})
        console.log(this.state.current)
    }
        render() {
        return(
            <Provider value = {{list: this.state.list, current: this.state.current, handleSubmit: this.handleSubmit}}>
                {this.props.children}
            </Provider>

        )
    }
    
}

export {DogsContextProvider, Consumer as DogsContextConsumer}