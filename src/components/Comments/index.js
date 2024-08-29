import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Comments() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const repoName = `${siteConfig.organizationName}/${siteConfig.projectName}`;

  return (
    <div>
      <Giscus
        id="comments"
        repo={repoName}
        repoId="MDEwOlJlcG9zaXRvcnkxMDkxMTk2NzQ="
        category="General"
        categoryId="DIC_kwDOBoEIus4Ch3Bm"
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === "dark" ? "dark_tritanopia" : "light_tritanopia"}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
