import React, { useState, useContext, useEffect } from 'react'
import { ThemeContext } from '../../utils/theme'
import { ThemeProvider } from 'styled-components'
import SEO from '../../utils/seo'
import LayoutStyle from './style'
import Header from '../../components/header'
import Footer from '../../components/footer'
import ThemeButton from '../../components/themeButton'

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

const Layout = ({ children, seo }) => {
    const theme = useContext(ThemeContext)
    let [navIsOpen, toggleNav] = useState(false)

    const navAction = () => {
        toggleNav(navIsOpen ? (navIsOpen = false) : (navIsOpen = true))
    }

    const navClose = () => {
        toggleNav((navIsOpen = false))
    }

    // adds smooth scrolling
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // eslint-disable-next-line global-require
            require('smooth-scroll')('a[href*="#"]', {
                // header: '#fixed-header',
                // speed: 2000,
                // speedAsDuration: true,
                durationMax: 2000,
                offset: function (anchor, toggle) {
                    return (
                        document.querySelector('header').getBoundingClientRect()
                            .bottom + 10
                    )
                },
            })
        }
    })

    return (
        <ThemeProvider theme={theme.currentTheme}>
            <LayoutStyle>
                <SEO {...seo} />
                <Header navIsOpen={navIsOpen} navAction={navAction} />
                <main role="presentation" onClick={navClose} onKeyDown={navClose}>{children}</main>
                <ThemeButton />
                <Footer />
            </LayoutStyle>
        </ThemeProvider>
    )
}

export default Layout
