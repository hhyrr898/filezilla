---
layout: article.njk
title: FileZilla 中文文件名乱码与 UTF-8 编码设置
description: FileZilla 传输中文文件名出现乱码时的编码设置与服务器字符集配置方法。
date: 2026-05-17
category: 排错指南
tags: ["编码设置","FTP连接","文件上传"]
heroImage: "https://tse-mm.bing.com/th?q=FileZilla%20%E4%B8%AD%E6%96%87%E6%96%87%E4%BB%B6%E5%90%8D%E4%B9%B1%E7%A0%81%E4%B8%8E%20UTF-8%20%E7%BC%96%E7%A0%81%E8%AE%BE%E7%BD%AE"
heroAlt: "FileZilla 中文文件名乱码与 UTF-8 编码设置 配图"
---

## 乱码原因

FTP 协议早期使用本地编码，不同系统默认编码不一致导致中文文件名乱码。UTF-8 是跨平台通用解决方案。

![FileZilla UTF-8 encoding](https://tse-mm.bing.com/th?q=FileZilla%20UTF-8%20encoding%20fix)

## 客户端设置

在 FileZilla 设置中找到字符集选项，选择强制 UTF-8 或使用自动检测。连接后观察远程文件名是否正常显示。

## 服务器配置

若客户端设置无效，需检查服务器 FTP 服务是否启用 UTF-8 支持。vsftpd 等常见服务需在配置中开启 utf8_filesystem 选项。
