import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";

import Home from "../components/Home";

export default function HomePage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description={siteConfig.customFields.description}
      keywords={siteConfig.customFields.keywords}
    >
      <main>
        <Home />
      </main>
    </Layout>
  );
}
