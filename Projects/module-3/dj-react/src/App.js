import React from "react"
import Square from "./components/Squares.js"
import "./index.css"

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            colors: ["black", "white", "white", "black"]
        }
        this.djSmall = this.djSmall.bind(this)
        this.partyDJ = this.partyDJ.bind(this)
        this.proDJL = this.proDJL.bind(this)
        this.proDJR = this.proDJR.bind(this)
    }
    djSmall() {
        this.setState(
                function(prevState) {
                    return {
                        colors: prevState.colors.map(
                            function(color) {
                                if(color === "black") {
                                    return "white"
                                }
                                if(color==="white") {
                                    return "black"
                                } else {
                                    return color
                                }
                            }
                            
                        )
                }
            }
        )
    }
    
    partyDJ() {
        this.setState(
            function(prevState) {
                return {
                    colors: prevState.colors.map(
                        function (color, i) {
                            if(i < 2) {
                                return "purple"
                            } else {
                                return color
                            }
                        }
                    )
                }
            }
        )
    }

    proDJL() {
        this.setState(
            function(prevState) {
                return {
                    colors: prevState.colors.map(
                        function(color, i) {
                            if (i === 2) {
                                return "blue"
                            } else {
                                return color
                            }
                        }
                    )
                }
            }
        )
    }
    proDJR() {
        this.setState(
            function(prevState) {
                return {
                    colors: prevState.colors.map(
                        function(color, i) {
                            if (i === 3) {
                                return "blue"
                            } else {
                                return color
                            }
                        }
                    )
                }
            }
        )
    }


render() {
    const boxColorData = this.state.colors.map(
        function(color) {
            return (
                <Square color={color}/>
            )
        }
        
    )

    return (
        <div>
            <div className="wrapper">
                {boxColorData}
            </div>
            <button onClick={this.djSmall} className="button1">Small Time DJ</button>
            <button onClick={this.partyDJ}className="button2">Party DJ</button>
            <button onClick={this.proDJL}className="button2">Pro DJ L</button>
            <button onClick={this.proDJR}className="button2">Pro DJ F</button>
        </div>
        
        )
    }

}
 
export default App