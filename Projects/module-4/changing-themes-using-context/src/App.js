import logo from './logo.svg';
import './App.css';
import React from "react"
import Main from "./components/Main.js"
import NavBar from "./components/NavBar.js"
import Footer from "./components/Footer.js"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
  
}

export default App;
