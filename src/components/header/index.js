import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import HeaderStyle from './style'
import Logo from '../logo'
import NavBar from '../navbar'

const Header = ({navIsOpen, navAction}) => {
    let [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (
                document.body.scrollTop > 30 ||
                document.documentElement.scrollTop > 30
            ) {
                setIsScrolled((isScrolled = true))
            } else {
                setIsScrolled((isScrolled = false))
            }
        })
    }, [])

    return (
        <HeaderStyle isScrolled={isScrolled}>
            <header id='fixed-header'>
                <Logo />
                <NavBar isOpen={navIsOpen} action={navAction} />
            </header>
        </HeaderStyle>
    )
}

Header.propTypes = {
    navIsOpen: PropTypes.bool.isRequired,
    navAction: PropTypes.func.isRequired
}

export default Header
