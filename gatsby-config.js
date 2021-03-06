/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path')

module.exports = {
    siteMetadata: {
        title: 'Rahul Sharma',
        siteUrl: 'https://rahulsrma26.github.io',
        author: 'Rahul Sharma',
        info: 'Full Stack ML Engineer',
        description: 'Ex-Microsoft, IISC, Indian Institute of Science. Works with DL, RL, ML and AI. Youtube: CSGLITZ',
        keywords: ['csglitz', 'rahul sharma', 'iisc', 'microsoft', 'bangalore', 'coer', 'facebook', 'vgl', 'rahulsrma26', 'welcometors'],
        verification: 'XGiC2A6JxvD9Dpd1z7dzwB6lHkt2xzI3d_5Uutepg2Y',
    },

    plugins: [
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Dancing Script`,
                ],
                display: 'swap'
            }
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: path.join(__dirname, 'content'),
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'downloads',
                        },
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            linkImagesToOriginal: false,
                            maxWidth: 1024,
                        },
                    },
                    {
                        resolve: `gatsby-remark-katex`,
                        options: {
                            // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
                            strict: `ignore`,
                            trust: true,
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-disqus',
            options: {
                shortname: 'rahulsrma26-github-io',
            },
        },
        {
            resolve: `gatsby-plugin-build-date`,
            options: {
                formatAsDateString: true,
                formatting: {
                    format: 'YYYY-MM-DD HH:mm:ss',
                    utc: true,
                },
            },
        },
        'gatsby-plugin-sitemap',
    ],
}
