# Baka.Pub Network (AS214933)

::: warning 注意事项
此处仅包含 Baka.Pub Network 在 DN42 网络中的相关信息。有关 Baka.Pub Network 的更多信息，请参阅 [Net.Baka.Pub](https://net.baka.pub/)。
:::

# Baka.Pub IX

## 对等连接请求

::: tip 注意事项
当接入 Baka.Pub IX 时，您必须同 RS1 建立有效的 BGP Session。

对于其他 RS，均为可选连接。
:::

### Project Hong Kong

#### 地点
 - 中国香港

#### 接入方式
 - ZeroTier

#### 路由服务器信息
 - RS1: AS214933 - fddf:3681:e80:a100::21:4933:1 - 仅接受和转发 Peering 路由
 - RS2: AS214933 - fddf:3681:e80:a100::21:4933:2 - 接受和转发全表路由

#### 要求
 - 拥有一个有效的 DN42 ASN。
 - 实施有效的 ROA 验证。
 - 与路由服务器的延迟低于 5ms。

### Project Singapore

待定。

### Project Shanghai

#### 地点
 - 中国上海

#### 接入方式
 - WireGuard（推荐）
 - GREv6
 - ZeroTier
 - IXVM（仅受邀用户）

#### 路由服务器信息
 - RS1: AS214933 - fddf:3681:e80:a200::21:4933:1 - 仅接受和转发 Peering 路由
 - RS2: AS214933 - fddf:3681:e80:a200::21:4933:2 - 接受和转发全表路由
 - RS3: AS214933 - fddf:3681:e80:a200::21:4933:3 - 仅接受和转发具有特定 community 的路由

#### 要求
 - 拥有一个有效的 DN42 ASN。
 - 实施有效的 ROA 验证。
 - 与路由服务器的延迟低于 20ms。
 - IXVM 仅对受邀用户开放。