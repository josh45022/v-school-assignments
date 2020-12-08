import React from "react"
import NavBar from "./NavBar.js"
import Background from "./deskpic.jpg"
function Header() {
    const homeDivStyles = {
        marginTop: "0px",
        backgroundImage: `url(${Background})`
    }
    const h1Styles = {
        fontSize: "80px",
        fontFamily: "arial",
        textAlign: "center"
    }
    const elseStyles = {
        fontFamily: "arial",
        fontWeight: "lighter",
        textAlign: "center",
        display: "block"
    }
    return (
        <div style={homeDivStyles}>
            <h1 style={h1Styles}>
                Clean Blog
            </h1>
            <h1 style={elseStyles}>
                A Blog Theme By Start Bootstrap
            </h1>
            <NavBar />
        </div>

    )
}

export default Header