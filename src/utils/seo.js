import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const SEO = ({ title, desc, meta, lang, type }) => {
    
    const metaDescription = desc || `A full-stack ML Engineer. Works with DL, RL, ML and AI.`

    const defaultTitle = `Rahul Sharma - Full Stack ML Engineer`

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${defaultTitle}`}
            meta={[
                {
                    name: `google-site-verification`,
                    content: 'XGiC2A6JxvD9Dpd1z7dzwB6lHkt2xzI3d_5Uutepg2Y',
                },
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: type || `website`,
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
}

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    lang: PropTypes.string,
    type: PropTypes.string,
}

export default SEO
