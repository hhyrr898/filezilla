import fs from "node:fs/promises";
import path from "node:path";

const blogDir = path.join(process.cwd(), "src", "blog");

const articles = [
  {
    file: "filezilla-windows-install-guide.md",
    title: "FileZilla Windows 安装教程与 FTP 首次连接",
    description: "FileZilla Windows 版安装前检查、安装流程、FTP 首次连接与权限确认说明。",
    date: "2026-05-31",
    category: "Windows 客户端",
    tags: ["Windows客户端", "安装教程", "FTP连接"],
    video: true,
    body: `## 安装前检查

在 Windows 上安装 FileZilla 前，先确认系统版本、磁盘空间与网络环境。Windows 10 与 Windows 11 均可正常使用，若系统长期未更新，安装过程中可能出现运行库或权限提示。建议关闭占用网络的大型下载任务，并准备好服务器地址、端口、用户名与登录方式。

![FileZilla Windows 安装界面](https://tse-mm.bing.com/th?q=FileZilla%20Windows%20install%20screen)

## 安装步骤

下载 FileZilla Windows 安装包后，双击运行安装程序。若系统弹出安全提示，核对文件名后继续。安装路径保持默认即可，除非系统盘空间不足。安装完成后，可从桌面或开始菜单启动 FileZilla，首次打开时等待界面初始化完成。

## FTP 首次连接

打开站点管理器，新建站点并填写主机地址、端口、协议与登录类型。若使用密码登录，确认 Caps Lock 状态；若使用密钥，检查私钥路径与权限。连接成功后，先浏览远程根目录，确认文件列表正常显示。

## 常见问题

若连接超时，检查防火墙、安全组与服务器 FTP 服务状态。若中文乱码，可在传输设置中调整字符编码为 UTF-8。建议记录首次连接时的系统版本与客户端版本，便于后续排查。`
  },
  {
    file: "filezilla-macos-install-steps.md",
    title: "FileZilla macOS 安装步骤与 SFTP 拖拽传输",
    description: "FileZilla macOS 版下载安装、权限设置、SFTP 连接与拖拽文件传输操作说明。",
    date: "2026-05-30",
    category: "macOS 客户端",
    tags: ["macOS客户端", "安装教程", "SFTP传输"],
    video: true,
    body: `## 下载与安装

在 macOS 上安装 FileZilla，需从官方渠道获取对应芯片版本的安装包。Apple Silicon 与 Intel 芯片请分别选择匹配版本。下载完成后将应用拖入应用程序文件夹，首次启动时若系统提示来自未识别开发者，可在系统偏好设置中允许运行。

![FileZilla macOS 安装](https://tse-mm.bing.com/th?q=FileZilla%20macOS%20install)

## 权限与网络

macOS 可能要求授予 FileZilla 网络访问权限。若连接失败，检查系统防火墙与 VPN 设置。建议在站点管理器中保存常用服务器信息，避免每次手动输入。

## SFTP 拖拽传输

连接 SFTP 服务器后，左侧为本地目录，右侧为远程目录。选中文件或文件夹直接拖拽到目标位置即可开始传输。传输进度在底部队列面板显示，可随时暂停或取消单个任务。

## 使用建议

macOS 上建议开启被动模式以适配多数家用网络。定期更新 FileZilla 版本以获得安全补丁与新功能支持。`
  },
  {
    file: "filezilla-linux-sftp-setup.md",
    title: "FileZilla Linux 环境 SFTP 连接与目录权限配置",
    description: "FileZilla 在 Linux 桌面环境下连接 SFTP 服务器、配置密钥登录与目录权限的方法。",
    date: "2026-05-29",
    category: "Linux 环境",
    tags: ["Linux环境", "SFTP传输", "站点管理"],
    body: `## 环境准备

Linux 桌面用户可通过包管理器或官方安装包获取 FileZilla。Ubuntu 与 Fedora 等主流发行版均支持。安装完成后确认 OpenSSH 客户端可用，以便配合 SFTP 密钥认证。

![FileZilla Linux SFTP](https://tse-mm.bing.com/th?q=FileZilla%20Linux%20SFTP%20setup)

## SFTP 连接配置

在站点管理器中选择 SFTP 协议，填写主机、端口与用户名。密钥登录时指定私钥文件路径，必要时输入密钥密码。连接成功后验证远程目录读写权限。

## 目录权限

上传文件前确认目标目录具有写权限。若出现权限拒绝错误，联系服务器管理员调整目录属主或 chmod 设置。建议先在测试目录验证上传流程再操作生产环境。`
  },
  {
    file: "filezilla-ftp-connection-basics.md",
    title: "FileZilla FTP 连接基础与站点管理器入门",
    description: "FileZilla FTP 协议选择、端口设置、站点管理器新建站点与连接测试的完整入门指南。",
    date: "2026-05-28",
    category: "FTP 基础",
    tags: ["FTP连接", "站点管理", "文件上传"],
    body: `## 协议与端口

FileZilla 支持 FTP、SFTP 与 FTPS 三种主流协议。FTP 默认端口 21，SFTP 使用 SSH 端口 22，FTPS 通常使用 990 或 21 配合隐式加密。根据服务器实际配置选择对应协议。

![FileZilla FTP connection](https://tse-mm.bing.com/th?q=FileZilla%20FTP%20connection%20setup)

## 站点管理器

通过文件菜单打开站点管理器，点击新建站点并命名。填写主机、端口、协议、加密方式与登录类型。保存后可一键快速连接，无需重复输入凭据。

## 连接测试

首次连接建议先测试小文件上传与下载，确认读写权限正常。查看消息日志面板获取连接详情与错误提示，便于排查配置问题。`
  },
  {
    file: "filezilla-sftp-file-transfer.md",
    title: "FileZilla SFTP 文件传输与断点续传设置",
    description: "FileZilla SFTP 加密传输、大文件断点续传、传输模式与速度限制的实用配置方法。",
    date: "2026-05-27",
    category: "SFTP 传输",
    tags: ["SFTP传输", "文件上传", "批量传输"],
    body: `## SFTP 加密优势

SFTP 基于 SSH 协议，传输过程加密，适合传输配置文件、数据库备份等敏感数据。FileZilla 在 SFTP 模式下自动处理加密通道，用户无需额外配置证书。

![FileZilla SFTP transfer](https://tse-mm.bing.com/th?q=FileZilla%20SFTP%20file%20transfer)

## 断点续传

在传输设置中启用断点续传功能。大文件传输中断后，重新传输时 FileZilla 会从断点继续，避免重复上传已完成部分。此功能对不稳定网络环境尤为实用。

## 速度限制

可在传输设置中为上传与下载分别设置速度上限，避免占用全部带宽影响其他应用。批量传输时建议合理设置并发连接数。`
  },
  {
    file: "filezilla-ftps-secure-connection.md",
    title: "FileZilla FTPS 安全连接与 SSL 证书验证",
    description: "FileZilla FTPS 显式与隐式加密模式、SSL 证书信任与 TLS 版本选择说明。",
    date: "2026-05-26",
    category: "FTP 基础",
    tags: ["FTPS安全", "FTP连接", "证书配置"],
    body: `## FTPS 模式选择

FTPS 分为显式（Explicit）与隐式（Implicit）两种模式。显式模式先建立普通连接再升级为 TLS，隐式模式从连接起即使用加密。根据服务器支持选择对应加密类型。

![FileZilla FTPS SSL](https://tse-mm.bing.com/th?q=FileZilla%20FTPS%20SSL%20connection)

## 证书验证

首次连接 FTPS 服务器时，FileZilla 可能弹出未知证书提示。核对证书域名与颁发机构后选择信任并保存。生产环境建议使用受信任 CA 签发的证书。

## TLS 版本

在高级设置中指定最低 TLS 版本，禁用过时的 SSL 协议以提升安全性。若连接失败，尝试调整 TLS 版本或与服务器管理员确认支持的协议范围。`
  },
  {
    file: "filezilla-site-manager-configuration.md",
    title: "FileZilla 站点管理器多环境分组与快速切换",
    description: "FileZilla 站点管理器分组整理、多环境站点保存与一键切换连接的实践方法。",
    date: "2026-05-25",
    category: "站点管理",
    tags: ["站点管理", "服务器部署", "FTP连接"],
    body: `## 分组整理

站点管理器支持创建文件夹分组，可按项目、客户或环境（开发、测试、生产）归类站点。命名规范建议包含环境标识，避免误连生产服务器。

![FileZilla site manager](https://tse-mm.bing.com/th?q=FileZilla%20site%20manager%20configuration)

## 站点配置

每个站点可独立设置协议、端口、登录方式与传输模式。高级选项中可配置默认远程目录、连接超时与重试次数。保存后双击站点名即可快速连接。

## 导入导出

站点配置可导出为 XML 文件备份，便于团队共享或在重装系统后恢复。注意导出文件包含登录凭据，需妥善保管。`
  },
  {
    file: "filezilla-bookmark-quick-access.md",
    title: "FileZilla 书签功能与常用远程目录快速访问",
    description: "FileZilla 为远程目录创建书签、快速跳转与书签同步管理的操作指南。",
    date: "2026-05-24",
    category: "站点管理",
    tags: ["站点管理", "文件上传", "SFTP传输"],
    body: `## 创建书签

在远程目录面板中浏览到常用路径，通过书签菜单添加当前目录。书签可命名并关联到特定站点，连接后一键跳转无需逐级导航。

![FileZilla bookmark](https://tse-mm.bing.com/th?q=FileZilla%20bookmark%20remote%20directory)

## 书签管理

书签管理器集中显示所有已保存书签，支持编辑名称、路径与所属站点。删除不再使用的书签保持列表整洁。

## 使用场景

网站维护人员可为 wp-content、logs 等常用目录创建书签。运维人员可为各服务配置目录建立快捷入口，提升日常操作效率。`
  },
  {
    file: "filezilla-passive-mode-firewall.md",
    title: "FileZilla 被动模式配置与防火墙端口放行",
    description: "FileZilla FTP 被动模式原理、端口范围设置与防火墙规则配置详解。",
    date: "2026-05-23",
    category: "排错指南",
    tags: ["防火墙配置", "FTP连接", "被动模式"],
    body: `## 被动模式原理

FTP 被动模式下，客户端向服务器发送 PASV 命令，服务器返回数据端口供客户端连接。此模式适合客户端位于 NAT 或防火墙后的场景。

![FileZilla passive mode](https://tse-mm.bing.com/th?q=FileZilla%20passive%20mode%20firewall)

## 端口配置

在 FileZilla 传输设置中选择被动模式，必要时指定使用的端口范围。服务器端需在防火墙中放行 FTP 控制端口与被动模式数据端口范围。

## 排查步骤

若目录列表获取失败，优先检查被动模式设置。查看消息日志中的 PASV 响应，确认返回的 IP 与端口可从客户端访问。`
  },
  {
    file: "filezilla-transfer-queue-management.md",
    title: "FileZilla 传输队列管理与批量任务调度",
    description: "FileZilla 传输队列暂停恢复、任务优先级与批量文件传输的队列管理技巧。",
    date: "2026-05-22",
    category: "SFTP 传输",
    tags: ["批量传输", "文件上传", "SFTP传输"],
    body: `## 队列面板

FileZilla 底部队列面板显示所有待传输、正在传输与已完成的任务。可查看每个文件的进度、速度与剩余时间。

![FileZilla transfer queue](https://tse-mm.bing.com/th?q=FileZilla%20transfer%20queue%20management)

## 任务控制

右键队列中的任务可暂停、恢复或取消。暂停功能便于在带宽紧张时让出资源。失败任务可查看错误原因后重新加入队列。

## 批量传输

选中多个文件或文件夹拖入队列，FileZilla 按顺序或并行处理。在设置中调整最大并发传输数，平衡速度与服务器负载。`
  },
  {
    file: "filezilla-large-file-upload-tips.md",
    title: "FileZilla 大文件上传技巧与超时重试设置",
    description: "FileZilla 上传 GB 级大文件时的超时设置、断点续传与网络稳定性保障方法。",
    date: "2026-05-21",
    category: "场景实践",
    tags: ["文件上传", "断点续传", "服务器部署"],
    body: `## 超时设置

大文件上传耗时较长，默认超时可能导致连接中断。在连接设置中适当延长超时时间，或设为无超时。同时检查服务器端 FTP 空闲超时配置。

![FileZilla large file upload](https://tse-mm.bing.com/th?q=FileZilla%20large%20file%20upload)

## 断点续传

启用断点续传后，传输中断可从上次进度继续。上传前确认服务器支持 REST 命令。对于不支持断点的服务器，可考虑分卷压缩后分批上传。

## 网络稳定性

建议使用有线网络进行大文件传输。传输过程中避免休眠或切换网络。可设置传输完成后自动断开或执行自定义操作。`
  },
  {
    file: "filezilla-sync-local-remote.md",
    title: "FileZilla 本地与远程目录对比同步实践",
    description: "FileZilla 目录比较功能、文件差异识别与增量同步的操作流程。",
    date: "2026-05-20",
    category: "场景实践",
    tags: ["文件上传", "SFTP传输", "站点管理"],
    body: `## 目录比较

FileZilla 提供目录比较功能，可对比本地与远程目录中文件的名称、大小与修改时间。差异文件以不同颜色标识，便于识别需要同步的内容。

![FileZilla directory compare](https://tse-mm.bing.com/th?q=FileZilla%20directory%20compare%20sync)

## 增量同步

根据比较结果，选择性上传或下载变更文件，避免全量传输浪费带宽。适合网站代码更新、配置文件同步等场景。

## 注意事项

比较前确保两边目录结构一致。注意时区差异可能导致修改时间显示不同。重要数据同步前建议先备份远程版本。`
  },
  {
    file: "filezilla-ssh-key-sftp-login.md",
    title: "FileZilla SSH 密钥 SFTP 登录与私钥导入",
    description: "FileZilla 导入 SSH 私钥、配置 SFTP 密钥认证与安全登录的完整步骤。",
    date: "2026-05-19",
    category: "SFTP 传输",
    tags: ["SFTP传输", "密钥登录", "Linux环境"],
    body: `## 密钥格式

FileZilla 支持 PEM 格式的 OpenSSH 私钥。若密钥为 PuTTY 格式，需先转换为 OpenSSH 格式。带密码保护的私钥连接时会提示输入密钥密码。

![FileZilla SSH key SFTP](https://tse-mm.bing.com/th?q=FileZilla%20SSH%20key%20SFTP%20login)

## 站点配置

在站点管理器中选择 SFTP 协议，登录类型选密钥文件，浏览选择私钥路径。用户名填写服务器上的对应账户，无需填写密码。

## 安全建议

私钥文件权限应限制为仅所有者可读。不要将私钥存储在公共目录。定期轮换密钥并更新服务器 authorized_keys。`
  },
  {
    file: "filezilla-wordpress-site-deployment.md",
    title: "FileZilla WordPress 站点部署与主题插件上传",
    description: "FileZilla 通过 FTP 部署 WordPress 主题、插件与媒体文件的实践流程。",
    date: "2026-05-18",
    category: "场景实践",
    tags: ["WordPress", "文件上传", "FTP连接"],
    body: `## 连接 WordPress 主机

从主机面板获取 FTP 凭据，在 FileZilla 中新建站点并连接。WordPress 根目录通常包含 wp-admin、wp-content 与 wp-includes 文件夹。

![FileZilla WordPress deploy](https://tse-mm.bing.com/th?q=FileZilla%20WordPress%20site%20deployment)

## 主题与插件

上传主题到 wp-content/themes 目录，上传插件到 wp-content/plugins 目录。上传后在 WordPress 后台启用。注意保持目录结构与压缩包内一致。

## 媒体文件

批量上传媒体文件到 wp-content/uploads 对应年月目录。大文件上传前确认 PHP 与服务器上传限制。操作前备份现有文件以防覆盖错误。`
  },
  {
    file: "filezilla-encoding-utf8-fix.md",
    title: "FileZilla 中文文件名乱码与 UTF-8 编码设置",
    description: "FileZilla 传输中文文件名出现乱码时的编码设置与服务器字符集配置方法。",
    date: "2026-05-17",
    category: "排错指南",
    tags: ["编码设置", "FTP连接", "文件上传"],
    body: `## 乱码原因

FTP 协议早期使用本地编码，不同系统默认编码不一致导致中文文件名乱码。UTF-8 是跨平台通用解决方案。

![FileZilla UTF-8 encoding](https://tse-mm.bing.com/th?q=FileZilla%20UTF-8%20encoding%20fix)

## 客户端设置

在 FileZilla 设置中找到字符集选项，选择强制 UTF-8 或使用自动检测。连接后观察远程文件名是否正常显示。

## 服务器配置

若客户端设置无效，需检查服务器 FTP 服务是否启用 UTF-8 支持。vsftpd 等常见服务需在配置中开启 utf8_filesystem 选项。`
  },
  {
    file: "filezilla-connection-timeout-troubleshoot.md",
    title: "FileZilla 连接超时与无法列出目录排查",
    description: "FileZilla FTP 连接超时、无法获取目录列表的常见原因与逐步排查方法。",
    date: "2026-05-16",
    category: "排错指南",
    tags: ["FTP连接", "防火墙配置", "被动模式"],
    body: `## 超时原因

连接超时可能由网络不通、防火墙拦截、错误端口或服务器未启动 FTP 服务导致。首先 ping 服务器地址确认网络可达。

![FileZilla connection timeout](https://tse-mm.bing.com/th?q=FileZilla%20connection%20timeout%20troubleshoot)

## 目录列表失败

若连接成功但无法列出目录，多为被动模式端口未放行。检查服务器防火墙与云安全组规则。查看 FileZilla 消息日志中的详细错误码。

## 逐步排查

确认主机地址、端口、协议与登录凭据无误。尝试切换主动与被动模式。联系主机商确认 FTP 服务状态与正确连接参数。`
  },
  {
    file: "filezilla-certificate-approval.md",
    title: "FileZilla FTPS 未知证书信任与证书链验证",
    description: "FileZilla 连接 FTPS 时遇到未知证书提示的处理与安全验证流程。",
    date: "2026-05-15",
    category: "FTP 基础",
    tags: ["FTPS安全", "证书配置", "FTP连接"],
    body: `## 证书提示

首次连接使用自签名证书的 FTPS 服务器时，FileZilla 弹出证书验证对话框，显示证书指纹、有效期与颁发信息。

![FileZilla certificate approval](https://tse-mm.bing.com/th?q=FileZilla%20FTPS%20certificate%20approval)

## 验证流程

核对证书中的域名是否与连接主机一致。确认证书未过期。对于已知服务器的自签名证书，可选择信任并保存到本地证书库。

## 安全注意

不可随意信任来源不明的证书，可能存在中间人攻击风险。生产环境应使用正规 CA 签发的证书。定期更新已信任的证书列表。`
  },
  {
    file: "filezilla-multi-server-workflow.md",
    title: "FileZilla 多服务器并行管理与标签页切换",
    description: "FileZilla 同时连接多台服务器、标签页切换与跨服务器文件传输的工作流。",
    date: "2026-05-14",
    category: "站点管理",
    tags: ["站点管理", "服务器部署", "批量传输"],
    body: `## 多连接标签

FileZilla 支持在标签页中同时维持多个服务器连接。每个标签独立显示本地与远程目录，便于在多台服务器间切换操作。

![FileZilla multi server](https://tse-mm.bing.com/th?q=FileZilla%20multi%20server%20workflow)

## 跨服务器传输

虽然 FileZilla 不直接支持服务器到服务器传输，可先将文件下载到本地再上传到目标服务器。对于大量数据可考虑服务器端工具。

## 工作流建议

为每个项目创建独立标签页并命名。使用站点管理器快速打开常用连接。定期清理不再使用的标签释放资源。`
  },
  {
    file: "filezilla-directory-permissions-check.md",
    title: "FileZilla 远程目录权限检查与上传失败处理",
    description: "FileZilla 上传文件时权限拒绝错误的诊断与远程目录 chmod 权限调整思路。",
    date: "2026-05-13",
    category: "排错指南",
    tags: ["文件上传", "Linux环境", "服务器部署"],
    body: `## 权限错误

上传或创建目录时若出现 Permission denied，说明当前 FTP 用户对目标路径无写权限。需检查远程目录属主与权限位。

![FileZilla directory permissions](https://tse-mm.bing.com/th?q=FileZilla%20directory%20permissions%20check)

## 诊断方法

在 FileZilla 远程面板右键查看文件属性，部分服务器支持显示权限数字。或通过 SSH 登录服务器执行 ls -la 查看详情。

## 处理方式

联系管理员调整目录权限或属主。临时目录可设为 755，上传目录可设为 775。避免将 Web 目录设为 777 带来安全风险。`
  },
  {
    file: "filezilla-auto-reconnect-settings.md",
    title: "FileZilla 自动重连与传输中断恢复配置",
    description: "FileZilla 连接断开后自动重连、传输任务恢复与重试次数的设置方法。",
    date: "2026-05-12",
    category: "站点管理",
    tags: ["站点管理", "断点续传", "FTP连接"],
    body: `## 自动重连

FileZilla 可在连接意外断开时尝试自动重连。在连接设置中启用重连选项并设定重试次数与间隔，适合网络不稳定环境。

![FileZilla auto reconnect](https://tse-mm.bing.com/th?q=FileZilla%20auto%20reconnect%20settings)

## 传输恢复

配合断点续传功能，重连后未完成的传输任务可继续执行。队列中失败的任务可手动重试或设置自动重试。

## 配置建议

重试间隔不宜过短，避免对服务器造成压力。重要传输任务完成后检查文件完整性，如对比 MD5 校验值。`
  },
  {
    file: "filezilla-batch-file-upload.md",
    title: "FileZilla 批量文件上传与文件夹递归传输",
    description: "FileZilla 批量选择文件、整个文件夹递归上传与传输规则过滤的配置。",
    date: "2026-05-11",
    category: "SFTP 传输",
    tags: ["批量传输", "文件上传", "SFTP传输"],
    body: `## 批量选择

在本地面板中按住 Ctrl 多选文件，或 Shift 选择连续范围。选中整个文件夹拖拽到远程面板即可递归上传所有子内容。

![FileZilla batch upload](https://tse-mm.bing.com/th?q=FileZilla%20batch%20file%20upload)

## 传输过滤

在传输设置中配置文件名过滤规则，排除 .git、node_modules 等无需上传的目录。可设置默认跳过或仅传输匹配项。

## 队列管理

大批量上传前检查磁盘空间与服务器配额。建议分批上传并观察队列状态，避免单次任务过多导致长时间阻塞。`
  },
  {
    file: "filezilla-compare-directories-guide.md",
    title: "FileZilla 远程日志下载与服务器备份文件拉取",
    description: "FileZilla 从远程服务器下载日志文件、数据库备份与配置文件到本地的操作流程。",
    date: "2026-05-10",
    category: "场景实践",
    tags: ["文件上传", "服务器部署", "Linux环境"],
    body: `## 日志下载

连接服务器后导航到日志目录，常见路径如 /var/log 或网站 logs 目录。选中需要的日志文件拖拽到本地目录即可下载。

![FileZilla download logs](https://tse-mm.bing.com/th?q=FileZilla%20download%20server%20logs)

## 备份拉取

定期从服务器下载数据库备份与配置文件到本地存档。大文件下载同样支持断点续传。下载完成后验证文件大小与完整性。

## 安全提醒

下载的配置文件可能包含敏感信息，本地存储需加密或限制访问。传输过程使用 SFTP 确保数据不被窃听。`
  }
];

function frontMatter(a) {
  const tags = JSON.stringify(a.tags);
  const hero = `https://tse-mm.bing.com/th?q=${encodeURIComponent(a.title)}`;
  let fm = `---\nlayout: article.njk\ntitle: ${a.title}\ndescription: ${a.description}\ndate: ${a.date}\ncategory: ${a.category}\ntags: ${tags}\nheroImage: "${hero}"\nheroAlt: "${a.title} 配图"`;
  if (a.video) {
    fm += `\nvideoTitle: "${a.title}"\nvideoDescription: "本教程配合图文步骤，展示 ${a.title.replace("FileZilla ", "")} 的完整流程。"\nvideoPoster: "https://tse-mm.bing.com/th?q=${encodeURIComponent(a.title + " video tutorial")}"`;
  }
  fm += `\n---\n\n${a.body}\n`;
  return fm;
}

await fs.mkdir(blogDir, { recursive: true });
for (const a of articles) {
  await fs.writeFile(path.join(blogDir, a.file), frontMatter(a), "utf8");
}
console.log(`Created ${articles.length} articles.`);
