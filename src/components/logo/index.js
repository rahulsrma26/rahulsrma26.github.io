import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import LogoStyle from './style'

const Logo = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <LogoStyle>
            <Link activeClassName="activePage" to="/">
                {data.site.siteMetadata.title}
            </Link>
        </LogoStyle>
    )
}

export default Logo
