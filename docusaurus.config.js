// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Abdulla is cool",
  favicon: "https://s1.ax1x.com/2023/08/01/pPCo0IJ.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

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
          path: "technicalBlogs",
          routeBasePath: "technicalBlogs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "randomThoughtsBlog",
        path: "randomThoughtsBlog",
        routeBasePath: "randomThoughtsBlog",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "startUpBlog",
        path: "startUpBlog",
        routeBasePath: "startUpBlog",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "My Site",
        logo: {
          alt: "My Site Logo",
          src: "https://s1.ax1x.com/2023/08/01/pPCo0IJ.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Technical Blog",
          },
          {
            to: "/randomThoughtsBlog/intro",
            label: "randomThoughts",
            position: "left",
            activeBaseRegex: `/randomThoughts/`,
          },
          {
            to: "/startUpBlog/intro",
            label: "startUp",
            position: "left",
            activeBaseRegex: `/startup/`,
          },
          // {
          //   type: "docSidebar",
          //   sidebarId: "randomThoughtsSidebar",
          //   position: "left",
          //   label: "Random Thoughts",
          // },
          // {
          //   type: "docSidebar",
          //   sidebarId: "startUpBlog",
          //   position: "left",
          //   label: "StartUp",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/AbdullA-Ababakre?tab=repositories",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Blogs",
            items: [
              {
                label: "My Technical Blog",
                to: "/technicalBlogs/intro",
              },
              {
                label: "Random Thoughts",
                to: "/randomThoughtsBlog/intro",
              },
              {
                label: "About Start Up",
                to: "/startUpBlog/intro",
              },
            ],
          },
          {
            title: "Before Came to US",
            items: [
              {
                label: "Interview with Media(Uyghur)",
                href: "https://mp.weixin.qq.com/s/xzYcmI19GhsOOnm-D8snqw",
              },
              {
                label: "Interview with Media(Chinese)",
                href: "https://mp.weixin.qq.com/s/5ll8yAYfVPpA-5rbYPUqcw",
              },
              {
                label: "Once upon a time on TV(Uyghur && Chinse)",
                href: "https://mega.nz/file/Ma9CDDjI#gpvS6VYtBr4t__inCOjhUyRMiekYe9kR5ZHhApsBZZc",
              },
              {
                label: "Wteam(did some crazy shit in Uni(Chinese)",
                href: "https://mp.weixin.qq.com/s/LFjpwNqrRMk71kLRPs7Awg",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
