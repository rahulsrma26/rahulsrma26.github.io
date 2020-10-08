import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../templates/layout'
import SocialBar from '../components/socialBar'
import IntroStyle from '../styles/intro'
import BlogPreview from '../components/blogPreview'

class Intro extends React.Component {
    render() {
        return (
            <IntroStyle>
                <div id="#introPage" className="intro">
                    <h1 className="headline">
                        Hi! I'm <b className="addAccentColor">Rahul</b>,
                        <br />
                        An Enthusiastic
                        <br />
                        Data Scientist
                        <br />
                        &amp; Developer
                    </h1>
                    <SocialBar size="2x" />
                    <div className='scroller'>
                        <a href="#introContents">
                            {/* <img src={DownSVG} alt="down" />
                            <br/>
                            <img src={DownSVG} alt="down" /> */}
                            <div className="double_down_arrow" >&raquo;</div>
                        </a>
                    </div>
                </div>
            </IntroStyle>
        )
    }
}

export default function Home() {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                limit: 1000
                filter: { fileAbsolutePath: { regex: "/content/articles/" } }
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                nodes {
                    id
                    frontmatter {
                        title
                        description
                        tags
                        date
                        image {
                            id
                            publicURL
                        }
                    }
                    fields {
                        slug
                        postType
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Intro />
            <h2 id="introContents">Recent Articles</h2>
            <div className="blogList">
                {data.allMarkdownRemark.nodes.map(node => (
                    <BlogPreview key={node.id} data={node} showComments={false} />
                ))}
            </div>
        </Layout>
    )
}
