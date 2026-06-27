---
layout: article.njk
title: FileZilla 连接超时与无法列出目录排查
description: FileZilla FTP 连接超时、无法获取目录列表的常见原因与逐步排查方法。
date: 2026-05-16
updated: 2026-06-27
category: 排错指南
tags: ["FTP连接","防火墙配置","被动模式"]
heroImage: "https://tse-mm.bing.com/th?q=FileZilla%20%E8%BF%9E%E6%8E%A5%E8%B6%85%E6%97%B6%E4%B8%8E%E6%97%A0%E6%B3%95%E5%88%97%E5%87%BA%E7%9B%AE%E5%BD%95%E6%8E%92%E6%9F%A5"
heroAlt: "FileZilla 连接超时与无法列出目录排查 配图"
---

## 超时原因

连接超时可能由网络不通、防火墙拦截、错误端口或服务器未启动 FTP 服务导致。首先确认主机地址、端口、协议和用户名没有写错，再判断网络是否可达。

`ping` 不通不一定代表 FTP 不能连，因为部分服务器会禁 ICMP。更可靠的方式是用 FileZilla 消息日志、主机商控制台或服务器防火墙规则一起判断。

![FileZilla connection timeout](https://tse-mm.bing.com/th?q=FileZilla%20connection%20timeout%20troubleshoot)

## 目录列表失败

若连接成功但无法列出目录，多为被动模式端口未放行。检查服务器防火墙与云安全组规则。查看 FileZilla 消息日志中的详细错误码。

典型表现是账号能登录，但停在“正在读取目录列表”。这时重点检查 FTP 服务端的被动端口范围，以及云服务器安全组是否放行同一范围。

## 逐步排查

确认主机地址、端口、协议与登录凭据无误。尝试切换主动与被动模式。联系主机商确认 FTP 服务状态与正确连接参数。

排查顺序建议固定为：先看本地网络，再看服务器端口，再看 FileZilla 日志，最后再调整传输模式。一次只改一个设置，才能知道是哪一步解决了问题。
