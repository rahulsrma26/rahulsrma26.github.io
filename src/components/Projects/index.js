import styles from "./styles.module.css";
import React from "react";
import PropTypes from "prop-types";

ProjectCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export function ProjectCard({ children }) {
  return <div className={styles.projectListItem}>{children}</div>;
}

Projects.propTypes = {
  children: PropTypes.array,
};

export default function Projects({ children }) {
  return (
    <div className={styles.ProjectCardStyle}>
      <div className={styles.projectList}>{children}</div>
    </div>
  );
}
