import styled from 'styled-components'

const GalleryStyle = styled.div`
    margin: 1em 0 1em;

    .heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        // justify-content: center;
    }

    .single {
        display: none;
    }

    .row {
        display: none;
    }
      
    .column {
        flex: 30%;
        max-width: 30%;
    }

    .title {
        font-size: 0.6em;
        text-transform: capitalize;
        // font-family: 'Lucida Console', monospace;
    }

    .frame {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1em;
        vertical-align: middle;
    }

    .column img {
        width: 100%;
        filter: drop-shadow(0 0 0.15em black);
    }

    @media (orientation: portrait) {
        .single {
            display: flex;
            flex-wrap: wrap;
            align-content: space-around;
            justify-content: space-around;
            // padding: 0 0.5em;
        }
        .title {
            font-size: 0.8em;
        }
        .column {
            flex: 100%;
            max-width: 100%;
        }
    }

    @media (orientation: landscape) {
        .row {
            display: flex;
            flex-wrap: wrap;
            align-content: space-around;
            justify-content: space-around;
            // padding: 0 0.5em;
        }

        .column {
            padding: 0 0.5em;
        }
    }
`

export default GalleryStyle
