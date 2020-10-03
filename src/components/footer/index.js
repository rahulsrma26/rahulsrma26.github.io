import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import FooterStyle from './style'
import JsSVG from '../../assets/svgs/js.svg'
import ReactSVG from '../../assets/svgs/react.svg'
import GatsbySVG from '../../assets/svgs/gatsby.svg'
import StyledComponentsSVG from '../../assets/svgs/styled-components.svg'
import MarkdownSVG from '../../assets/svgs/markdown.svg'
import GitHubSVG from '../../assets/svgs/github.svg'

const Icon = ({ to, src, title }) => {
    return (
        <li>
            <a target="_blank" href={to} rel="noreferrer">
                <img src={src} title={title} alt={title} />
            </a>
        </li>
    )
}

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
            currentBuildDate {
                currentDate
            }
        }
    `)

    return (
        <FooterStyle>
            <footer>
                <span className="typoSpan">
                    See a typo or want to contribute? submit a PR or issue on{' '}
                    <a
                        target="_blank"
                        href="https://github.com/rahulsrma26/rahulsrma26.github.io/"
                        rel="noreferrer"
                    >
                        the Github repo
                    </a>
                    !
                </span>
                <div className="stackIcons">
                    <h4>This website built with:</h4>
                    <ul>
                        <Icon
                            src={JsSVG}
                            title="Javascript"
                            to="https://www.javascript.com/"
                        />
                        <Icon
                            src={ReactSVG}
                            title="reactjs"
                            to="https://reactjs.org/"
                        />
                        <Icon
                            src={GatsbySVG}
                            title="Gatsby"
                            to="https://www.gatsbyjs.com/"
                        />
                        <Icon
                            src={StyledComponentsSVG}
                            title="Styled Components"
                            to="https://styled-components.com/"
                        />
                        <Icon
                            src={MarkdownSVG}
                            title="Markdown"
                            to="https://www.markdownguide.org/"
                        />
                        <Icon
                            src={GitHubSVG}
                            title="GitHub-Pages"
                            to="https://pages.github.com/"
                        />
                    </ul>
                </div>
                <p>
                    <small>
                        &copy;{new Date().getFullYear()} -{' '}
                        {data.site.siteMetadata.author}
                    </small>
                </p>
                <span className='buildDate'>
                    Last build on {data.currentBuildDate.currentDate} UTC
                </span>
            </footer>
        </FooterStyle>
    )
}

export default Footer
