import styles from "./styles.module.css";
import React from "react";
import SocialBar from "../SocialBar";

export default function Intro() {
  return (
    <>
      <div id="introPage" className={styles.intro}>
        <div className={styles.headline}>
          <p>
            Hi! I&apos;m <a href="/about">Rahul</a>,
          </p>
          <p>An Enthusiastic</p>
          <p>Data Scientist</p>
          <p>&amp; Developer</p>
        </div>
        <SocialBar size="2x" />
        <div className={styles.scroller}>
          <a href="#introContents">
            <div className={styles.double_down_arrow}>&raquo;</div>
          </a>
        </div>
      </div>
    </>
  );
}
