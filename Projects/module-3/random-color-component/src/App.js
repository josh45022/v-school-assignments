import './App.css';
import React from "react"
import Color from "./Color.js"

const axios = require("axios");

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      colors: "",
      isLoading: false
    }
  }
  componentDidMount(){
    this.setState({

      isLoading: true}
      )
    axios.get(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(response => this.setState(
        {colors: response.data.new_color,
        isLoading: false}))
      .catch(error => (console.log(error)))
    console.log(this.state.colors)
  }
  render(){
    return(
      <div>
        <h1 style={{textAlign: "center"}}>{this.state.isLoading?"Loading Random Color...":null}</h1>
        <Color color={this.state.colors}/>
      </div>
    )
  }
}

export default App;
