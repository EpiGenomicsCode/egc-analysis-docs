// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const math = require('remark-math');
const katex = require('rehype-katex');

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EGC Analysis Examples',
  tagline: '⬇️ Browse by assay in the gallery of links below ⬇️',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://EpigenomicsCode.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: 'egc-analysis-docs',
  onBrokenMarkdownLinks: 'warn',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EpigenomicsCode', // Usually your GitHub org/user name.
  projectName: 'egc-analysis-docs', // Usually your repo name.
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: { // make scriptmanager-docs link shortcuts available to all markdown pages
    format: "mdx",
    preprocessor: ({ filePath, fileContent }) => {
      console.log("Injecting global markdown references into " + filePath);
      const fs = require("node:fs");
      const links = fs.readFileSync("./docs/_scriptmanager_file_links.mdx");
      return fileContent + "\n" + links;
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          exclude: [
            './DocComponents/*', './_scriptmanager_file_links.mdx',
            './tutorial-basics', './tutorial-extras',
          ],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/EpigenomicsCode/egc-analysis-docs',
          // path: 'docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // // Replace with your project's social card
      // image: 'img/favicon.ico',
      // colorMode: {
      //   respectPrefersColorScheme: true,
      // },
      navbar: {
        title: 'EGC Analysis',
        logo: {
          alt: 'EGC Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Examples',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/EpigenomicsCode',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/EpigenomicsCode',
            className: "header-github-link",
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Pugh Lab',
                href: 'https://pughlab.mbg.cornell.edu',
              },
              {
                label: 'Lai Lab',
                href: 'https://williamkmlai.github.io',
              },
              {
                label: 'Cornell BRC Epigenomics core',
                href: 'https://www.biotech.cornell.edu/core-facilities-brc/facilities/epigenomics-facility',
              },
            ],
          },
          {
            title: 'Other Tools We Develop',
            items: [
              {
                label: 'ScriptManager',
                href: 'http://pughlab.mbg.cornell.edu/scriptmanager-docs',
              },
              {
                label: 'plotter',
                href: 'http://github.com/CEGRcode/plotter',
              },
              {
                label: 'PEGR',
                href: 'https://github.com/seqcode/pegr',
              },
              {
                label: 'STENCIL',
                href: 'http://pughlab.mbg.cornell.edu/stencil',
              },
              {
                label: 'GenoPipe',
                href: 'http://pughlab.mbg.cornell.edu/GenoPipe-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EGC Analysis, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css',
      type: 'text/css',
      integrity: 'sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==',
      crossorigin: 'anonymous',
    }
  ],
};

export default config;
