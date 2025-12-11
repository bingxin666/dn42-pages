# Bingxin Network (AS4242423374)

## Peering Request

**We have now opened AutoPeer for some nodes. You can use [@baka_lg_bot](https://t.me/baka_lg_bot) on Telegram for self-service peering!**

Bingxin Network is currently open for peering. You can peer with us by establishing a WireGuard tunnel.

**Please send the following information via email to bingxin@baka.pub. I will configure it and reply to the email in about seven days.**

```text
ASN: 424242xxxx
Public IP: x.x.x.x
DN42 IPv4: (Not required if you choose to use Extended Next Hop)
DN42 IPv6: (Including link-local address for IPv6 peering)
Server: The node name you want to peer with
WireGuard Public Key:
WireGuard Listen Port: 23374
Transmit Routes: (IPv6/IPv4/both)
Multi-Protocol BGP: (true (IPv4/IPv6) /false)
Extended Next Hop: (true/false)
```

**I prefer to use both `Multi-Protocol BGP` and `Extended Next Hop`.**

## Global Network

Providing unified and high-quality DN42 connectivity globally.

### Topology

![Global Network Topology](https://resource.dn42.baka.pub/Global-Network.webp)

### Node List

#### Hong Kong - ACCK
 - WireGuard Public Key: `zcxhWeI3SrJtqlHuqdeNaCeWSwJIYOTjAraXm655+VY=`
 - Endpoint: `hk01.dn42.baka.pub:<Last five digits of your ASN>`
 - Local IPv6 Link: `fe80::2999:225`
 - DN42 IPv4: `172.20.154.225`
 - DN42 IPv6: `fddf:3681:e80:225::1`

#### Japan - ACCK
 - WireGuard Public Key: `N7iQzqWLPb6lpRlf7grQG6rEzQOvDZWkmsRDkRnniH0=`
 - Endpoint: `jp01.dn42.baka.pub:<Last five digits of your ASN>`
 - Local IPv6 Link: `fe80::2999:226`
 - DN42 IPv4: `172.20.154.226`
 - DN42 IPv6: `fddf:3681:e80:226::1`

#### Singapore - Oracle
 - WireGuard Public Key: `O3zvtZQNT6InSXgYDloIuQ4jP6PHO06WtsKz6coylBs=`
 - Endpoint: `sg01.dn42.baka.pub:<Last five digits of your ASN>`
 - Local IPv6 Link: `fe80::2999:227`
 - DN42 IPv4: `172.20.154.227`
 - DN42 IPv6: `fddf:3681:e80:227::1`

#### United States - Lycheen
 - WireGuard Public Key: `p8ADoxb0sVm1ZBp9Fkom6IaP04dm1DLrpHQLfI9HpGY=`
 - Endpoint: `us01.dn42.baka.pub:<Last five digits of your ASN>`
 - Local IPv6 Link: `fe80::2999:229`
 - DN42 IPv4: `172.20.154.229`
 - DN42 IPv6: `fddf:3681:e80:229::1`

#### United States - SCIX
 - Local IPv6 Link: `fe80::2999:230`
 - DN42 IPv4: `172.20.154.230`
 - DN42 IPv6: `fddf:3681:e80:230::1`
 - Only supports peering via IX

## China Network

Providing low-latency DN42 connectivity specifically for users in Mainland China.

### Topology

![China Network Topology](https://resource.dn42.baka.pub/China-Network.webp)

### Node List

#### Chengdu - China Telecom
 - WireGuard Public Key: `i9FzGx+f2qekg+8Dv+GqlEYrhBWEx27LeLiIWQgk2zw=`
 - Endpoint: `I will provide the specific endpoint information after receiving the email. This endpoint only supports IPv6 by default.`
 - Local IPv6 Link: `fe80::2999:233`
 - DN42 IPv4: `172.20.154.233`
 - DN42 IPv6: `fddf:3681:e80:233::1`

#### Chengdu - AKIX
 - Local IPv6 Link: `fe80::2999:234`
 - DN42 IPv4: `172.20.154.234`
 - DN42 IPv6: `fddf:3681:e80:234::1`
 - Only supports peering via IX
