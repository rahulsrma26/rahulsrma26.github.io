import styled from 'styled-components'

const FooterStyle = styled.div`
    footer {
        font-size: 0.6em;
        text-align: center;
        margin: 0 auto;
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-top: 0.1em solid ${props => props.theme.textColor};

        .buildDate {
            font-size: 0.6em;
        }

        .typoSpan {
            padding-top: 1em;
        }

        .stackIcons {
            width: 100%;
            max-width: calc(2em * 6 * 1.5);
            ul {
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                list-style-type: none;
                li {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    a {
                        img {
                            width: 2em;
                            height: auto;
                        }
                    }
                }
                li:hover {
                    transform: translateY(-0.5em);
                }
            }
        }
    }
`

export default FooterStyle
