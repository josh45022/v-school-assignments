import React from "react"
import "./index.css"
import Number from "./Number.js"

class DiceBox extends React.Component{
    constructor() {
        super()
        this.state = {
            numbers: [1, 2, 3, 4, 5, 6] //Property of State called 'numbers' is an array of pre-set numbers.
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(
            function(prevState) {
                return {
                    numbers: prevState.numbers.map( //Making a New State with a Property Called 'Numbers' By Mapping Over the Numbers Property of the Previous State
                        function(number) { //Called the current item its mapping 'number'
                            return(
                                number = Math.floor(Math.random()*7) //Set that 'number' item equal to a random number
                            )
                        }
                        )

                }
            }
            
        )
    }
    render() {
        const randomNumData = this.state.numbers.map( //Created a variable and set that equal to a mapped numbers property of this.state
            function(number){ //Called current array item I am on 'number'
                return (
                    <Number number={number}/> //Created a property called number and set it equal to the array item I was on before which was also called 'number'. As if that wasn't enough I named my component number too.
                )
            }
        )
        return (
            <div>
                {randomNumData} {/*Called the previously declared variable*/}
                <button className="button" onClick={this.handleClick}>Change Numbers</button>
            </div>
            
        )
    }
}

export default DiceBox