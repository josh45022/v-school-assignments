import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react"
import axios from 'axios';
import Person from "./components/Person.js"
import AddPersonForm from "./components/addPersonForm.js"
//7:50
function App() {
  const [people, setPeople] = useState([])

  const getPerson = ()=> {
    axios.get("/people")
      .then(res => setPeople(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  const addPerson = (newPerson)=> {
    axios.post("/people", newPerson)
    .then(res => setPeople(prevPeople => [...prevPeople, res.data]))
    .catch(res => console.log(res))

  }
  const deletePerson = (personId) => {
    axios.delete(`/people/${personId}`)
      .then(res => setPeople(prevPeople => prevPeople.filter(person => person._id !== personId )))
      .catch(err => console.log(err))
  }

  const editPerson = (updates, personId)=> {
    axios.put(`/people/${personId}`, updates)
    .then(res => setPeople(prevPeople => prevPeople.map(person => person._id !== personId? person: res.data)))
    .catch(err => console.log(err))
  }


  useEffect(getPerson,[])
  return (
    <div>
      <AddPersonForm 
       submit={addPerson} 
      buttonText={"Add Person"}
       />
      {people.map(person => <Person {...person} deletePerson={deletePerson} editPerson= {editPerson} key={person.name}/>)}
    </div>
  )
  
}

export default App;
