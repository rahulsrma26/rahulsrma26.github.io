import styled from 'styled-components'
import { fadeInUpward } from './fade'

const AreasOfInterestStyle = styled.div`
    width: 100%;
    // height: 100vh;
    font-size: 0.8em;
    margin-top: 2em;
    padding-bottom: 3em;
    margin-bottom: 3em;
    border-bottom: 0.1em solid ${props => props.theme.textColor};

    display: flex;
    flex-direction: column;
    justify-content: center;
    // margin: 0 auto 0;
    align-items: center;

    #introContents {
        padding: 1em;
    }

    .heading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto 0;
        align-items: center;
        h2 {
            margin: 0;
            font-size: 1.7em;
        }
        p {
            margin-top: 0.5em;
            font-size: 0.7em;
        }
        padding-bottom: 1em;
    }

    .interests {
        align-content: space-around;
        justify-content: space-around;
        display: grid;
        grid-gap: 2em;

        @media (orientation: landscape) {
            width: 52em;
            grid-template-columns: repeat(3, minmax(12em, 20vw));
            font-size: 0.8em;
        }
        @media (orientation: portrait) {
            width: 100%;
            grid-template-columns: 1fr;
        }
        h3 {
            margin: 0;
        }
    }

    .area {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto 0;
        align-items: center;
        border: 0.2em solid ${props => props.theme.bgColor2};
        border-radius: 1em;
        padding: 1em;

        p {
            font-size: 0.9em;
            text-align: center;
        }
        img {
            filter: invert(${props => (props.theme.name === 'light' ? '0' : '1')});
            width: auto;
            height: 4em;
        }
    }
`

export default AreasOfInterestStyle
