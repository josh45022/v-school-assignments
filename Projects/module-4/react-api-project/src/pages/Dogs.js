import React from "react"
import DogsForm from "../components/DogsForm.js"
import {DogsContextConsumer} from "../components/dogsContext.js"
import {Link, Switch, Route} from "react-router-dom"

function Dogs() {

    return(
        <DogsContextConsumer>
        
        {({list, current, handleClick}) => {
        const currentDog = list[current]
        // const currentDog = list[current].image.url
        
        
        
        return(
            <div>
                <button className="homebutton"><Link to="/home/"> Home</Link></button>
                <button className="homebutton"><Link to="/dogs/"> Click Me For Dogs</Link></button>
                <button className="homebutton"><Link to="/cats/"> Click Me For Cats</Link></button>

                <h1>Walking The Dog</h1>
                <h2>By Rufus Thomas</h2>
                    
                    <h4>Baby's back, dressed in black,</h4>
                    <h4>Silver buttons all down her back</h4>
                    <h4>High, low, tipsy toe,</h4>
                    <h4>She broke a needle and she can't sew</h4>
                    <h4>Walkin' the {<img alt="" src={`${currentDog}`}/>}, </h4>
                    <h4>Just walkin' the {<img alt="" src={`${currentDog}`}/>}</h4>
                    <h4>If you don't know how to do it,</h4>
                    <h4>I'll show you how to walk the {<img alt="" src={`${currentDog}`}/>}</h4>
                    <h4>Asked a fellow for fifteen cents,</h4>
                    <h4>See the fellow he jumped the fence</h4>
                    <h4>Jumped so high he touched the sky,</h4>
                    <h4>Never got back till the fourth of July</h4>
                    <h4>Walkin' the {<img alt="" src={`${currentDog}`}/>},</h4>
                    <h4>Just walkin' the {<img alt="" src={`${currentDog}`}/>}</h4>
                    <h4>If you don't know how to do it,</h4>
                    <h4>I'll show you how to walk the {<img alt="" src={`${currentDog}`}/>}</h4>
                    <h4>Come on now, come on, come on</h4>
                    <h4>Mary, Mary, quite contrary</h4>
                    <h4>Tell me, how does your garden grow?</h4>
                    <h4>You got silver bells and you got cockleshells</h4>
                    <h4>Pretty maids all in a row</h4>
                    <h4>Walking the {<img alt="" src={`${currentDog}`}/>}</h4>
                    <h4>Just a walkin' the {<img alt="" src={`${currentDog}`}/>}</h4>
                    <h4>If you don't know how to do it</h4>
                    <h4>Show you how to walk the {<img alt="" src={`${currentDog}`}/>}</h4>
                    <h4>Come on now, come on, come on</h4>
                    <h4>Oh oh, just a, just a, just a walkin'</h4>
                    <h4>Just a, just a, just a walkin'</h4>
                    <h4>Just a, just a, just a walkin'</h4>
                    <h4>Oh yeah, if you don't know how to do it</h4>
                    <h4>I'll show you how to walk the {<img alt="" src={`${currentDog}`}/>}, oh</h4>
                    <h4>Just a, just a, just a, just a, just a, just a walkin'</h4>
                    <h4>Just a, just a, just a, just a, just a, just a walkin', oh</h4>   
                    <DogsForm handleClick={handleClick}/>
            </div>
            )}
        }
        </DogsContextConsumer>

    )
}
export default Dogs