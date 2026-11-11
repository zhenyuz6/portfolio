# 工程作品集 · GitHub Pages 发布指南

这个网站包含两项科研和七项课程与工程项目的名称。已包含 ECE 385、ECE 420 和 ECE 484 的项目说明及配图。网站使用普通 HTML、CSS 和 JavaScript，解压后可直接预览。

## 一、本地预览

1. 下载并解压 ZIP。
2. 双击解压出来的 `index.html`，用 Chrome 或 Edge 打开。
3. 点击左侧或顶部目录中的项目名称，检查是否跳转到对应项目。
4. 点 **Print / Save as PDF**，在打印对话框选择 **另存为 PDF**。纸张建议选 **Letter**，关闭浏览器的 **页眉和页脚**。打印范围选全部，九个项目会一次导出。

## 二、发布到你自己的 GitHub

1. 登录 GitHub，打开 [新建仓库](https://github.com/new)。
2. 仓库名称填写 `portfolio`，选择 **Public**。勾选或打开 **Add README** 初始化仓库，点 **Create repository**。初始化会创建可供上传的默认分支。
3. 进入仓库 **Code** 页，点击 **Add file → Upload files**。
4. 从解压目录拖入 `index.html`、`styles.css`、`portfolio-data.js`、`portfolio.js` 、`README.md` 以及 `assets` 文件夹。上传解压后的文件，网站入口 `index.html` 应与仓库里的 README 同层。输入提交说明，选择直接提交到默认分支，然后点 **Commit changes**。上传的 README 会替换初始化时的 README。
5. 打开仓库 **Settings → Pages**。在 **Build and deployment** 中将 **Source** 设为 **Deploy from a branch**。分支选择 `main`（或实际默认分支），目录选择 **/(root)**，点 **Save**。
6. 在仓库的 **Actions** 页查看部署是否成功。成功后返回 **Settings → Pages**，点击 **Visit site**。如果仓库名是 `portfolio`，网址通常为 `https://你的GitHub用户名.github.io/portfolio/`。
7. 在无痕窗口打开这个网址，确认项目目录能访问。公开仓库里的文件也可被他人看到，请在上传科研图片和数据前确认可公开。

GitHub 官方说明：[上传文件](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository) · [设置 Pages 发布源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 三、以后补充正文和图片

- 网站姓名、简介、项目名及正文集中在 `portfolio-data.js`。搜索对应项目的 `id` 或英文名称，填写 `summary`、`design`、`results`、`figures` 和 `links`。这些字段可以独立补充，空字段会自动隐藏。
- 图片可放进自己创建的 `assets` 文件夹。路径使用 `./assets/文件名.png` 这样的相对地址。上传时保留 `assets` 文件夹及文件名大小写。
- 如果要放网页视频，可以在 `links` 里添加演示链接，并在 `figures` 里提供关键帧，方便 PDF 阅读。
- 已经发布过初版的仓库，可更新 `portfolio-data.js`、`portfolio.js`、`styles.css`，并将 `assets` 文件夹拖到仓库根目录。
- 每次更新后提交替换的文件，GitHub Pages 会从发布分支重新部署。用本地预览或线上打印预览检查新图和新文字的分页。

下面是字段格式示例，用自己的英文内容替换引号内的说明：

```js
summary: "Describe what the project does and why it matters.",
design: [
  "Explain how the system is implemented and what techniques it uses."
],
results: "Report a measured or simulated outcome and its current status.",
figures: [
  {
    src: "./assets/example.png",
    alt: "Describe what the image shows.",
    caption: "Explain the context of this figure."
  }
],
links: [
  { label: "Demo video", href: "https://example.com/demo" }
]
```
