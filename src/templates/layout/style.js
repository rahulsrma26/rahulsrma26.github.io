import styled from 'styled-components'
import 'normalize.css'

const LayoutStyle = styled.div`

    // font-size: calc(12px + (64 - 12)*((100vw - 400px)/(4000 - 400)));
    // line-height: 2em; // calc(1.3em + (0 - 1)*((100vw - 400px)/(4000 - 400)));
    
    margin: 0;
    transition: ${props => props.theme.transition};
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.bgColor};
    padding: 1em;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    li {
        transition: ${props => props.theme.transition};
        color: ${props => props.theme.textColor};
        background-color: ${props => props.theme.bgColor};
    }

    main {
        margin-top: 3vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        // justify-content: space-between;
        padding-bottom: 0.5em;
    }

    .addAccentColor {
        color: ${props => props.theme.textAccent};
    }

    .accentBtn {
        font-size: 0.9em;
        padding: 0.1em 0.2em 0.1em;
        transition: ${props => props.theme.transition};
        color: ${props => props.theme.textAccent};
        background-color: ${props => props.theme.bgAccent};
            
        border: none;
        // outline: none;
    }
    
    .accentBtn:hover {
        box-shadow: 2px 2px 8px ${props => props.theme.textColor};
        cursor: pointer;
        color: ${props => props.theme.bgAccent};
        background-color: ${props => props.theme.textAccent};
    }

    @media (orientation: landscape) {
        font-size: calc(16px + (64 - 16)*((100vw - 400px)/(4000 - 400)));
        .blogList {
            width: 100%;
            font-size: 0.8em;
            align-content: space-around;
            justify-content: space-around;
            display: grid;
            grid-template-columns: repeat(3, minmax(10em, 25vw));
        }

        @media (max-aspect-ratio: 3/2) {
            .blogList {
                grid-template-columns: repeat(2, minmax(20em, 40vw));
            }
        }
    }
    @media (orientation: portrait) {
        font-size: calc(16px + (48 - 16)*((100vh - 300px)/(3000 - 300)));
        .blogList {
            font-size: 0.9em;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 1em;
        }
    }
`

export default LayoutStyle
