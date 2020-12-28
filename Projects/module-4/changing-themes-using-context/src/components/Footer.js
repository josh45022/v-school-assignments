import React from "react"
import {ThemeContextConsumer} from "../ThemeContext.js"

function Footer() {
    return (
        <ThemeContextConsumer>
            {({theme, changeTheme}) => (
                <footer className={`${theme}theme`}>
                    <h4>person@gmail.com / www.person.com / 1234 Person Way Apt 6, PersonTown, Person Country, 96732</h4>
                </footer>
            )}
            
        </ThemeContextConsumer>
        
    )
}  

export default Footer