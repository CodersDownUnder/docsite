/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CodersDownUnder',
  tagline: 'Dinosaurs are cool',
  url: 'https://codersdownunder.net/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/',
  organizationName: 'CodersDownUnder', // Usually your GitHub org/user name.
  projectName: 'Moddocs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CodersDownUnder',
      items: [
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Trhod177. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['toml', 'javastacktrace'],
    },
    hideableSidebar: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
            path: 'docs',
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            routeBasePath: '/',
        },
      },
    ],
  ],
};
