import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react"
const axios = require("axios")

function App() {
  const [bounties, setBounties] = useState([])

  
  useEffect(
    axios.get("/bounties")
    .then(res => setBounties(res.data))
    .catch(err => console.log(err))
    ,[])
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
