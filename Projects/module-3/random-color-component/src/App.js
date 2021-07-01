import axios from "axios"
import './App.css';
import React from "react"
import Color from "./Color.js"


class App extends React.Component{
  constructor() {
    super()
    this.state = {
      colors: "",
      isLoading: false
    }
  }
  changeColor = () => {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
    .then(response => this.setState(
      {colors: response.data.new_color}))

      .catch(error => (console.log(error)))
  }
  componentDidMount(){
    this.setState({

      isLoading: true}
      )
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(response => this.setState(
        {colors: response.data.new_color,
        isLoading: false}))
        // .then(res => console.log(res.data.colors[0].hex))
      .catch(error => (console.log(error)))
    // console.log(this.state.colors)
  }
  render(){
    return(
      <div>
        <h1 style={{textAlign: "center"}}>{this.state.isLoading?"Loading Random Color...":null}</h1>
        <Color changeColor={this.changeColor} color={this.state.colors}/>
      </div>
    )
  }
}

export default App;
