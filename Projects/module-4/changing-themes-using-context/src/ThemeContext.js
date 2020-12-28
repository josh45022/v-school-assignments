import React from "react"
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends React.Component{
    state = {
        theme: "dark"
    }
    changeTheme = () => {
        this.setState(
        function (prevState) {
            return {
            theme: prevState.theme === "light"? "dark": "light"
            }
        })
    }
    render(){
        return (
            <Provider value = {{theme: this.state.theme, changeTheme: this.changeTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}