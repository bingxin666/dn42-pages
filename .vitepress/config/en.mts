import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  title: "BAKA.PUB DN42",
  description: "Decentralized experimental network community",
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
          { text: 'Anycast DNS', link: '/en/service/dns' },
          { text: 'DNS Hosting', link: '/en/service/dns-hosting' },
          { text: 'Looking Glass', link: '/en/service/looking-glass' },
          { text: 'FlapAlerted', link: '/en/service/flap-alerted' },
          { text: 'Speedtest', link: '/en/service/speedtest' },
          { text: 'Online Radio', link: '/en/service/radio' },
          { text: 'Search Engine and YaCy Instance', link: '/en/service/search-engine'}
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

