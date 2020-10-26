import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../../templates/layout'
import TutorialsStyle from './style'

const Tutorials = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                limit: 1000
                filter: { fileAbsolutePath: { regex: "/content/tutorials/" } }
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                nodes {
                    id
                    frontmatter {
                        title
                        image {
                            id
                            publicURL
                        }
                    }
                    html
                }
            }
        }
    `)

    const seo = {
        title: 'Tutorials',
    }

    return (
        <Layout seo={seo}>
            <TutorialsStyle>
                <div className="tutorialList">
                    {data.allMarkdownRemark.nodes.map((node, index) => (
                        <div className="tutorialListItem">
                            <div className="preview">
                                <img src={node.frontmatter.image.publicURL} alt={node.frontmatter.title} />
                            </div>
                            <div
                                className="tutorialContent"
                                dangerouslySetInnerHTML={{
                                    __html: node.html,
                                }}
                            ></div>
                        </div>
                    ))}
                </div>
            </TutorialsStyle>
        </Layout>
    )
}

export default Tutorials
