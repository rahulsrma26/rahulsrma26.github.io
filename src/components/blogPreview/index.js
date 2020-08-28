import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import BlogPreviewStyle from './style'
import CommentBox from '../commentBox'

const BlogPreview = ({ data }) => {

    const postUrl = `/${data.fields.postType}/${data.fields.slug}/`

    return (
        <BlogPreviewStyle>
            <Link to={postUrl}>
                <div className="date">
                    <span><Moment date={data.frontmatter.date} format="MMMM DD, YYYY" /></span>
                </div>
                <div className="preview">
                    <img src={data.frontmatter.image.publicURL} />
                </div>
                <h3>{data.frontmatter.title}</h3>
                <ul>
                    {data.frontmatter.tags.map(tag => (
                        <li key={tag} className="tag">{tag}</li>
                    ))}
                </ul>
                <p className="description">{data.frontmatter.description}</p>
                <div className="links">
                    <button className="accentBtn readMore">Read More →</button>
                    <CommentBox url={postUrl} title={data.frontmatter.title} countOnly={true}/>
                </div>
            </Link>
        </BlogPreviewStyle>
    )
}

BlogPreview.propTypes = {
    data: PropTypes.object.isRequired,
}

export default BlogPreview
