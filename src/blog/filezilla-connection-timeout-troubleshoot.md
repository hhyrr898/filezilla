---
layout: article.njk
title: FileZilla 连接超时与无法列出目录排查
description: FileZilla FTP 连接超时、无法获取目录列表的常见原因与逐步排查方法。
date: 2026-05-16
category: 排错指南
tags: ["FTP连接","防火墙配置","被动模式"]
heroImage: "https://tse-mm.bing.com/th?q=FileZilla%20%E8%BF%9E%E6%8E%A5%E8%B6%85%E6%97%B6%E4%B8%8E%E6%97%A0%E6%B3%95%E5%88%97%E5%87%BA%E7%9B%AE%E5%BD%95%E6%8E%92%E6%9F%A5"
heroAlt: "FileZilla 连接超时与无法列出目录排查 配图"
---

## 超时原因

连接超时可能由网络不通、防火墙拦截、错误端口或服务器未启动 FTP 服务导致。首先 ping 服务器地址确认网络可达。

![FileZilla connection timeout](https://tse-mm.bing.com/th?q=FileZilla%20connection%20timeout%20troubleshoot)

## 目录列表失败

若连接成功但无法列出目录，多为被动模式端口未放行。检查服务器防火墙与云安全组规则。查看 FileZilla 消息日志中的详细错误码。

## 逐步排查

确认主机地址、端口、协议与登录凭据无误。尝试切换主动与被动模式。联系主机商确认 FTP 服务状态与正确连接参数。
