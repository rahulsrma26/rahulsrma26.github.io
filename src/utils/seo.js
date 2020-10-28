import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const SEO = ({ title, desc, meta, lang, type }) => {
    
    const metaDescription = desc || `A full-stack ML Engineer. Ex-Microsoft, IISC, Indian Institute of Science. Works with DL, RL, ML and AI. Youtube: CSGLITZ`

    const pageTitle = title + (type === 'article' ? ' - Rahul Sharma' : ' | Rahul Sharma - Full Stack ML Engineer')

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
                    content: 'XGiC2A6JxvD9Dpd1z7dzwB6lHkt2xzI3d_5Uutepg2Y',
                },
                {
                    name: `keywords`,
                    content: 'csglitz, rahul sharma, iisc, microsoft, bangalore, coer, facebook, vgl',
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
                    property: `twitter:title`,
                    content: title + ' - Rahul Sharma (Ex-Microsoft, IISc, AI expert)',
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
                    content: 'rahulsrma26.github.io',
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
