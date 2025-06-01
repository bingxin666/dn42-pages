import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  title: "BAKA.PUB DN42",
  description: "An experimental decentralized flower network",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/en' },
      { text: 'Services', link: '/en/service' },
      { text: 'Peering', link: '/en/peering-request' }
    ],

    sidebar: [
      {
        text: 'Services',
        items: [
          { text: 'DNS Services', link: '/en/service/dns' },
          { text: 'Looking Glass Services', link: '/en/service/looking-glass' }
        ]
      },
      {
        text: 'Peering',
        items: [
          { text: 'Bingxin Network', link: '/en/peering-request/bingxin-network' },
        ]
      }
    ],

  },
})

