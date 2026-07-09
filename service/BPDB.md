# BPDB

> 哔——哔——
>
> 欢迎回到千禧年！

::: warning 警告
此服务可能处于测试阶段，可能会有不稳定的情况，并且随时可能引入破坏性更新。
:::

BPDB (Baka.Pub Database) 是一个用于管理 AS-SET 对象的 **DN42 第三方数据库**，以简化 AS-SET 的注册和维护流程。

*请注意：此项目与 dn42-registry 无直接关联，任何提交都不会自动反映在 DN42 注册表中。*

## 通过 Pull Request 提交

通过我们的 [Git 仓库](https://git.dn42.dev/BPDB/BPDB) 提交 Pull Request 可能是最简单的方式来注册或更新 AS-SET 对象。

首次新增 AS-SET 对象时，位于 Pull Request 评论区的机器人会指引你完成注册流程。

修改现有 AS-SET 对象时，我们强烈建议使用和您的 NOC 对象的相关 SSH/GPG 密钥签名 Commit，以便我们可以验证您的身份。否则，位于 Pull Request 评论区的机器人会指引你完成身份验证流程。

AS-SET 的格式与 [dn42-registry](https://git.dn42.dev/dn42/registry) 中的格式相同。

另请访问：[BPDB in DN42 Git](https://git.dn42.dev/BPDB/BPDB)

## 通过 auto-dbm 邮件提交

通过向以下邮箱地址发送邮件也可以注册或更新 AS-SET 对象：
 - auto-dbm@x.dn42
 - auto-dbm@dn42.baka.pub

### 邮件格式

我们**强制要求**使用纯文本格式发送邮件。

#### 创建 AS-SET

邮件标题：`NEW`

邮件正文：使用 GPG/SSH 签名的完整 RPSL AS-SET 内容。

必填字段：
 - `as-set`：AS-SET 名称
 - `descr`：AS-SET 描述
 - `mnt-by`：维护者对象
 - `source`：数据源，必须为 `BPDB`

可选字段：
 - `members`：AS-SET 成员列表
 - `mbrs-by-ref`：引用维护者
 - `admin-c`：管理员联系人
 - `tech-c`：技术联系人
 - `remarks`：备注信息

示例（签名前）：

```
as-set: AS4242420604:AS-TEST
descr: My test AS-SET
mnt-by: EXAMPLE-MNT
source: BPDB
members: AS4242420604
admin-c: EXADM-DN42
tech-c: EXTECH-DN42
```

#### 更新 AS-SET

邮件标题：`UPDATE`

邮件正文：使用 GPG/SSH 签名的完整 RPSL AS-SET 内容。

其他内容与创建 AS-SET 相同。

#### 删除 AS-SET

邮件标题：`DELETE`

邮件正文：使用 GPG/SSH 签名的完整 RPSL AS-SET 内容，或仅是 AS-SET 名称。

### 签名格式

对于 GPG 签名，请使用 `gpg --clearsign` 命令生成签名。

随后，将签名后的内容（含 header 和 signature 所有行）原样粘贴到邮件正文中。

---

对于 SSH 签名，请使用 `ssh-keygen -Y sign -f <private_key> -n rpsl` 命令生成签名。

随后，将签名后的内容复制到邮件正文中，如：

```
as-set: AS4242420604:AS-TEST
descr: My test AS-SET
mnt-by: EXAMPLE-MNT
source: BPDB
-----BEGIN SSH SIGNATURE-----
U1NI...（签名内容）
-----END SSH SIGNATURE-----
```