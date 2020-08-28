import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import NavBarStyle from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


const NavLink = ({children, to}) => {
    return (
        <li>
            <Link activeClassName="activePage" to={to}>
                {children}
            </Link>
        </li>
    )
}

const NavBar = ({isOpen, action}) => {
    return (
        <NavBarStyle isOpen={isOpen}>
            <button id="navMenu" onClick={action}>
                <FontAwesomeIcon icon={isOpen? faTimes: faBars} />
            </button>
            <nav>
                <ul>
                    <NavLink to="/blog">
                        Blog
                    </NavLink>
                    <NavLink to="/tutorials">
                        Tutorials
                    </NavLink>
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                    <NavLink to="/about">
                        About Me
                    </NavLink>
                </ul>
            </nav>
        </NavBarStyle>
    )
}

NavBar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    action: PropTypes.func.isRequired
}

export default NavBar
