import React from "react"
import {ThemeContextConsumer} from "../ThemeContext.js"

function Main() {

        return (
            <ThemeContextConsumer>
                {({theme, changeTheme}) => (
                    <div className={`${theme}theme titleholder`} >
                        <h1 className={`${theme}theme`}>Click the Button to Change the Theme!</h1>
                        
                        <button onClick={changeTheme}>Change Theme</button>
                    </div>
                )}
            
            </ThemeContextConsumer>
        
        )
    }



export default Main