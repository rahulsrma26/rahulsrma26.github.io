import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../templates/layout'
import BlogPreview from '../components/blogPreview'

const Blog = () => {
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

    const seo = {
        title: 'Blog',
    }

    return (
        <Layout seo={seo}>
            <h2>All Articles</h2>
            <div className="blogList">
                {data.allMarkdownRemark.nodes.map(node => (
                    <BlogPreview key={node.id} data={node} showComments={true}/>
                ))}
            </div>
        </Layout>
    )
}

export default Blog
