import styled from 'styled-components'

const ArticleStyle = styled.div`
    @media (orientation: landscape) {
        font-size: 0.6em;
        width: 40em;
    }

    @media (orientation: portrait) {
        font-size: 0.7em;
        width: 90vw;
    }

    p {
        margin-bottom: 1em;
        line-height: 1.5;
    }

    #frontmatter {
        text-align: center;
        margin: 0 auto;
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
            font-size: 2.5em;
        }

        ul {
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
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
        }

        .date {
            font-family: 'Montserrat', sans-serif;
        }

        .description {
            font-size: 1.1em;
            // font-family: 'Lora', 'serif';
        }

        border-bottom: 0.1em solid ${props => props.theme.textColor};
    }

    #blogFooter {
        text-align: center;
        margin: 0 auto;
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        button {
            margin-top:0.6em;
            border: none;
            outline: none;
            cursor: pointer;
            transition: ${props => props.theme.transition};
            color: ${props => props.theme.textAccent};
            background-color: ${props => props.theme.bgColor};
        }

        button:hover {
            transform: translateY(-0.5em);
        }

        .double_up_arrow {
            transform: rotate(-90deg);
            display: block;
            color: ${props => props.theme.textAccent};
            font-size: 5em;
        }
    }

    transition: ${props => props.theme.transition};
    background-color: ${props => props.theme.bgColor};
    min-height: 80vh;

    img {
        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .gatsby-highlight {
        font-size: 0.8em;
    }

    #mdContent {
        font-family: 'Lora', 'serif';
        border-bottom: 0.1em solid ${props => props.theme.textColor};
        padding-bottom: 1em;

        li {
            margin-bottom: 1em;
        }

        .longDisplay {
            display: block;
            overflow-x: auto;
            overflow-y: hidden;
        }

        table {
            // width: 100%;
            display: block;
            overflow: auto;
            // table-layout: fixed;
        }

        tr:nth-child(even){
            background-color: ${props => props.theme.bgColor2};
        }

        td {
            // padding-top: 0.25em;
            // padding-bottom: 0.25em;
            padding: 0.25em 0.5em 0.25em;
        }

        th {
            background-color: ${props => props.theme.bgColor2};
            // padding-bottom: 0.5em;
            padding: 0.25em 0.5em 0.25em;
            // border-bottom: 0.1em dotted ${props => props.theme.textColor};
        }

        a {
            font-weight: 600;
            text-decoration: none;
            color: ${props => props.theme.textAccent};
            text-shadow: 0 0 0.2em ${props => props.theme.linkShadow};
        }
        a:hover {
            color: ${props => props.theme.textColor};
        }

        .center {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .handwriting {
            pre {
                font-family: 'Dancing Script', cursive;
                font-size: 1.2em;
                line-height: 1.5em;
                white-space: pre;
            }
        }
    }

    .invertable {
        filter: invert(${props => (props.theme.name === 'light' ? '0' : '1')});
    }

    .stackHorizontally10em {
        align-content: space-around;
        justify-content: space-between;
        display: grid;
        grid-template-columns: repeat(auto-fit, 10em);
        grid-gap: 1em;
    }

    .stackHorizontally5em {
        align-content: space-around;
        justify-content: space-between;
        display: grid;
        grid-template-columns: repeat(auto-fit, 5em);
        grid-gap: 0.5em;
    }
`

export default ArticleStyle
