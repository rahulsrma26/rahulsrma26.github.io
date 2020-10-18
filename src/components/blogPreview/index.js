import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import BlogPreviewStyle from './style'
import CommentBox from '../commentBox'

const BlogPreview = ({ data, showComments }) => {

    const postUrl = `/${data.fields.postType}/${data.fields.slug}/`

    return (
        <BlogPreviewStyle>
            <div className="date">
                <span><Moment date={data.frontmatter.date} format="MMMM DD, YYYY" /></span>
            </div>
            <div className="preview">
                <img src={data.frontmatter.image.publicURL} alt={data.frontmatter.title + " preview"} />
            </div>
            <h3>{data.frontmatter.title}</h3>
            <ul>
                {data.frontmatter.tags.map(tag => (
                    <li key={tag} className="tag">{tag}</li>
                ))}
            </ul>
            <p className="description">{data.frontmatter.description}</p>
            <div className="links">
                <Link to={postUrl}>
                    Read More →
                </Link>
                {
                    showComments? (<CommentBox url={postUrl} title={data.frontmatter.title} countOnly={true}/>): (null)
                }
            </div>
        </BlogPreviewStyle>
    )
}

BlogPreview.propTypes = {
    data: PropTypes.object.isRequired,
    showComments: PropTypes.bool.isRequired,
}

export default BlogPreview
