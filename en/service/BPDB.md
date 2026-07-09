# BPDB

> Beep——Beep——
>
> Welcome back to the Millennium!

::: warning Warning
This service may be in the testing phase, may be unstable, and may introduce breaking changes at any time.
:::

BPDB (Baka.Pub Database) is a **third-party DN42 database** for managing AS-SET objects, designed to simplify the registration and maintenance of AS-SETs.

*Note: This project is not directly related to dn42-registry; any submissions will not be automatically reflected in the DN42 registry.*

## Submitting via Pull Request

Submitting a Pull Request through our [Git repository](https://git.dn42.dev/BPDB/BPDB) is probably the simplest way to register or update AS-SET objects.

When adding a new AS-SET object for the first time, a bot in the Pull Request comments will guide you through the registration process.

When modifying an existing AS-SET object, we strongly recommend signing your commits with the relevant SSH/GPG keys associated with your NOC object so we can verify your identity. Otherwise, the bot in the Pull Request comments will guide you through the identity verification process.

The format of AS-SET is identical to that used in [dn42-registry](https://git.dn42.dev/dn42/registry).

Also visit: [BPDB in DN42 Git](https://git.dn42.dev/BPDB/BPDB)

## Submitting via auto-dbm email

You can also register or update AS-SET objects by sending an email to the following addresses:
 - auto-dbm@x.dn42
 - auto-dbm@dn42.baka.pub

### Email Format

We **strictly require** plain text format for emails.

#### Creating an AS-SET

Email subject: `NEW`

Email body: The complete RPSL AS-SET content signed with GPG/SSH.

Required fields:
 - `as-set`: AS-SET name
 - `descr`: AS-SET description
 - `mnt-by`: maintainer object
 - `source`: data source, must be `BPDB`

Optional fields:
 - `members`: list of AS-SET members
 - `mbrs-by-ref`: referenced maintainer
 - `admin-c`: administrative contact
 - `tech-c`: technical contact
 - `remarks`: remarks

Example (before signing):

```
as-set: AS4242420604:AS-TEST
descr: My test AS-SET
mnt-by: EXAMPLE-MNT
source: BPDB
members: AS4242420604
admin-c: EXADM-DN42
tech-c: EXTECH-DN42
```

#### Updating an AS-SET

Email subject: `UPDATE`

Email body: The complete RPSL AS-SET content signed with GPG/SSH.

Other content is the same as creating an AS-SET.

#### Deleting an AS-SET

Email subject: `DELETE`

Email body: The complete RPSL AS-SET content signed with GPG/SSH, or just the AS-SET name.

### Signature Format

For GPG signatures, please use the `gpg --clearsign` command to generate the signature.

Then, paste the signed content (including all header and signature lines) as-is into the email body.

---

For SSH signatures, please use the `ssh-keygen -Y sign -f <private_key> -n rpsl` command to generate the signature.

Then, copy the signed content into the email body, for example:

```
as-set: AS4242420604:AS-TEST
descr: My test AS-SET
mnt-by: EXAMPLE-MNT
source: BPDB
-----BEGIN SSH SIGNATURE-----
U1NI... (signature content)
-----END SSH SIGNATURE-----
```