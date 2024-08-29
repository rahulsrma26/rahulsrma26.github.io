import styles from "./styles.module.css";
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

SocialLink.propTypes = {
  icon: PropTypes.any,
  to: PropTypes.string,
  size: PropTypes.string,
};

export default function SocialLink({ icon, to, size }) {
  return (
    <>
      <a
        target="_blank"
        href={to}
        rel="noreferrer"
        aria-label={to}
        className={styles.SocialLinkStyle}
      >
        <FontAwesomeIcon icon={icon} size={size} />
      </a>
    </>
  );
}
