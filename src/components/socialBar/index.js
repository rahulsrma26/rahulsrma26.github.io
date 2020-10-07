import React from 'react'
import PropTypes from 'prop-types'

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import { faLinkedin, faYoutube, faSteam, faGithub, faInstagram, faDeviantart } from '@fortawesome/free-brands-svg-icons'
import SocialBarStyle from './style'
import SocialLink from '../socialLink'

const SocialBar = ({size}) => {
    return (
        <SocialBarStyle>
            <ul>
                <li>
                    <SocialLink icon={faLinkedin} to="https://www.linkedin.com/in/rahulsrma26/" size={size} />
                </li>
                <li>
                    <SocialLink icon={faYoutube} to="https://www.youtube.com/channel/UCVJCd0uYPk6o7ZEkPNc3aAw" size={size} />
                </li>
                <li>
                    <SocialLink icon={faGithub} to="https://github.com/rahulsrma26/" size={size} />
                </li>
                <li>
                    <SocialLink icon={faInstagram} to="https://www.instagram.com/welcometors/" size={size} />
                </li>
                <li>
                    <SocialLink icon={faDeviantart} to="https://www.deviantart.com/rahulsrma26" size={size} />
                </li>
                <li>
                    <SocialLink icon={faSteam} to="https://steamcommunity.com/id/rahulsrma26/" size={size} />
                </li>
            </ul>
        </SocialBarStyle>
    )
}

SocialBar.propTypes = {
    size: PropTypes.string.isRequired
}

export default SocialBar
