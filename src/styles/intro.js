import styled from 'styled-components'
import {fadeInUpward} from './fade'

const IntroStyle = styled.div`
    .intro {
        animation: ${fadeInUpward} 1s;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto 0;

        a {
            font-weight: 600;
            text-decoration: none;
            color: ${props => props.theme.textAccent};
            text-shadow: 0 0 0.2em ${props => props.theme.linkShadow};
        }
        a:hover {
            color: ${props => props.theme.textColor};
        }

        .headline {
            color: ${props => props.theme.textColor};
            // letter-spacing: 0.1em;
            p {
                font-weight: 600;
                font-size: 2em;
                margin: 0;
            }
            margin-bottom: 1em;
        }
        
        .double_down_arrow{
            transform:rotate(90deg);
            display: block;
            color: ${props => props.theme.textAccent};
            font-size: 5em;
        }

        .scroller {
            margin-top: 1em;
            align-items: center;
            display: flex;
            justify-content: center;
            a {
                text-decoration: none;
                position: relative;
                z-index: 1;
                transition: ${props => props.theme.transition};
                color: ${props => props.theme.textAccent};
                background-color: ${props => props.theme.bgColor};
                border: none;
                outline: none;
                border-radius: 50%;
                width: 2em;
                
                div{
                    width: 100%;
                    transition: ${props => props.theme.transition};
                    animation-duration: 2s;
                    animation-name: buttonIconMove;
                    animation-iteration-count: infinite;
                }
                @keyframes buttonIconMove {
                    0% {
                      transform: rotate(90deg) translateX(-.1em);
                      opacity: 0;
                    }
                    50% {
                      transform: rotate(90deg) translateX(.1em);
                      opacity: 1;
                    }
                    100% {
                      transform: rotate(90deg) translateX(-.1em);
                      opacity: 0;
                    }
                }
            }
            a:hover {
                position: relative;
                z-index: 1;
                cursor: pointer;
                svg{
                    animation-name: none;
                }
            }
        }
    }
`

export default IntroStyle
