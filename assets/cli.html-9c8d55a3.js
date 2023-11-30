import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as i,c,b as n,d as e,f as s,a as l}from"./app-90f462c1.js";const t={},d=n("h1",{id:"编写cli命令行",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#编写cli命令行","aria-hidden":"true"},"#"),e(" 编写cli命令行")],-1),r={href:"https://www.jianshu.com/p/aaa7db89a5b2",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),u={href:"https://www.jianshu.com/p/095c968d406f",target:"_blank",rel:"noopener noreferrer"},k=l(`<p>在正文之前先讲讲<code>npm link</code></p><p>使用NodeJS编写的东西，要么是一个包，要么是一个命令行程序，<code>npm link</code>命令可以将一个任意位置的npm包链接到全局执行环境，从而在任意位置使用命令行都可以直接运行该npm包。</p><ul><li>为npm包目录创建软链接，将其链接到目录<code>C:\\Users\\{Username}\\AppData\\Roaming\\npm\\node_modules\\&lt;package&gt;</code></li><li>为可执行文件(bin)创建软链接，除了上述外，还能将其链接到文件<code>C:\\Users\\{Username}\\AppData\\Roaming\\npm\\&lt;name&gt;</code></li></ul><p>执行<code>npm config get prefix</code>可以得到<code>C:\\Users\\{Username}\\AppData\\Roaming\\npm</code></p><h2 id="对一个包执行npm-link" tabindex="-1"><a class="header-anchor" href="#对一个包执行npm-link" aria-hidden="true">#</a> 对一个包执行npm link</h2><p>如新建一个npm-link-demo项目，其中index.js文件内容如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token string">&#39;test npm link&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若要执行这个js文件，必须在命令行或者git bash中进入项目根目录然后执行<code>node ./index.js</code>，执行<code>npm link</code>可将项目npm-link-demo链接到<code>C:\\Users\\zbx\\AppData\\Roaming\\npm\\node_modules\\npm-link-demo</code><br><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230720/node2.png" alt="node" loading="lazy"></p><p>现在在其他项目中执行<code>npm link npm-link-demo</code>，然后就可以在该项目index.js下引入npm-link-demo，如下。这里可以把<code>npm link npm-link-demo</code>的作用理解为<code>npm i npm-link-demo -S</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> link <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;npm-link-demo&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对一个命令行程序执行npm-link" tabindex="-1"><a class="header-anchor" href="#对一个命令行程序执行npm-link" aria-hidden="true">#</a> 对一个命令行程序执行npm link</h2><p>1 新建项目cli-demo，其中index.js内容如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
#<span class="token operator">!</span><span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>env node
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在想在命令行中执行<code>hello-cli</code>，等价于在项目cli-demo下执行<code>node ./index.js</code></p><p>package.json里面，添加一个bin字段：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;bin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;hello-cli&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行<code>npm link</code><br><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230720/node1.png" alt="node" loading="lazy"></p><p>现在在任意位置打开命令行或者git bash，执行<code>hello-cli</code>，会输出&quot;hello world&quot;</p>`,18);function v(g,h){const a=p("ExternalLinkIcon");return i(),c("div",null,[d,n("p",null,[n("a",r,[e("npm link的使用"),s(a)]),m,n("a",u,[e("手把手教你使用nodejs编写cli(命令行)"),s(a)])]),k])}const j=o(t,[["render",v],["__file","cli.html.vue"]]);export{j as default};