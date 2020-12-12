import './App.css';
import React from "react"
import Victim from "./Victim.js"

const axios = require("axios")

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      victim: [],
      isLoading: false
    }
  }
  componentDidMount(){
    this.setState({isLoading: true})
    axios.get("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
      .then(response => 
        this.setState({
          isLoading: false,
          victim: response.data
        })
        )
      .catch(error=> console.log(error))
}

  render(){
    const mappedVictims = this.state.victim.map((item, index) => (<Victim personInfo={item} index={index}/>))
    return(
      <div>
        <h1>{this.state.isLoading?"loading...":null}</h1>
          <div className="wrapper">
            {mappedVictims}
          </div>
      </div>
      
    )
  }
}

export default App;
