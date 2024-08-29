import styles from "./styles.module.css";
import React from "react";
import PropTypes from "prop-types";

Area.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string,
};

function Area({ icon, title, description }) {
  return (
    <div className={styles.area}>
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

AreasOfInterest.propTypes = {
  areasOfInterest: PropTypes.array,
};

export default function AreasOfInterest({ areasOfInterest }) {
  return (
    <div className={styles.AreaOfInterestStyle}>
      <div id="introContents" className={styles.introContents} />
      <div className={styles.heading}>
        <h2>Areas of Interest</h2>
        <p>Things that I love working on.</p>
      </div>
      <div className={styles.interests}>
        {areasOfInterest.map((area, index) => (
          <Area key={index} {...area} />
        ))}
      </div>
    </div>
  );
}
