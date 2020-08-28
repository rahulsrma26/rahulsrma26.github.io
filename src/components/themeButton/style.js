import styled from 'styled-components'

const ThemeButtonStyle = styled.div`
    #themeButton {
        transition: ${props => props.theme.transition};
        color: ${props => props.theme.textAccent};
        background-color: ${props => props.theme.bgColor};
        
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        bottom: 3em;
        right: 1em;
        height: 2em;
        width: 2em;
        border: none;
        outline: none;
        border-radius: 50%;
        box-shadow: 2px 2px 8px ${props => props.theme.textColor};
        z-index: 4;
    }

    #themeButton:hover {
        cursor: pointer;
        color: ${props => props.theme.textColor};
        background-color: ${props => props.theme.bgAccent};
    }
`

export default ThemeButtonStyle
