import styled from 'styled-components'
import { fadeInLeft, fadeOutLeft } from '../../styles/fade'

const NavBarStyle = styled.div`
    justify-content: flex-end;

    nav {
        ul {
            margin: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            list-style-type: none;

            li {
                margin: 0;
                list-style-type: none;
                padding-right: 1em;

                a {
                    font-family: 'Montserrat', 'Helvetica', 'sans-serif';
                    font-weight: 600;
                }
            }
        }
    }

    #navMenu {
        font-family: Arial, Helvetica, sans-serif;
        transition: ${props => props.theme.transition};
        position: fixed;
        top: 0.5em;
        right: 0.5em;
        color: ${props => props.theme.textColor};
        background-color: ${props => props.theme.bgColor};
        border: none;
        outline: none;
        display: none;
        span {
            margin-right: 0.5em;
        }
    }

    #navMenu:hover{
        color: ${props => props.theme.textAccent};
    }

    @media (orientation: portrait) {
        #navMenu {
            display: block;
        }
        
        nav{
            // display: ${props => (props.isOpen ? 'block' : 'none')};
            transition: ${props => props.theme.transition};
            font-size: 3vh;
            
            ul {
                box-shadow: -0.1em 0.1em 0.1em black;
                transition: ${props => props.theme.transition};
                position: fixed;
                animation: ${props => (props.isOpen ? fadeInLeft : fadeOutLeft)} 0.5s;
                top: 1.4em;
                // right: 0.5em;
                right: ${props => (props.isOpen ? '0em' : '-7em')};
                background: ${props => props.theme.bgAccent};
                display: flex;
                flex-direction: column;
                padding: 0;
                margin: 0;
                border-radius: 0em 0em 0em 0.5em;
                // height: 80vh;

                li {
                    padding: 1em 1em 1em;
                    margin: 0;
                    // width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;

                    transition: ${props => props.theme.transition};
                    background: ${props => props.theme.bgAccent};
                    a{
                        transition: ${props => props.theme.transition};
                        background: ${props => props.theme.bgAccent};
                    }
                }
            }
        }
    }
`

export default NavBarStyle
