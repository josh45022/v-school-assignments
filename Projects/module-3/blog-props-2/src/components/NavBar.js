import React from "react"

const liStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"

}

function NavBar() {
    return (
        <div>
            <nav> 
                <ul>
                    <li style={liStyles}>Start BootStrap</li>
                    <li style={liStyles}>Home</li>
                    <li style={liStyles}>About</li>
                    <li style={liStyles}>Sample Post</li>
                    <li style={liStyles}>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar