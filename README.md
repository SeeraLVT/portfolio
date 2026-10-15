# 李想 · 个人作品集

基于 React + Vite 的个人作品集网站，作品素材从提供的简历、作品文稿和作品集视频中整理而来。

## 本地预览

需要安装 Node.js。首次运行在项目目录执行：

```bash
npm install
npm run dev
```

终端会显示本地预览地址。生成静态发布版本可运行 `npm run build`，产物在 `dist/`。

## 发布到 GitHub Pages

项目已包含 GitHub Actions 自动部署配置。将整个项目上传到 GitHub 仓库并推送到 `main` 分支，然后在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。每次推送到 `main` 后，GitHub 会自动安装依赖、构建 `dist/` 并部署网站。首次部署完成后，可在 Settings → Pages 查看访问链接。

`vite.config.js` 会根据仓库名自动设置 GitHub Pages 所需的资源路径。

首页视频会静音循环播放；项目卡片可点击查看原作品图片。联系方式直接使用简历中提供的邮箱和电话。
