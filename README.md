# Zhenyu Zhang · Engineering Portfolio

公开网址：https://zhenyuz6.github.io/portfolio/

这一版是图文项目册：图片目录、九个项目的详细页面、关键结果、五张系统流程图、可展开的补充图片，以及独立的打印排版。无需安装软件或运行构建命令，双击 index.html 即可在本地查看。

## 更新现有 GitHub Pages

1. 解压 engineering-portfolio-github-pages.zip。
2. 打开 https://github.com/zhenyuz6/portfolio ，在 Code 页面选择 Add file → Upload files。
3. 把解压得到的全部文件和整个 assets 文件夹拖入。index.html、styles.css、portfolio.js、portfolio-data.js 和 PDF 均应在仓库根目录，assets 保留文件夹层级。不要把外层文件夹整体放进仓库。
4. 选择 Commit changes。到 Actions 查看最新 pages build and deployment 是否完成。
5. 打开公开网址并按 Ctrl + F5 强制刷新。新版首页标题是 “From materials to intelligent systems.”。

## 网页和 PDF

- 网页：图片目录用于快速选项目，项目页提供方法、结果和设计思考。点击图片可以放大；Additional project images 展开补充材料。
- Download PDF：下载本次排好的完整 PDF，含封面和九个项目页，共十页。
- Print / Save PDF：使用浏览器把当前网页重新打印。建议 Letter、100% 比例、开启背景图形、关闭浏览器页眉页脚。页面样式已设置打印边距和分页。
- 已排好的 PDF 是本次内容的快照。以后修改网站文字或图片后，请重新检查打印预览并更新下载用的 PDF。

## 继续编辑

所有内容在 portfolio-data.js 中：

- summary：简短项目目标。
- design：两段技术方法。
- results：成果及当前进展。
- insight：一条与本项目有关的设计判断。
- metrics：关键数字和准确标签。
- figures：图片、替代文字和图注。
- primary：本项目首屏和打印版使用的图片索引，其余图自动放入补充图库。
- diagram：可选的系统流程图。

图片位于 assets。更换文件时保持名称和路径大小写一致。更新 CSS 或 JavaScript 后，可以同步修改 index.html 中资源网址的版本后缀，帮助访问者获取新版文件。

## 本次内容核对

- Android 的 60 FPS 指应用预览帧率，采用异步推理与显示解耦。
- CNT 电镀结果按后来修正的测量更新为端到端电阻下降约 23–27%；旧的上升趋势图已撤下。
- ECE482 的 768.8 MHz 是基准振荡器仿真结果；≤50 MHz 是片外输出设计目标，整片集成仍在进行。
- ECE445 的分类结果保留训练和独立测试样本数量，不把当前测试结果表述为普遍保证。

## 呈现参考

参考了 MIT 工程作品集指南的图文组织原则，以及学生作品集使用项目图像目录的方式；本站内容、图像与布局均围绕现有工程材料制作。

- https://mitcommlab.mit.edu/meche/commkit/portfolio/
- https://adequin.github.io/index.html
- https://elijahhyoung.github.io/index.html
