import styles from "./styles.module.css";
import React from "react";
import PropTypes from "prop-types";

import {
  faLinkedin,
  faYoutube,
  faSteam,
  faGithub,
  faInstagram,
  faDeviantart,
} from "@fortawesome/free-brands-svg-icons";
import SocialLink from "../SocialLink";

SocialBar.propTypes = {
  size: PropTypes.string,
};

export default function SocialBar({ size }) {
  return (
    <div className={styles.SocialBarStyle}>
      <ul>
        <li>
          <SocialLink
            icon={faLinkedin}
            to="https://www.linkedin.com/in/rahulsrma26/"
            size={size}
          />
        </li>
        <li>
          <SocialLink
            icon={faYoutube}
            to="https://www.youtube.com/channel/UCVJCd0uYPk6o7ZEkPNc3aAw"
            size={size}
          />
        </li>
        <li>
          <SocialLink
            icon={faGithub}
            to="https://github.com/rahulsrma26/"
            size={size}
          />
        </li>
        <li>
          <SocialLink
            icon={faInstagram}
            to="https://www.instagram.com/welcometors/"
            size={size}
          />
        </li>
        <li>
          <SocialLink
            icon={faDeviantart}
            to="https://www.deviantart.com/rahulsrma26"
            size={size}
          />
        </li>
        <li>
          <SocialLink
            icon={faSteam}
            to="https://steamcommunity.com/id/rahulsrma26/"
            size={size}
          />
        </li>
      </ul>
    </div>
  );
}
