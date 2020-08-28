import styled from 'styled-components'

const BlogPreviewStyle = styled.div`
    border-top: 0.1em dotted ${props => props.theme.textColor};

    @media (orientation: landscape) {
        flex-basis: 47%;
    }
    @media (orientation: portrait) {
        width: 100%;
    }

    a {
        text-decoration: none;
    }

    h3{
        margin-top: 0.7em;
        margin-bottom: 0.5em;
    }

    p{
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }

    ul{
        padding: 0;
        margin 0;
        display: flex;
        flex-direction: row;
        list-style-type: none;
        li {
            padding: 0.1em;
            margin-right: 1em;
            color: ${props => props.theme.textAccent};
            border-radius: 10%;
        }
        li:hover {
            color: ${props => props.theme.textColor};
            background-color: ${props => props.theme.bgAccent};
        }
    }

    .tag {
        font-size: 0.8em;
    }

    .date {
        margin-top: -0.7em;
        text-align: center;
        font-size: 0.7em;
        // font-weight: 600;
        // font-family: 'Montserrat', sans-serif;

        span {
            padding: 0.1em 0.5em 0.1em;
            background-color: ${props => props.theme.bgColor};
        }
    }

    .description {
        margin-top: 1em;
        font-size: 0.8em;
        line-height: 1.5;
    }

    .preview {
        margin-top: 1em;
        img {
            width: 100%;
        }
    }

    .readMore {
        padding: 0.4em 0.6em 0.4em;
        font-size: 0.8em;
        font-weight: 600;
        color: ${props => props.theme.bgColor};
        background-color: ${props => props.theme.textAccent};
    }

    .links{
        margin-top: 1em;
        margin-bottom: 0.5em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

export default BlogPreviewStyle
