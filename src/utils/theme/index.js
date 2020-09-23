import React from 'react'
import { lightTheme, darkTheme } from './themes'

const ThemeContext = React.createContext({
    lightTheme,
    transition: '0.5s',
    toggleTheme: () => {},
})

// component that wraps entire app in gatsby-browser.js
class ThemeContextWrapper extends React.Component {

    // this is creating flicker
    // componentDidMount() {
    //     const now = new Date()
    //     const time = now.getHours()
    //     if (time > 6 && time < 19)
    //         this.toggleTheme()
    // }    

    constructor(props) {
        super(props)

        this.toggleTheme = () => {
            this.setState({
                currentTheme:
                    this.state.currentTheme === lightTheme
                        ? darkTheme
                        : lightTheme,
            })
        }

        this.state = {
            currentTheme: darkTheme,
            transition: '0.5s',
            toggleTheme: this.toggleTheme,
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextWrapper
export { ThemeContext }
