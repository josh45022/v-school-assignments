import './App.css';
import React from "react"
import Color from "./Color.js"

const axios = require("axios");

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      color: "",
      isLoading: false
    }
  }
  componentDidMount(){
    this.setState({isLoading: true})
    axios.get(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(response => (this.setState({
        color: response.data
      })))
      .catch(error => (console.log(error)))
  }
  render(){

    return(
      <Color color={this.state.color}/>
    )
  }
}

export default App;
