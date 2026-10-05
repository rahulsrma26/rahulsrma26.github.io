// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const myName = "Rahul Sharma";
const userName = "rahulsrma26";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: myName,
  tagline: "Full Stack ML Engineer",
  favicon: "favicon.ico",

  // Set the production url of your site here
  url: `https://${userName}.github.io`,
  baseUrl: "/",

  organizationName: userName,
  projectName: `${userName}.github.io`,
  deploymentBranch: "master",

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          sidebarCollapsible: true,
        },
        blog: {
          path: "articles",
          routeBasePath: "articles",
          showReadingTime: true,
          blogSidebarCount: "ALL",
          onInlineTags: "ignore",
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: ["./src/css/custom.css", "./node_modules/katex/dist/katex.min.css"],
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      metadata: [
        {
          name: "google-site-verification",
          content: "XGiC2A6JxvD9Dpd1z7dzwB6lHkt2xzI3d_5Uutepg2Y",
        },
      ],
      navbar: {
        title: "Rahul Sharma",
        items: [
          { to: "/articles", label: "Blog", position: "right" },
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "right",
            label: "Docs",
          },
          { to: "/projects", label: "Projects", position: "right" },
          { to: "/gallery", label: "Gallery", position: "right" },
          { to: "/about", label: "About", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            html: `
              See a typo or want to contribute? submit a PR or issue on <a href="https://github.com/${userName}/${userName}.github.io/" target="_blank" rel="noreferrer noopener">the Github repo</a>!
              <br />
              This website is built with <a href="https://docusaurus.io/" target="_blank" rel="noreferrer noopener">Docusaurus</a>.
              <br />
              Last build on ${new Date().toUTCString()}.
            `,
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ${myName}.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  customFields: {
    keywords: [
      "csglitz",
      "rahul sharma",
      "iisc",
      "bangalore",
      "london",
      "coer",
      "reddit",
      "facebook",
      "jio",
      "microsoft",
      "vgl",
      "rahulsrma26",
      "welcometors",
    ],
    description:
      "Reddit, Meta, Facebook, Microsoft, Jio, IISC, Indian Institute of Science. Works with DL, RL, ML and AI. Youtube: CSGLITZ",
  },
};

export default config;
