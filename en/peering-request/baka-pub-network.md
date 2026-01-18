# Baka.Pub Network (AS214933)

::: warning Note
This page only contains information about Baka.Pub Network within the DN42 network. For more information about Baka.Pub Network, see [Net.Baka.Pub](https://net.baka.pub/).
:::

# Baka.Pub IX

## Peering Request

::: tip Note
When connecting to Baka.Pub IX you must establish a valid BGP session with RS1.

Connections to other route servers are optional.
:::

### Project Hong Kong

#### Location
 - Hong Kong, China

#### Access Method
 - ZeroTier

#### Route Server Information
 - RS1: AS214933 - fddf:3681:e80:a100::21:4933:1 - accepts and forwards Peering routes only
 - RS2: AS214933 - fddf:3681:e80:a100::21:4933:2 - accepts and forwards full-table routes

#### Requirements
 - Hold a valid DN42 ASN.
 - Implement ROA validation.
 - Latency to the route servers must be below 5 ms.

### Project Singapore

TBD.

### Project Shanghai

#### Location
 - Shanghai, China

#### Access Method
 - WireGuard (recommended)
 - GREv6
 - ZeroTier

#### Route Server Information
 - RS1: AS214933 - fddf:3681:e80:a200::21:4933:1 - accepts and forwards Peering routes only
 - RS2: AS214933 - fddf:3681:e80:a200::21:4933:2 - accepts and forwards full-table routes
 - RS3: AS214933 - fddf:3681:e80:a200::21:4933:3 - accepts and forwards routes with specific communities only

#### Requirements
 - Hold a valid DN42 ASN.
 - Implement ROA validation.
 - Latency to the route servers must be below 20 ms.