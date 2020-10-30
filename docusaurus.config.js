module.exports = {
  title: 'VKPR',
  tagline: 'Vertigo Kubernetes Production Runtime',
  url: 'https://vertigobr.github.io',
  baseUrl: '/vkpr-docs',
  onBrokenLinks: 'throw',
  favicon: 'https://vertigo.com.br/wp-content/uploads/favicon.png',
  organizationName: 'vertigobr',
  projectName: 'vkpr',
  themeConfig: {
    navbar: {
      title: 'VKPR',
      hideOnScroll: true,
      logo: {
        alt: 'Vertigo logo',
        src: 'img/vtg-dark.svg',
        srcDark: 'img/vtg-light.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/vertigobr/vkpr',
          position: 'right',
          'aria-label': 'GitHub repository',
          className: 'header-github-link',
        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: ' ',
        darkIconStyle: {
          background: `url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='white' d='M12,11.807C9.349,9.155,8.7,5.261,10.049,2c-1.875,0.37-3.666,1.281-5.12,2.735c-3.905,3.905-3.905,10.237,0,14.142	c3.906,3.906,10.237,3.905,14.143,0c1.454-1.454,2.364-3.244,2.735-5.119C18.545,15.106,14.651,14.458,12,11.807z'/%3E%3C/svg%3E")`,
          width: '16px',
          height: '16px',
          marginLeft: '-2px',
          marginTop: '-3px',
        },
        lightIcon: ' ',
        lightIconStyle: {
          background: `url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='white' d='M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19H13V22H11zM11 2H13V5H11zM2 11H5V13H2zM19 11H22V13H19z'/%3E%3Cpath fill='white' transform='rotate(-134.999 5.99 18.01)' d='M4.989 16.51H6.989V19.51H4.989z'/%3E%3Cpath fill='white' transform='rotate(-45.001 18.01 5.99)' d='M16.51 4.99H19.511000000000003V6.99H16.51z'/%3E%3Cpath fill='white' transform='rotate(-134.983 5.99 5.99)' d='M4.489 4.99H7.489V6.99H4.489z'/%3E%3Cpath fill='white' transform='rotate(134.999 18.01 18.01)' d='M17.01 16.51H19.01V19.511000000000003H17.01z'/%3E%3C/svg%3E")`,
          width: '16px',
          height: '16px',
          marginLeft: '-1px',
          marginTop: '-3px',
        },
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Stacks',
              to: 'docs/stacks/',
            },
            {
              label: 'Roadmap',
              to: 'docs/roadmap/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/vertigo.tecnologia',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/vertigo-tecnologia/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/vertigobr/vkpr',
            },
          ],
        },
      ],
      logo: {
        alt: 'Vertigo Tecnologia Logo',
        src: 'https://vertigo.com.br/wp-content/uploads/logo-vertigo-fundopreto.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Vertigo Tecnologia`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/vertigobr/vkpr/edit/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
