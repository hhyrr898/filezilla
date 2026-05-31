---
layout: article.njk
title: FileZilla WordPress 站点部署与主题插件上传
description: FileZilla 通过 FTP 部署 WordPress 主题、插件与媒体文件的实践流程。
date: 2026-05-18
category: 场景实践
tags: ["WordPress","文件上传","FTP连接"]
heroImage: "https://tse-mm.bing.com/th?q=FileZilla%20WordPress%20%E7%AB%99%E7%82%B9%E9%83%A8%E7%BD%B2%E4%B8%8E%E4%B8%BB%E9%A2%98%E6%8F%92%E4%BB%B6%E4%B8%8A%E4%BC%A0"
heroAlt: "FileZilla WordPress 站点部署与主题插件上传 配图"
---

## 连接 WordPress 主机

从主机面板获取 FTP 凭据，在 FileZilla 中新建站点并连接。WordPress 根目录通常包含 wp-admin、wp-content 与 wp-includes 文件夹。

![FileZilla WordPress deploy](https://tse-mm.bing.com/th?q=FileZilla%20WordPress%20site%20deployment)

## 主题与插件

上传主题到 wp-content/themes 目录，上传插件到 wp-content/plugins 目录。上传后在 WordPress 后台启用。注意保持目录结构与压缩包内一致。

## 媒体文件

批量上传媒体文件到 wp-content/uploads 对应年月目录。大文件上传前确认 PHP 与服务器上传限制。操作前备份现有文件以防覆盖错误。
