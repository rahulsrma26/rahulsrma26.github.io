import styled from 'styled-components'

const GalleryStyle = styled.div`
    margin-top: 1em;

    .row {
        display: flex;
        flex-wrap: wrap;
        padding: 0 0.5em;
    }
      
    .column {
        flex: 30%;
        max-width: 30%;
        padding: 0 0.5em;
    }

    .column img {
        margin-top: 1em;
        vertical-align: middle;
        width: 100%;
    }

    @media (orientation: portrait) {
        .column {
            flex: 100%;
            max-width: 100%;
        }
    }

    @media (orientation: landscape) {
        @media (max-aspect-ratio: 17/10) {
            .column {
                flex: 45%;
                max-width: 45%;
            }
        }
    }
`

export default GalleryStyle
