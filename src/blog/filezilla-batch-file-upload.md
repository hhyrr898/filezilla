---
layout: article.njk
title: FileZilla 批量文件上传与文件夹递归传输
description: FileZilla 批量选择文件、整个文件夹递归上传与传输规则过滤的配置。
date: 2026-05-11
category: SFTP 传输
tags: ["批量传输","文件上传","SFTP传输"]
heroImage: "https://tse-mm.bing.com/th?q=FileZilla%20%E6%89%B9%E9%87%8F%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E4%B8%8E%E6%96%87%E4%BB%B6%E5%A4%B9%E9%80%92%E5%BD%92%E4%BC%A0%E8%BE%93"
heroAlt: "FileZilla 批量文件上传与文件夹递归传输 配图"
---

## 批量选择

在本地面板中按住 Ctrl 多选文件，或 Shift 选择连续范围。选中整个文件夹拖拽到远程面板即可递归上传所有子内容。

![FileZilla batch upload](https://tse-mm.bing.com/th?q=FileZilla%20batch%20file%20upload)

## 传输过滤

在传输设置中配置文件名过滤规则，排除 .git、node_modules 等无需上传的目录。可设置默认跳过或仅传输匹配项。

## 队列管理

大批量上传前检查磁盘空间与服务器配额。建议分批上传并观察队列状态，避免单次任务过多导致长时间阻塞。
