# DNS 托管服务

**由 AS4242423374 提供的高可用 Anycast DNS 提供服务。**

我们提供免费的 DNS 托管服务，基于 CoreDNS。

您需要事先通过 Telegram 联系 @bakabing 或是通过电子邮件联系 bingxin@baka.pub，说明您的 ASN、需要托管的 DN42 域名和托管原因，随后我们会尽快回复。

 - NS 服务器为：`anycast.baka.dn42`
 - Zones 文件存储在 [此 Github 仓库](https://github.com/bingxin666/baka-dn42-zones)。

**暂不支持 DNSSEC 的接入。**

## 接入流程
 - 您通过邮件事先联系我说明您的 ASN 和需要托管的 DN42 域名。
 - 您在 DN42 Git 主仓库提交相关 PR
 - 您在 [Zones 文件仓库](https://github.com/bingxin666/baka-dn42-zones) 提交相关 PR。
 - 等待 PR 全部通过，此时服务应当可用了！

就是这样，但需要注意：
 - 在每次更新您自己的 `zones` 文件时请不要忘记更新 `SOA` 版本。
 - 大多数情况下会在约 30 分钟左右生效，如果您急须生效，可以选择联系我手动更新。