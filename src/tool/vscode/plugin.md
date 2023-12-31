# vscode常用插件

参考链接：
[https://www.jianshu.com/p/ca78b96b9417](https://www.jianshu.com/p/ca78b96b9417)
[https://segmentfault.com/a/1190000006697219](https://segmentfault.com/a/1190000006697219)
[http://blog.csdn.net/qq_38906523/article/details/77278403](http://blog.csdn.net/qq_38906523/article/details/77278403)

插件安装的路径是：
C:\Users\ 你的用户名\.vscode\extensions

插件|说明
:--|:--
Auto Rename Tag|修改 html 标签，自动帮你完成尾部闭合标签的同步修改
Beautify|Beautify javascript, JSON, CSS, Sass, and HTML in Visual Studio Code
Bracket Pair Colorizer|此扩展允许用颜色标识匹配的括号
Chinese (Simplified) Language Pack for Visual Studio Code|汉化，Ctrl+shift+p 输入Configure Language，将local.json文件中相应字段改为“zh-CN”
Color Info|使在css中颜色值可以点击
CSS Peek|当鼠标移到css中的选择器时，通过pop的形式显示使用该选择器样式的的html
cssrem|将单位px转化为rem
Easy LESS|自动将LESS编译成CSS
EditorConfig for VS Code|vscode默认不支持editorConfig，需要安装该插件
Ember JS (ES6) and Handlebars code snippets|提供js片段
ESLint|语法规则
filesize|显示每个文件的大小
gitignore|帮助生成`.gitignore`文件
Gitlens|显示git记录
Guides|使代码左侧有引导线
HTML CSS Support|
Live Server|静态服务器
Markdown Preview Enhanced|markdown文件预览
markdownlint|检测markdown文档格式
npm Intellisense|在`import`语句中自动提示模块名
Path Intellisense|自动补全文件路径
vscode-icons|美化文件（夹）图标
Vue VSCode Snippets | 快速生成vue文件骨架
Settings Sync | GitHub Token: 7fece468060e009618391a4c4e44e5d39a210b62   GitHub Gist: 5ab70a322418d3ca00855f3851461564
Todo Tree|快速定位到代码中的Todo
Tailwind CSS IntelliSense|`imp`→`import fs from 'fs';`

Settings Sync 的使用方法：

- 快捷键Ctrl + p 打开快捷输入框
- 输入>sync，会出现上次设置、下载设置、如何设置、高级选项、重置设置等选项
- 不管是上传还是下载，首先得安装Settings Sync扩展
- 安装好后如果是上传，输入快捷键shift + alt + u，会提示先输入github 上的 Person access tokens，上传完后，记住控制台上的GitHub Token 和 GitHub Gist，下载时要用到这些信息
- 如果是下载，输入快捷键shift + alt + d

如果提示github token 无效，输入快捷键ctrl + shift + p，在输入框中输入Sync，选择编辑本地扩展设置，找到token，将新生成的github token替换token值即可
