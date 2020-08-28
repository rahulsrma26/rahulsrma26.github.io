import React, { useContext } from 'react'
import { ThemeContext } from '../../utils/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import ThemeButtonStyle from './style'

const ThemeButton = () => {
    const themeData = useContext(ThemeContext)

    return (
        <ThemeButtonStyle>
            <button id="themeButton" onClick={themeData.toggleTheme}>
                <FontAwesomeIcon icon={faLightbulb} />
            </button>
        </ThemeButtonStyle>
    )
}

export default ThemeButton
