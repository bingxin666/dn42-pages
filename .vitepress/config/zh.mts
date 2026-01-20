import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const zh = defineConfig({
  title: "BAKA.PUB DN42",
  description: "实验性的去中心化网络团体",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '服务', link: '/service' },
      { text: '对等连接', link: '/peering-request' },
      { text: '其他信息', link: '/information' }
    ],

    sidebar: [
      {
        text: '服务',
        items: [
          { text: 'Anycast DNS', link: '/service/dns' },
          { text: 'DNS 托管', link: '/service/dns-hosting' },
          { text: 'Looking Glass', link: '/service/looking-glass' },
          { text: 'FlapAlerted', link: '/service/flap-alerted' },
          { text: 'Speedtest 网速测试', link: '/service/speedtest' },
          { text: '在线电台', link: '/service/radio' },
          { text: '搜索引擎与 YaCy 实例', link: '/service/search-engine'}
        ]
      },
      {
        text: '对等连接',
        items: [
          { text: 'Bingxin Network', link: '/peering-request/bingxin-network' },
          { text: 'Baka.Pub Network', link: '/peering-request/baka-pub-network' }
        ]
      },
      {
        text: '其他信息',
        items: [
          { text: 'IPAM', link: '/information/IPAM' }
        ]
      }
    ],
  },
})

