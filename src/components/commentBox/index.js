import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import CountStyle from './countStyle'
import CommentStyle from './commentStyle'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CommentBox = ({ url, title, countOnly }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteUrl
                }
            }
        }
    `)

    const disqusConfig = {
        url: `${data.site.siteMetadata.siteUrl + url}`,
        identifier: `${title}`
    }

    return countOnly ? (
        <CountStyle>
            <FontAwesomeIcon icon={faComments} />
            <CommentCount config={disqusConfig} placeholder={'...'} />
        </CountStyle>
    ) : (
            <CommentStyle>
                <Disqus config={disqusConfig} />
            </CommentStyle>
        )
}

CommentBox.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    countOnly: PropTypes.bool.isRequired,
}

export default CommentBox
