import logo from './logo.svg';
import './App.css';
import {Link, Switch, Route} from "react-router-dom"
import Welcome from "./pages/Welcome.js"
import Home from "./pages/Home.js"
import Dogs from "./pages/Dogs.js"
import Cats from "./pages/Cats.js"

function App() {

  return (
    <div className="App">
            <Switch>
                <Route exact path="/">
                    <Welcome />
                </Route>         
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/dogs">
                    <Dogs/>
                </Route>
                <Route exact path="/cats">
                    <Cats/>
                </Route>
            </Switch>
    </div>
  );
}

export default App;
