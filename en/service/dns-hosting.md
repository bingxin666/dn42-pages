# DNS Hosting Service

**High-availability Anycast DNS service provided by AS4242423374.**

We offer free DNS hosting service based on CoreDNS.

You need to contact @bakabing via Telegram or email bingxin@baka.pub in advance, stating your ASN, the DN42 domain name you need to host, and the reason for hosting. We will respond as soon as possible.

 - NS server: `anycast.baka.dn42`
 - Zone files are stored in [this GitHub repository](https://github.com/bingxin666/baka-dn42-zones).

**DNSSEC is currently not supported.**

## Onboarding Process
 - Contact me via email in advance, stating your ASN and the DN42 domain name you need to host.
 - Submit a relevant PR to the DN42 Git main repository.
 - Submit a relevant PR to the [Zone files repository](https://github.com/bingxin666/baka-dn42-zones).
 - Wait for all PRs to be approved. The service should then be available!

That's it, but please note:
 - Don't forget to update the `SOA` version each time you update your own `zones` file.
 - In most cases, changes will take effect in approximately 30 minutes. If you need it to take effect urgently, you can contact me to manually update.