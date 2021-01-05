import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import "./Welcome.css"
function Welcome() {
    return (
        <div className="welcome">
            <h1 className="welcometitle">
                Welcome to the Word Replacer 5000!
            </h1>
            <button><Link to="/home"> Click Me to Get Started</Link></button>
        </div>
    )

}

export default Welcome