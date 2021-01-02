import logo from './logo.svg';
import React from "react"
import './App.css';
import {Link, Switch, Route} from "react-router-dom"
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Services from "./pages/Services.js"

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>

      <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/services">
            <Services />
          </Route>
      </Switch>
      <h3 className="footer">person@gmail.com / www.person.com / 1234 Person Way Apt 6, PersonTown, Person Country, 96732</h3>

    </div>
  );
}

export default App;
