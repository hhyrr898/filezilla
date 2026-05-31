---
layout: article.njk
title: FileZilla 被动模式配置与防火墙端口放行
description: FileZilla FTP 被动模式原理、端口范围设置与防火墙规则配置详解。
date: 2026-05-23
category: 排错指南
tags: ["防火墙配置","FTP连接","被动模式"]
heroImage: "https://tse-mm.bing.com/th?q=FileZilla%20%E8%A2%AB%E5%8A%A8%E6%A8%A1%E5%BC%8F%E9%85%8D%E7%BD%AE%E4%B8%8E%E9%98%B2%E7%81%AB%E5%A2%99%E7%AB%AF%E5%8F%A3%E6%94%BE%E8%A1%8C"
heroAlt: "FileZilla 被动模式配置与防火墙端口放行 配图"
---

## 被动模式原理

FTP 被动模式下，客户端向服务器发送 PASV 命令，服务器返回数据端口供客户端连接。此模式适合客户端位于 NAT 或防火墙后的场景。

![FileZilla passive mode](https://tse-mm.bing.com/th?q=FileZilla%20passive%20mode%20firewall)

## 端口配置

在 FileZilla 传输设置中选择被动模式，必要时指定使用的端口范围。服务器端需在防火墙中放行 FTP 控制端口与被动模式数据端口范围。

## 排查步骤

若目录列表获取失败，优先检查被动模式设置。查看消息日志中的 PASV 响应，确认返回的 IP 与端口可从客户端访问。
