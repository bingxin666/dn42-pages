import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const zh = defineConfig({
  title: "BAKA.PUB DN42",
  description: "一个实验性的去中心化网络",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '服务', link: '/service' },
      { text: '对等连接', link: '/peering-request' }
    ],

    sidebar: [
      {
        text: '服务',
        items: [
          { text: 'Anycast DNS', link: '/service/dns' },
          { text: 'DNS 托管', link: '/service/dns-hosting' },
          { text: 'Looking Glass', link: '/service/looking-glass' },
          { text: 'FlapAlerted', link: '/service/flap-alerted' },
          { text: '在线电台', link: '/service/radio' }
        ]
      },
      {
        text: '对等连接',
        items: [
          { text: 'Bingxin Network', link: '/peering-request/bingxin-network' },
        ]
      }
    ],

  },
})

