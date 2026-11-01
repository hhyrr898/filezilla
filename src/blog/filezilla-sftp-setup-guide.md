---
noindex: true
layout: article.njk
title: "FileZilla SFTP 连接配置实操：密钥与指纹篇"
description: "以 2024 年 12 月发布的 FileZilla Client 3.68.1 为例，演示如何建立 SFTP 连接、生成并导入密钥、核对首连接指纹，以及私钥权限、指纹变更等常见问题的处理思路。"
date: 2026-11-01
featured: true
category: "使用教程"
tags: ["教程", "文件传输"]
permalink: /blog/filezilla-sftp-setup-guide/
---

最近帮同事配置服务器，我拦住了他直接在 FileZilla 里用 21 端口连普通 FTP 的操作。跨公网传文件时，普通 FTP 的账号密码和数据全走明文，这种做法存在极大的被窃听和篡改隐患。

这篇文章解决跨公网传输文件时凭证与数据明文泄露的风险问题，看完你能将 FileZilla 的连接方式改为走 SSH 通道的 22 端口 SFTP，并按步骤独立完成密钥认证与服务器指纹校验的配置实操。

这篇就以我手头的 FileZilla Client 3.68.1（2024 年 12 月发布）为例，把 SFTP 连接、密钥配置和指纹核对的流程写清楚。装软件的部分可以对照 [FileZilla 官方下载指南](/blog/filezilla-download-official-guide/)，注意只从 filezilla-project.org 下载，这个软件是 GPL 开源免费的，没有所谓收费版。

## 第一步：确认协议并填写连接信息

### 协议选 SFTP - SSH File Transfer Protocol

打开站点管理器（文件 → 站点管理器），新建站点。关键是“协议”下拉框要选 **SFTP - SSH File Transfer Protocol**，不要留在 FTP。选好以后端口会自动变成 22，如果你的 SSH 服务改了端口，这里也要跟着改。

我吃过一次亏：协议忘了切换，端口填 22，结果一直停在“正在连接”，排查半天才发现是协议错了。这类情况在 [连接失败排查](/blog/filezilla-connection-failed-troubleshooting/) 那篇里也有类似案例。

### 登录类型先选“询问密码”

第一次连接，我建议登录类型先选“询问密码”，确认真能连上，再换密钥。主机填 IP 或域名，用户填 SSH 账号，点“连接”。出现“未知主机密钥”的提示属于正常现象，下面第五节专门说。

## 第二步：生成或准备一对密钥

FileZilla 本身不生成密钥，这一步得用命令行或别的工具。我在 Windows 上用 PowerShell 的 ssh-keygen：

```
ssh-keygen -t ed25519 -C "filezilla-sftp"
```

一路回车，公钥私钥会落在 `C:\Users\你的用户名\.ssh\` 下。私钥是 `id_ed25519`，公钥是 `id_ed25519.pub`。

然后把公钥内容追加到服务器上的 `~/.ssh/authorized_keys`。这一步用密码先登一次 SFTP，或者让运维同学帮忙加，都行。

### 私钥格式要注意

FileZilla 对 OpenSSH 新格式（以 `-----BEGIN OPENSSH PRIVATE KEY-----` 开头）的支持从 3.x 中后期版本开始就没问题了，3.68.1 可以直接用。如果是老的 PuTTY 格式 `.ppk`，需要先在 PuTTYgen 里转换，或者在 FileZilla 里选对应格式导入。

## 第三步：在站点管理器里挂上密钥

回到站点管理器，把“登录类型”改成“密钥文件”，点“浏览”选中私钥 `id_ed25519`。FileZilla 会问你要不要把它复制到配置目录，我一般选“否”，保留原路径引用，方便统一管理。

### 文件权限别偷懒

Linux 服务器对私钥权限很敏感，`authorized_keys` 建议 600，`.ssh` 目录 700。权限不对，SSH 会直接拒绝，FileZilla 这边只会报“认证失败”，看不出根因。我第一次配就卡在这里，后来看服务器 auth 日志才明白。

配置好的站点建议存成书签，下次一点就进，具体做法见 [书签快速访问](/blog/filezilla-bookmark-quick-access/)。想了解 SFTP 的完整配置链路，也可以看 [SFTP 配置指南](/blog/filezilla-sftp-setup-guide/)。

## 第四步：首次连接核对主机指纹

连上去那一刻，FileZilla 会弹窗显示服务器的 SSH 主机密钥指纹，问是否信任。**别直接点确定**。

我会先在服务器上跑：

```
ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub
```

把输出的指纹和弹窗里的对比，一致才勾选“始终信任此主机，将密钥添加到缓存”。指纹对不上，要么连错机器，要么中间有人。这一步的详细处理可以看 [证书批准流程](/blog/filezilla-certificate-approval/)。

## 常见问题

### 问：提示“服务器发回了不可路由的地址”，怎么办？

一般是服务器被动模式返回了内网 IP。SFTP 走 SSH，理论上不受这条影响；如果你是在 FTP over TLS 下看到这个报错，去站点设置里把传输模式改成主动，或者让服务端配置公网地址。

### 问：密钥明明对，还是认证失败？

按顺序查三件事：私钥权限是否过宽、`authorized_keys` 权限和属主是否正确、服务端 `sshd_config` 里 `PubkeyAuthentication` 是否为 yes。另外确认你选的私钥是公钥对应的那一半。

### 问：换服务器后指纹变了，正常吗？

重装系统或换机器，主机密钥会重新生成，指纹变化是正常的。但如果你没动过服务器，指纹却变了，要警惕。处理方法是去站点管理器里清掉缓存的主机密钥，再重新核对一次。

### 问：连接老超时，是密钥的问题吗？

不一定。先看是握手阶段超时还是传输阶段超时。握手超时多半是防火墙或端口问题，可以对照 [连接超时排查](/blog/filezilla-connection-timeout-troubleshoot/) 一步步缩小范围。

## 我踩过的两个小坑

第一个是路径。FileZilla 默认把密钥复制到配置目录，路径里带用户名和空格，换电脑迁移配置时容易断链。后来我统一把私钥放在固定目录，配置里只写绝对路径。

第二个是重连。长时间挂着的会话断了，FileZilla 不会自动重连，得手动点。我把自动重连打开了，配置方法在 [自动重连设置](/blog/filezilla-auto-reconnect-settings/)。顺带说一句，批量传文件时 [批量上传](/blog/filezilla-batch-file-upload/) 配合书签一起用，效率会高不少。

密钥配好以后，SFTP 连接其实很省心。关键是首次连接别跳过指纹核对，这一步花三十秒，能省掉后面一堆麻烦。
