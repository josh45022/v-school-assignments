import React from "react"
import {CatsContextConsumer} from "../components/catsContext.js"
import {Link, Switch, Route} from "react-router-dom"

function Cats() {
    return(
        <div>
        <button className="homebutton"><Link to="/home/"> Home</Link></button>
        <button className="homebutton"><Link to="/dogs/"> Click Me For Dogs</Link></button>
        <button className="homebutton"><Link to="/cats/"> Click Me For Cats</Link></button>
        <CatsContextConsumer>

        {({cat, newCat}) => (
        <div className="petholder">

            <h1>Ev'rybody Wants to Be a Cat</h1>
            <h2>By Floyd Huddleston and Al Rinker</h2>
                <h4>Well, little lady, let me elucidate here</h4>
                <h4>Everybody wants to be a {<img alt="" src={`${cat}`}/>}</h4>
                <h4>Because a {<img alt="" src={`${cat}`}/>}'s the only {<img alt="" src={`${cat}`}/>}</h4>
                <h4>Who knows where it's at</h4>

                <h4>Tell me, everybody's pickin' up on that feline beat</h4>
                <h4>'Cause everything else is obsolete</h4>
                <h4>A square with a horn makes you wish you weren't born</h4>

                <h4>Every time he plays</h4>

                <h4>But with a square in the act</h4>
                <h4>You can set music back</h4>

                <h4>To the cave man days, cha-cha-ba-dum-bo-day</h4>

                <h4>I've heard some corny birds who who tried to sing</h4>

                <h4>Still a {<img alt="" src={`${cat}`}/>}'s the only {<img alt="" src={`${cat}`}/>} who knows how to swing</h4>

                <h4>Who wants to dig a long-haired gig or stuff like that?</h4>

                <h4>When everybody wants to be a {<img alt="" src={`${cat}`}/>}</h4>
                <h4>A square with a horn makes you wish you weren't born</h4>
                <h4>Every time he plays</h4>
                <h4>Oh, a rinky-tinky-tinky</h4>
                <h4>With a square in the act you can set music back</h4>
                <h4>To the cave man days</h4>

                <h4>Oh, a rinky-tinky-tinky</h4>

                <h4>Yes, everybody wants to be a {<img alt="" src={`${cat}`}/>}</h4>
                <h4>Because a {<img alt="" src={`${cat}`}/>}'s the only {<img alt="" src={`${cat}`}/>} who knows where it's at</h4>
                <h4>When playin' jazz you always has a welcome mat</h4>
                <h4>'Cause everybody digs a swinging {<img alt="" src={`${cat}`}/>}</h4>

                <h4>Everybody, everybody, everybody wants to be a {<img alt="" src={`${cat}`}/>}</h4>
                <h4>Hallelujah!</h4>
                <h4>Everybody, everybody, everybody wants to be a {<img alt="" src={`${cat}`}/>}</h4>

                <h4>Everybody, everybody, everybody wants to be a {<img alt="" src={`${cat}`}/>}</h4>
                <h4>Everybody, everybody</h4>
            <button onClick={newCat}>Random Cat</button>
        </div>
        )}
        </CatsContextConsumer>
        </div>
    )
}
export default Cats