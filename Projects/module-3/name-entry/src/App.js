import React from "react"
import Name from "./Name.js"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        name: "",
        list:[]
        
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

 

  handleSubmit(event){
    event.preventDefault()
    this.setState(
      function (prevState) {
        return {
        name: "",
        list:
              [...prevState.list,

              {
                name: prevState.name
              }
            ] 
          }
      }
    )
  } 

    
  render(){
    const nameData = this.state.list.map(
      function(name) {
          return (
              <Name name={name}/>
          )
      }
      
  )

    return(
      
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input
            class="nameinput"
            type="text"
            name="name"
            value={this.state.name} 
            onChange={this.handleChange}
          />
           <button>Click Me</button>
        </form>

        <h1>{this.state.name}</h1> 

        <ol class="listholder">
            {nameData}
        </ol>

      </div>
    )
  }
}
export default App;
