import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'
import ArticleStyle from './style'
import Moment from 'react-moment'
import CommentBox from '../../components/commentBox'

require(`katex/dist/katex.min.css`)

export const query = graphql`
    query($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                description
                tags
                date
            }
            fields {
                slug
                postType
            }
            html
        }
    }
`

const Article = props => {
    if(!props) return null

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }

    const postUrl = `/${props.data.markdownRemark.fields.postType}/${props.data.markdownRemark.fields.slug}/`

    return (
        <Layout>
            <ArticleStyle>
                <div id="frontmatter">
                    <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                    <ul>
                        {props.data.markdownRemark.frontmatter.tags.map(tag => (
                            <li key={tag} className="tag">{tag}</li>
                        ))}
                    </ul>
                    <p className="date">
                        Written:{' '}
                        <Moment
                            date={props.data.markdownRemark.frontmatter.date}
                            format="MMMM DD, YYYY"
                        />
                    </p>
                    <p className="description">{props.data.markdownRemark.frontmatter.description}</p>
                </div>
                <div
                    id="mdContent"
                    dangerouslySetInnerHTML={{
                        __html: props.data.markdownRemark.html,
                    }}
                ></div>
                <div id="blogFooter">
                    <button onClick={scrollToTop}>
                        <div className="double_up_arrow">&raquo;</div>
                    </button>
                    <CommentBox url={postUrl} title={props.data.markdownRemark.frontmatter.title} countOnly={false}/>
                </div>
            </ArticleStyle>
        </Layout>
    )
}

export default Article
