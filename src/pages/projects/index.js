import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../../templates/layout'
import ProjectStyle from './style'

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                limit: 1000
                filter: { fileAbsolutePath: { regex: "/content/projects/" } }
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                nodes {
                    id
                    html
                }
            }
        }
    `)

    return (
        <Layout>
            <ProjectStyle>
                <div className="projectList">
                    {data.allMarkdownRemark.nodes.map((node, index) => (
                        <div className="projectListItem">
                            <div
                                className="projectContent"
                                dangerouslySetInnerHTML={{
                                    __html: node.html,
                                }}
                            ></div>
                        </div>
                    ))}
                </div>
            </ProjectStyle>
        </Layout>
    )
}

export default Projects
