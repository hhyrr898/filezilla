---
layout: article.njk
title: FileZilla SSH 密钥 SFTP 登录与私钥导入
description: FileZilla 导入 SSH 私钥、配置 SFTP 密钥认证与安全登录的完整步骤。
date: 2026-05-19
category: SFTP 传输
tags: ["SFTP传输","密钥登录","Linux环境"]
heroImage: "https://tse-mm.bing.com/th?q=FileZilla%20SSH%20%E5%AF%86%E9%92%A5%20SFTP%20%E7%99%BB%E5%BD%95%E4%B8%8E%E7%A7%81%E9%92%A5%E5%AF%BC%E5%85%A5"
heroAlt: "FileZilla SSH 密钥 SFTP 登录与私钥导入 配图"
---

## 密钥格式

FileZilla 支持 PEM 格式的 OpenSSH 私钥。若密钥为 PuTTY 格式，需先转换为 OpenSSH 格式。带密码保护的私钥连接时会提示输入密钥密码。

![FileZilla SSH key SFTP](https://tse-mm.bing.com/th?q=FileZilla%20SSH%20key%20SFTP%20login)

## 站点配置

在站点管理器中选择 SFTP 协议，登录类型选密钥文件，浏览选择私钥路径。用户名填写服务器上的对应账户，无需填写密码。

## 安全建议

私钥文件权限应限制为仅所有者可读。不要将私钥存储在公共目录。定期轮换密钥并更新服务器 authorized_keys。
