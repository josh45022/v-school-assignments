import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import "./Home.css"

function Home() {

    return(
        <div>
            <button className="homebutton"><Link to="/home/"> Home</Link></button>
            <button className="homebutton"><Link to="/dogs/"> Click Me For Dogs</Link></button>
            <button className="homebutton"><Link to="/cats/"> Click Me For Cats</Link></button>

            <h1>Kiss Your Cares Goodbye with Word Replacer 5000!</h1>
            <p>Using cutting edge CSS, HTML, and React JS technology, Word Replacer 5000 replaces words with the click of a button!</p> 
            <p>View and customize the lyrics of everyone's favorite two songs - "Ev'rybody Wants to Be a Cat" from Disney's <i> Aristocats</i> and
            "Walking the Dog" By Rufus Thomas!
            </p>
            <p>Our Dogs Feature makes it possible for you to replace the boring word "dog" with a picture of a German Shepherd Dog with over 100 choices to choose from! </p>
            <p>Our new Cats Feature makes it possible for you to replace the word "cat" with 68 different cat pictures that you can generate yourself!</p>
            <p>Click on the links to try them out!</p>
            <img className="homeimage" alt="" src="https://img.discogs.com/JfkPG2zCbpKhNrVP2Xy63cUoY-w=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3202240-1320273915.jpeg.jpg"/>
            <img className="homeimage" alt=""src="https://i.pinimg.com/originals/55/3a/49/553a4902fa17aef172abaa67e807328e.jpg"/>

            
        </div>
    )
}
export default Home