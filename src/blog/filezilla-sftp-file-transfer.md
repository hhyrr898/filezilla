---
layout: article.njk
title: FileZilla SFTP 文件传输与断点续传设置
description: FileZilla SFTP 加密传输、大文件断点续传、传输模式与速度限制的实用配置方法。
date: 2026-05-27
updated: 2026-06-27
category: SFTP 传输
tags: ["SFTP传输","文件上传","批量传输"]
heroImage: "https://tse-mm.bing.com/th?q=FileZilla%20SFTP%20%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93%E4%B8%8E%E6%96%AD%E7%82%B9%E7%BB%AD%E4%BC%A0%E8%AE%BE%E7%BD%AE"
heroAlt: "FileZilla SFTP 文件传输与断点续传设置 配图"
---

## SFTP 加密优势

SFTP 基于 SSH 协议，传输过程加密，适合传输配置文件、数据库备份等敏感数据。FileZilla 在 SFTP 模式下自动处理加密通道，用户无需额外配置证书。

连接前要确认服务器开放的是 SSH/SFTP 端口，常见为 22，也可能由主机商改成其他端口。若使用密钥登录，先确认私钥格式和服务器用户名是否匹配。

![FileZilla SFTP transfer](https://tse-mm.bing.com/th?q=FileZilla%20SFTP%20file%20transfer)

## 断点续传

在传输设置中启用断点续传功能。大文件传输中断后，重新传输时 FileZilla 会从断点继续，避免重复上传已完成部分。此功能对不稳定网络环境尤为实用。

上传前可以先看远程目录剩余空间和目标文件权限。若远程已有同名文件，FileZilla 会提示覆盖、跳过或续传，处理生产文件时建议先备份再覆盖。

## 速度限制

可在传输设置中为上传与下载分别设置速度上限，避免占用全部带宽影响其他应用。批量传输时建议合理设置并发连接数。

如果传输队列里频繁出现失败文件，不要只点“全部重试”。先打开消息日志，看是权限拒绝、磁盘空间不足、连接超时，还是文件名编码问题，再决定是否重传。
