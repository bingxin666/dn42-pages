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
          { text: 'DNS 服务', link: '/service/dns' },
          { text: 'Looking Glass 服务', link: '/service/looking-glass' },
          { text: 'FlapAlerted 监测服务', link: '/service/flap-alerted' },
          { text: '电台服务', link: '/service/radio' }
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

