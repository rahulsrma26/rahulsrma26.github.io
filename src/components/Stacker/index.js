import styles from "./styles.module.css";
import React from "react";
import PropTypes from "prop-types";

Stacker.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
};

export default function Stacker({ size = "small", children }) {
  let content = children;
  if (
    React.Children.count(children) === 1 &&
    React.Children.only(children).type === "p"
  ) {
    content = React.Children.only(children).props.children;
  }

  return (
    <section
      className={
        size === "small" || size === "s"
          ? styles.stackerHorizontalS
          : styles.stackerHorizontalL
      }
    >
      {content}
    </section>
  );
}
