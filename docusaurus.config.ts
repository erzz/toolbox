import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Github Toolbox",
  tagline: "Reusable resources for Github projects",
  favicon: "img/wrench.svg",

  // Set the production url of your site here
  url: "https://toolbox.erzz.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "erzz", // Usually your GitHub org/user name.
  projectName: "toolbox", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/erzz/toolbox/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/erzz/toolbox/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ["@docusaurus/theme-mermaid"],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Github Toolbox",
      logo: {
        alt: "Github Toolbox Logo",
        src: "img/wrench.svg",
      },
      items: [
        {to: "/docs/category/actions", label: "Actions", position: "left"},
        {to: "/docs/category/workflows", label: "Workflows", position: "left"},
        {to: "/blog", label: "Blog", position: "left"},
        {
          href: "https://github.com/erzz/toolbox",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Workflows",
              to: "/docs/category/workflows",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Issues",
              href: "https://github.com/erzz/toolbox/issues",
            },
            {
              label: "Profile",
              href: "https://github.com/erzz",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/erzz/toolbox",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a target="_blank" class="footer__link-item" href="https://github.com/erzz">erzz</a>, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    mermaid: {
      theme: {light: "neutral", dark: "dark"},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
