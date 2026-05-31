---
layout: article.njk
title: FileZilla 远程目录权限检查与上传失败处理
description: FileZilla 上传文件时权限拒绝错误的诊断与远程目录 chmod 权限调整思路。
date: 2026-05-13
category: 排错指南
tags: ["文件上传","Linux环境","服务器部署"]
heroImage: "https://tse-mm.bing.com/th?q=FileZilla%20%E8%BF%9C%E7%A8%8B%E7%9B%AE%E5%BD%95%E6%9D%83%E9%99%90%E6%A3%80%E6%9F%A5%E4%B8%8E%E4%B8%8A%E4%BC%A0%E5%A4%B1%E8%B4%A5%E5%A4%84%E7%90%86"
heroAlt: "FileZilla 远程目录权限检查与上传失败处理 配图"
---

## 权限错误

上传或创建目录时若出现 Permission denied，说明当前 FTP 用户对目标路径无写权限。需检查远程目录属主与权限位。

![FileZilla directory permissions](https://tse-mm.bing.com/th?q=FileZilla%20directory%20permissions%20check)

## 诊断方法

在 FileZilla 远程面板右键查看文件属性，部分服务器支持显示权限数字。或通过 SSH 登录服务器执行 ls -la 查看详情。

## 处理方式

联系管理员调整目录权限或属主。临时目录可设为 755，上传目录可设为 775。避免将 Web 目录设为 777 带来安全风险。
