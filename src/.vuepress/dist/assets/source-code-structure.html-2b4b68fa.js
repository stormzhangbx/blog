import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as n,c as o,a as i,b as e,f as c,d as r}from"./app-f1b20077.js";const p={},s=r(`<h1 id="源码结构" tabindex="-1"><a class="header-anchor" href="#源码结构" aria-hidden="true">#</a> 源码结构</h1><h2 id="代码结构" tabindex="-1"><a class="header-anchor" href="#代码结构" aria-hidden="true">#</a> 代码结构</h2><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230528/25.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>源码位置是在package文件件内，实际上源码主要分为两部分，编译器和运行时环境。</p><ul><li><p>编译器</p><ul><li>compiler-core 核心编译逻辑 <ul><li>基本类型解析</li><li>AST</li></ul></li><li>compiler-dom 针对浏览器的编译逻辑 <ul><li>v-html</li><li>v-text</li><li>v-model</li><li>v-clock</li></ul></li></ul></li><li><p>运行时环境</p><ul><li><p>runtime-core 运行时核心</p><ul><li>inject</li><li>生命周期</li><li>watch</li><li>directive</li><li>component</li></ul></li><li><p>runtime-dom 运行时针对浏览器的逻辑</p><ul><li>class</li><li>style</li></ul></li><li><p>runtime-test 测试环境仿真</p><blockquote><p>主要为了解决单元测试问题的逻辑 在浏览器外完成测试比较方便</p></blockquote></li></ul></li><li><p>reactivity 响应式逻辑</p></li><li><p>template-explorer 模板解析器 可以这样运行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn dev template-explorer
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230528/26.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230528/27.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后打开index.html</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230528/28.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>vue 代码入口</p><blockquote><p>整合编译器和运行时</p></blockquote><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230528/29.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>server-renderer 服务器端渲染（TODO）</p></li><li><p>share 公用方法</p></li></ul>`,5),u={href:"https://juejin.cn/post/6844903976391950343",target:"_blank",rel:"noopener noreferrer"};function d(g,m){const l=a("ExternalLinkIcon");return n(),o("div",null,[s,i("p",null,[e("转载自 "),i("a",u,[e("尝鲜Vue3之五：源码结构"),c(l)])])])}const b=t(p,[["render",d],["__file","source-code-structure.html.vue"]]);export{b as default};