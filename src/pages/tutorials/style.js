import styled from 'styled-components'

const TutorialsStyle = styled.div`
    margin-top: 1em;

    @media (orientation: landscape) {
        font-size: calc(16px + (48 - 16)*((100vw - 400px)/(4000 - 400)));
        .tutorialList {
            font-size: 0.8em;
            align-content: space-around;
            justify-content: space-around;
            display: grid;
            grid-template-columns: repeat(2, minmax(25em, 40vw));
            grid-gap: 1em;
        }
    }

    @media (orientation: portrait) {
        font-size: calc(16px + (48 - 16)*((100vh - 300px)/(3000 - 300)));
        .tutorialList {
            font-size: 0.9em;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 1em;
        }
    }

    a {
        font-weight: 600;
        text-decoration: none;
        color: ${props => props.theme.textAccent};
    }

    a:hover {
        color: ${props => props.theme.textColor};
    }

    .tutorialListItem{
        border: 0.1em dotted ${props => props.theme.bgColor2};
        padding: 1em;
    }

    .preview {
        img {
            width: 100%;
        }
        padding-bottom: 0.5em;
    }
`

export default TutorialsStyle
