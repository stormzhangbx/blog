import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o,c as a,a as e,b as i,f as d,d as l}from"./app-72775176.js";const p={},c={href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"},r=l(`<h2 id="npm-config-命令" tabindex="-1"><a class="header-anchor" href="#npm-config-命令" aria-hidden="true">#</a> npm config 命令</h2><p><code>npm help config</code> 在浏览器打开命令 <code>npm config</code> 的介绍页。</p><ul><li><code>npm config list</code> 展示部分配置</li><li><code>npm config list --json</code> 展示所有配置</li><li><code>npm config list --json</code> 以 json 格式展示所有配置</li></ul><p><code>npm config list</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>; &quot;builtin&quot; config from D:\\nodejs\\node_modules\\npm\\npmrc

prefix = &quot;C:\\\\Users\\\\zbxtqw\\\\AppData\\\\Roaming\\\\npm&quot;

; node bin location = D:\\nodejs\\node.exe
; node version = v16.18.1
; npm local prefix = E:\\Desktop
; npm version = 8.19.2
; cwd = E:\\Desktop
; HOME = C:\\Users\\zbxtqw
; Run \`npm config ls -l\` to show all defaults.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>npm config list --json</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\Users\\\\zbxtqw\\\\AppData\\\\Roaming\\\\npm&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cache&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\Users\\\\zbxtqw\\\\AppData\\\\Local\\\\npm-cache&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;registry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://registry.npmjs.org/&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;userconfig&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\Users\\\\zbxtqw\\\\.npmrc&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>prefix：表示全局包（prefix/node_modules）、执行脚本（prefix）存放位置。</li><li>cache：缓存位置。</li><li>registry：npm 源。</li><li>userconfig：用于存放用户修改的配置信息，如 <code>npm config set prefix &quot;D:\\nodejs&quot;</code> 会向 .npmrc 写入 <code>prefix=D:\\nodejs</code>。</li></ul><h2 id="node-包分类" tabindex="-1"><a class="header-anchor" href="#node-包分类" aria-hidden="true">#</a> Node 包分类</h2><p><strong>内置包</strong></p><p>位于 Node 安装目录下 node_modules 文件夹中，如果内置包提供了可执行脚本，这些脚本直接位于 Node 安装目录下。</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/22.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/23.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>全局包</strong></p><p>安装 prefix/node_modules 文件夹中，如果全局包提供了可执行脚本，这些脚本直接位于 prefix 文件夹下。</p><p><strong>项目包</strong></p><p>安装在项目根目录下 node_modeules 文件夹中，如果项目包提供了可执行脚本，这些脚本位于 node_modules/.bin 下，可以通过 <code>npx xxx index.js</code> (等价于 <code>node_modules/.bin/xxx index.js</code>)使用这些脚本。</p><table><thead><tr><th style="text-align:left;"></th><th style="text-align:left;">安装位置</th><th style="text-align:left;">可执行脚本位置</th></tr></thead><tbody><tr><td style="text-align:left;">内置包</td><td style="text-align:left;">Node 安装目录下 node_modules 文件夹</td><td style="text-align:left;">Node 安装目录</td></tr><tr><td style="text-align:left;">全局包</td><td style="text-align:left;">prefix/node_modules</td><td style="text-align:left;">prefix</td></tr><tr><td style="text-align:left;">项目包</td><td style="text-align:left;">项目根目录下 node_modeules 文件夹</td><td style="text-align:left;">项目/node_modules/.bin</td></tr></tbody></table><p>安装完 Node，<code>C:\\Users\\zbxtqw\\AppData\\Roaming\\npm</code>、<code>D:\\nodejs\\</code> 均已写入全局变量 Path 中。</p><h2 id="修改全局包安装位置" tabindex="-1"><a class="header-anchor" href="#修改全局包安装位置" aria-hidden="true">#</a> 修改全局包安装位置</h2><p>修改全局包安装位置、相应可执行脚本位置：</p><p><code>npm config set prefix &quot;D:\\nodejs&quot;</code></p><p>实际上，该命令会在用户目录下的新建 C:\\Users\\zbxtqw.npmrc 文件并写入 <code>prefix=D:\\nodejs</code></p><p>修改缓存位置</p><p><code>npm config set cache &quot;D:\\nodejs\\npm-cache&quot;</code></p><p>同时会向用户目录下 .npmrc 文件并写入 <code>cache=D:\\nodejs\\npm-cache</code></p><h2 id="安装-nrm" tabindex="-1"><a class="header-anchor" href="#安装-nrm" aria-hidden="true">#</a> 安装 nrm</h2><p><code>npm install nrm -g</code></p><h2 id="安装-pnmp" tabindex="-1"><a class="header-anchor" href="#安装-pnmp" aria-hidden="true">#</a> 安装 pnmp</h2><p><code>npm install pnpm -g</code></p>`,30);function u(m,g){const n=s("ExternalLinkIcon");return o(),a("div",null,[e("p",null,[e("a",c,[i("nvm"),d(n)])]),r])}const x=t(p,[["render",u],["__file","install.html.vue"]]);export{x as default};