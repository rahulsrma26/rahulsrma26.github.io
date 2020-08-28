const path = require('path')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    fmImagesToRelative(node, {
        // [Optional] The root of "media_folder" in your config.yml
        // Defaults to "static"
        staticFolderName: 'static',
        // [Optional] Include the following fields, use dot notation for nested fields
        // All fields are included by default
        include: ['featured'],
        // [Optional] Exclude the following fields, use dot notation for nested fields
        exclude: ['featured.hidden'],
    })
    if (node.internal.type === 'MarkdownRemark') {
        const dir = path.dirname(node.fileAbsolutePath)
        const slug = path.basename(dir)
        const type = path.basename(path.join(dir, '..'))
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        })
        createNodeField({
            node,
            name: 'postType',
            value: type,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const articles = await graphql(`
        {
            allMarkdownRemark(
                filter: { fields: { postType: { eq: "articles" } } }
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                nodes {
                    id
                    fields {
                        slug
                        postType
                    }
                }
            }
        }
    `)

    const articlesTemplate = path.resolve('./src/templates/articles/index.js')

    articles.data.allMarkdownRemark.nodes.forEach(node => {
        createPage({
            component: articlesTemplate,
            path: `${node.fields.postType}/${node.fields.slug}`,
            context: {
                id: node.id,
            },
        })
    })
}
