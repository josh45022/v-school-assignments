import React from "react"
import {ThemeContextConsumer} from "../ThemeContext.js"
function NavBar() {
    return (
        <ThemeContextConsumer>
            {({theme, changeTheme})=>(
                <nav>
                <ul>
                    <li className={`${theme}theme`}>Home</li>
                    <li className={`${theme}theme`}>About Us</li>
                    <li className={`${theme}theme`}>Contact</li>
                </ul>
                </nav>            
            )}

        </ThemeContextConsumer>

    )
}  

export default NavBar