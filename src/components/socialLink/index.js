import React from 'react'
import PropTypes from 'prop-types'
import SocialLinkStyle from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialLink = ({ to, icon, size }) => {
    return (
        <SocialLinkStyle>
            <a target="_blank"
                href={to}
                rel="noreferrer"
                aria-label={to}
            >
                <FontAwesomeIcon icon={icon} size={size} />
            </a>
        </SocialLinkStyle>
    )
}

SocialLink.propTypes = {
    to: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
}

export default SocialLink
