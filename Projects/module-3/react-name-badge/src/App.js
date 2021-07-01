import './App.css';
import React from "react"
import "./App.css"
class App extends React.Component {

  constructor(){
    super()
   
    this.state = {
        firstName: '',
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        aboutYou: "",
        lists: [] // an array of objects, where each object represents a name badge entry
        //Every
      }
      
      /*
      
      lists: [ 
        {
          firstName: '',
          lastName: "",
          email: "",
          placeOfBirth: "",
          phone: "",
          favoriteFood: "",
          aboutYou: "", 
        }, 
        {
          firstName: '',
          lastName: "",
          email: "",
          placeOfBirth: "",
          phone: "",
          favoriteFood: "",
          aboutYou: "", 
        }


      ]
      
      */
      
    
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }
  

  handleChange(event){
    const{name, value} = event.target
    this.setState({ 
    [name]:value

  })

  }

  handleClick(event){
    event.preventDefault()
    const button = document.querySelector('.button')
    this.setState(
      function(prevState){
        if(this.state.firstName.length < 3 || this.state.lastName.length < 3 || this.state.email.length < 3 || this.state.placeOfBirth.length < 3 || this.state.phone.length < 3 || this.state.favoriteFood.length < 3 || this.state.aboutYou.length < 3 ) {
           return document.getElementsByClassName('input').required = true
          } 
        if(isNaN/*is Not a Number*/(this.state.phone) === true){
          return document.getElementsByClassName('phone').required = true
        }
      else{
        return {
          firstName: '',
          lastName: "",
          email: "",
          placeOfBirth: "",
          phone: "",
          favoriteFood: "",
          aboutYou: "", 
          lists: [...prevState.lists, 
            {
              firstName: prevState.firstName,
              lastName: prevState.lastName,
              email: prevState.email,
              placeOfBirth: prevState.placeOfBirth,
              phone: prevState.phone,
              favoriteFood: prevState.favoriteFood,
              aboutYou: prevState.aboutYou
            }]
            

        } 
      }})
  }



  render(){
    const mappedList = this.state.lists.map(
      function(item){
        return(
          <div className="badgewrapper">
              <div className="box1">
                <h4>Name: {item.firstName}</h4>
              </div>

              <div className="box3">
                <h4>Last Name: {item.lastName}</h4>
              </div>

              <div className="box3">
                <h4>Place Of Birth: {item.placeOfBirth}</h4>
              </div>

              <div className="box4">
                <h4>Phone:  {item.phone}</h4>
              </div>

              <div className="box5">
                <h4>Favorite Food:  {item.favoriteFood}</h4>
              </div>

              <div className="box6">
                <h4>About:  {item.aboutYou}</h4>
              </div>
          </div>
        )
      }
    )
    return (
      <div>
        <div class="formwrapper">
        <form onSubmit={this.handleClick}>
          <input
          className="input first-name"
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          onChange={this.handleChange}
          required
          />
          <input
          className="input last-name"
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last Name" 
          onChange={this.handleChange}
          required
          />
          <input
          className="input email"
          type="text"
          name="email"
          value={this.state.email}
          placeholder="Email" 
          onChange={this.handleChange}
          required
          />
          <input
          className="input place"
          type="text"
          name="placeOfBirth"
          value={this.state.placeOfBirth}
          placeholder="Place of Birth" 
          onChange={this.handleChange}
          required
          />
          <input
          className="input phone"
          type="text"
          name="phone"
          value={this.state.phone}
          placeholder="Phone" 
          onChange={this.handleChange}
          requierd
          />
          <input
          className="input favorite"
          type="text"
          name="favoriteFood"
          value={this.state.favoriteFood}
          placeholder="Favorite Food" 
          onChange={this.handleChange}
          required
          />
          <textarea
          className="input about-you"
          name="aboutYou"
          value={this.state.aboutYou}
          placeholder="Tell Me About You" 
          onChange={this.handleChange}
          required
          />
          <button className='button'>Click Me</button>
          <h4>Note: <br />*Phone Number Field can only be in numbers. No dashes or letters! <br /> *Fill out all fields <br /> *At least 3 characters required per field.</h4> 
        </form>

        </div>

        <br />
        <br />
          {mappedList}
       <br />
      </div>
    )

  }

}

export default App;