import styled from 'styled-components'

const GalleryStyle = styled.div`
    margin: 1em 0 1em;

    .heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        // justify-content: center;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        align-content: space-around;
        justify-content: space-around;
        // padding: 0 0.5em;
    }
      
    .column {
        flex: 30%;
        max-width: 30%;
    }

    .column img {
        margin-top: 1em;
        vertical-align: middle;
        width: 100%;
        filter: drop-shadow(0 0 0.15em black);
    }

    @media (orientation: portrait) {
        .column {
            flex: 100%;
            max-width: 100%;
        }
    }

    @media (orientation: landscape) {
        .column {
            padding: 0 0.5em;
        }
        @media (max-aspect-ratio: 17/10) {
            .column {
                flex: 47%;
                max-width: 47%;
            }
        }
    }
`

export default GalleryStyle
