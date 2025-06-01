# Bingxin Network (AS4242423374) 

## 对等连接请求

目前 Bingxin Network 开放 Peering，您可以通过建立 WireGuard 隧道与我 Peering。

**请将以下信息通过电子邮件发送至 bingxin@baka.pub，我会在七天左右配置好并回复邮件。**

```text
ASN: 424242xxxx
Public IP: x.x.x.x
DN42 IPv4: （如果选择使用 Extended Next Hop，则无需填写）
DN42 IPv6: (包括用于 IPv6 对等的链路本地地址)
Server: 您要 peer 的节点名称
WireGuard Public Key:
WireGuard Listen Port: 23374
Transmit Routes: (IPv6/IPv4/both)
Multi-Protocol BGP: (true (IPv4/IPv6) /false)
Extended Next Hop: (true/false)
```

**我更倾向于同时使用 `Multi-Protocol BGP` 和 `Extended Next Hop`。**

## 节点列表

### Hong Kong - ACCK
 - WireGuard 公钥: `zcxhWeI3SrJtqlHuqdeNaCeWSwJIYOTjAraXm655+VY=`
 - 端点: `hk01.dn42.baka.pub:<您 ASN 的最后五位数字>`
 - 本地 IPV6 链路: `fe80::2999:225`
 - DN42 IPv4: `172.20.154.225`
 - DN42 IPv6: `fddf:3681:e80::225`

### Japan - ACCK
 - WireGuard 公钥: `N7iQzqWLPb6lpRlf7grQG6rEzQOvDZWkmsRDkRnniH0=`
 - 端点: `jp01.dn42.baka.pub:<您 ASN 的最后五位数字>`
 - 本地 IPV6 链路: `fe80::2999:226`
 - DN42 IPv4: `172.20.154.226`
 - DN42 IPv6: `fddf:3681:e80::226`

### Singapore - Oracle
 - WireGuard 公钥: `O3zvtZQNT6InSXgYDloIuQ4jP6PHO06WtsKz6coylBs=`
 - 端点: `sg01.dn42.baka.pub:<您 ASN 的最后五位数字>`
 - 本地 IPV6 链路: `fe80::2999:227`
 - DN42 IPv4: `172.20.154.227`
 - DN42 IPv6: `fddf:3681:e80::227`

### Mainland China - China Telecom
 - WireGuard 公钥: `i9FzGx+f2qekg+8Dv+GqlEYrhBWEx27LeLiIWQgk2zw=`
 - 端点: `在收到邮件后，我会提供具体的端点信息，我的端点仅支持 IPv6。`
 - 本地 IPV6 链路: `fe80::2999:228`
 - DN42 IPv4: `172.20.154.228`
 - DN42 IPv6: `fddf:3681:e80::228`
 - **注意：只和中国大陆的节点 Peering。**
