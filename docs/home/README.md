# Default Theme Config

## Homepage

The default theme provides a homepage layout (used on the homepage of this site). To use it, specify home: true plus some other metadata in your root README.md's YAML frontmatter. This is an example of how it works:

```bash
    ---
    home: true
    heroImage: /hero.png
    heroText: Hero Title
    tagline: Hero subtitle
    actionText: Get Started →
    actionLink: /guide/
    features:
    - title: Simplicity First
    details: Minimal setup with markdown-centered project structure helps you focus on writing.
    - title: Vue-Powered
    details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
    - title: Performant
    details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
    footer: MIT Licensed | Copyright © 2018-present Evan You
    ---
```

## Navbar

The Navbar may contain your page title, Search Box, Navbar Links, Languages and Repository Link, they all depend on your configuration.

### Navbar Logo
You can add a logo to the navbar via themeConfig.logo. Logo can be placed in public folder.

```js
    // .vuepress/config.js
    module.exports = {
        themeConfig: {
            logo: '/assets/img/logo.png',
        }
    }
```