import styled from 'styled-components'

const ProjectStyle = styled.div`
    margin-top: 1em;

    @media (orientation: landscape) {
        font-size: calc(16px + (48 - 16)*((100vw - 400px)/(4000 - 400)));
        .projectList {
            font-size: 0.8em;
            align-content: space-around;
            justify-content: space-around;
            display: grid;
            grid-template-columns: repeat(3, minmax(10em, 25vw));
            grid-gap: 1em;
        }

        @media (max-aspect-ratio: 3/2) {
            .projectList {
                grid-template-columns: repeat(2, minmax(20em, 40vw));
            }
        }
    }

    @media (orientation: portrait) {
        font-size: calc(16px + (48 - 16)*((100vh - 300px)/(3000 - 300)));
        .projectList {
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

    .projectListItem{
        border: 0.2em solid ${props => props.theme.bgColor2};
        border-radius: 1em;
        padding: 1em;
    }
`

export default ProjectStyle
