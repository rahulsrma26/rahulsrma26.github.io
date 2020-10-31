import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const SEO = ({ title, desc, meta, lang, type, image }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteUrl
                    author
                    info
                    description
                    keywords
                    verification
                }
            }
        }
    `)
    const site = data.site.siteMetadata;

    const metaDescription = desc || `${site.info}. ${site.description}`
    const pageTitle = title + (type === 'article' ? ` - ${site.author}` : ` | ${site.author} - ${site.info}`)

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={pageTitle}
            meta={[
                {
                    name: `email`,
                    content: 'rahulsrma26@gmail.com',
                },
                {
                    name: `google-site-verification`,
                    content: site.verification,
                },
                {
                    name: `keywords`,
                    content: site.keywords.join(","),
                },
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: pageTitle,
                },
                {
                    property: `og:image`,
                    content: site.siteUrl + (image || require('../assets/img/cover.jpg')),
                },
                {
                    property: `twitter:title`,
                    content: pageTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: type || `website`,
                },
                {
                    property: `og:site_name`,
                    content: (new URL(site.siteUrl)).hostname,
                },
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    desc: ``,
    type: ``,
    image: ``,
}

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    lang: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
}

export default SEO
