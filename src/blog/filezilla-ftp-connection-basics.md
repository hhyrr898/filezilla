---
layout: article.njk
title: FileZilla FTP 连接基础与站点管理器入门
description: FileZilla FTP 协议选择、端口设置、站点管理器新建站点与连接测试的完整入门指南。
date: 2026-05-28
category: FTP 基础
tags: ["FTP连接","站点管理","文件上传"]
heroImage: "https://tse-mm.bing.com/th?q=FileZilla%20FTP%20%E8%BF%9E%E6%8E%A5%E5%9F%BA%E7%A1%80%E4%B8%8E%E7%AB%99%E7%82%B9%E7%AE%A1%E7%90%86%E5%99%A8%E5%85%A5%E9%97%A8"
heroAlt: "FileZilla FTP 连接基础与站点管理器入门 配图"
---

## 协议与端口

FileZilla 支持 FTP、SFTP 与 FTPS 三种主流协议。FTP 默认端口 21，SFTP 使用 SSH 端口 22，FTPS 通常使用 990 或 21 配合隐式加密。根据服务器实际配置选择对应协议。

![FileZilla FTP connection](https://tse-mm.bing.com/th?q=FileZilla%20FTP%20connection%20setup)

## 站点管理器

通过文件菜单打开站点管理器，点击新建站点并命名。填写主机、端口、协议、加密方式与登录类型。保存后可一键快速连接，无需重复输入凭据。

## 连接测试

首次连接建议先测试小文件上传与下载，确认读写权限正常。查看消息日志面板获取连接详情与错误提示，便于排查配置问题。
