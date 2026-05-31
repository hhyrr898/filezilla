---
layout: article.njk
title: FileZilla FTPS 未知证书信任与证书链验证
description: FileZilla 连接 FTPS 时遇到未知证书提示的处理与安全验证流程。
date: 2026-05-15
category: FTP 基础
tags: ["FTPS安全","证书配置","FTP连接"]
heroImage: "https://tse-mm.bing.com/th?q=FileZilla%20FTPS%20%E6%9C%AA%E7%9F%A5%E8%AF%81%E4%B9%A6%E4%BF%A1%E4%BB%BB%E4%B8%8E%E8%AF%81%E4%B9%A6%E9%93%BE%E9%AA%8C%E8%AF%81"
heroAlt: "FileZilla FTPS 未知证书信任与证书链验证 配图"
---

## 证书提示

首次连接使用自签名证书的 FTPS 服务器时，FileZilla 弹出证书验证对话框，显示证书指纹、有效期与颁发信息。

![FileZilla certificate approval](https://tse-mm.bing.com/th?q=FileZilla%20FTPS%20certificate%20approval)

## 验证流程

核对证书中的域名是否与连接主机一致。确认证书未过期。对于已知服务器的自签名证书，可选择信任并保存到本地证书库。

## 安全注意

不可随意信任来源不明的证书，可能存在中间人攻击风险。生产环境应使用正规 CA 签发的证书。定期更新已信任的证书列表。
