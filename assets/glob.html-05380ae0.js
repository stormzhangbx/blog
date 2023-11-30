import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as n,b as d,d as t,f as c,a as l}from"./app-90f462c1.js";const h={},i=l('<h1 id="模式匹配" tabindex="-1"><a class="header-anchor" href="#模式匹配" aria-hidden="true">#</a> 模式匹配</h1><p>用于匹配目录、文件，而不是字符串，类似与正则表达式，但他们有不同的语法、用途。例如，列出目录 src 下的所有目录、文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>li src/**\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-语法" tabindex="-1"><a class="header-anchor" href="#_1-语法" aria-hidden="true">#</a> 1 语法</h2><p>glob 默认不匹配隐藏文件（以点.开头的文件或目录）</p><h3 id="_1-1-基础语法" tabindex="-1"><a class="header-anchor" href="#_1-1-基础语法" aria-hidden="true">#</a> 1.1 基础语法</h3><table><thead><tr><th>通配符</th><th>描述</th><th>示例</th><th>匹配</th><th>不匹配</th></tr></thead><tbody><tr><td><code>*</code></td><td>匹配0个或多个字符，包含空串</td><td><code>Law*</code></td><td><code>Law</code>, <code>Laws</code>和<code>Lawer</code></td><td><code>La</code>, <code>aw</code></td></tr><tr><td><code>?</code></td><td>匹配1个字符</td><td><code>?at</code></td><td><code>cat</code>, <code>bat</code></td><td><code>at</code></td></tr><tr><td><code>[abc]</code></td><td>匹配括号内字符集合中的单个字符</td><td><code>[cb]at</code></td><td><code>cat</code>, <code>bat</code></td><td><code>at</code>, <code>bcat</code></td></tr><tr><td><code>[a-z]</code></td><td>匹配括号内字符范围中的单个字符</td><td><code>[a-z]at</code></td><td><code>aat</code>, <code>bat</code>, <code>zat</code></td><td><code>at</code>, <code>bcat</code>, <code>Bat</code></td></tr><tr><td><code>[^abc]</code>或<code>[!abc]</code></td><td>匹配非括号内字符集合中的单个字符</td><td><code>[!CB]at</code></td><td><code>cat</code>, <code>bat</code></td><td><code>Cat</code>, <code>Bat</code></td></tr><tr><td><code>[^a-z]</code>或<code>[!a-z]</code></td><td>匹配非括号内字符范围中的单个字符</td><td><code>[!A-Z]at</code></td><td><code>aat</code>, <code>bat</code>, <code>zat</code></td><td><code>Aat</code>, <code>Bat</code>, <code>Zat</code></td></tr></tbody></table><p>在 bash 命令行中[!abc]需要转义成[!abc]</p><h3 id="_1-2-扩展语法" tabindex="-1"><a class="header-anchor" href="#_1-2-扩展语法" aria-hidden="true">#</a> 1.2 扩展语法</h3><p>主要包含三种：</p><ul><li>Brace Expansion</li><li>globstar</li><li>extglob</li></ul><table><thead><tr><th>通配符</th><th>描述</th><th>示例</th><th>匹配</th><th>不匹配</th></tr></thead><tbody><tr><td><code>{x, y, ...}</code></td><td>Brace Expansion，展开花括号内容，支持展开嵌套括号</td><td><code>a.{png,jp{,e}g}</code></td><td><code>a.png</code>, <code>a.jpg</code>, <code>a.jpeg</code></td><td></td></tr><tr><td><code>**</code></td><td>globstar，匹配所有文件和任意层目录，如果<code>**</code>后面紧接着<code>/</code>则只匹配目录，不含隐藏目录</td><td><code>src/**</code></td><td><code>src/a.js</code>, <code>src/b/a.js</code>, <code>src/b/</code></td><td><code>src/.hide/a.js</code></td></tr><tr><td><code>?(pattern-list)</code></td><td>匹配0次或1次给定的模式</td><td>`a.?(txt</td><td>bin)`</td><td><code>a.</code>, <code>a.txt</code>, <code>a.bin</code></td></tr><tr><td><code>*(pattern-list)</code></td><td>匹配0次或多次给定的模式</td><td>`a.*(txt</td><td>bin)`</td><td><code>a.</code>, <code>a.txt</code>, <code>a.bin</code>, <code>a.txtbin</code></td></tr><tr><td><code>+(pattern-list)</code></td><td>匹配1次或多次给定的模式</td><td>`a.+(txt</td><td>bin)`</td><td><code>a.txt</code>, <code>a.bin</code>, <code>a.txtbin</code></td></tr><tr><td><code>@(pattern-list)</code></td><td>匹配给定的模式</td><td>`a.@(txt</td><td>bin)`</td><td><code>a.txt</code>, <code>a.bin</code></td></tr><tr><td><code>!(pattern-list)</code></td><td>匹配非给定的模式</td><td>`a.!(txt</td><td>bin)`</td><td><code>a.</code>, <code>a.txtbin</code></td></tr></tbody></table><p>pattern-list 是一组以|作为分隔符的模式集合，例如abc|a?c|ac*</p><h2 id="_2-与正则表达式的差异" tabindex="-1"><a class="header-anchor" href="#_2-与正则表达式的差异" aria-hidden="true">#</a> 2 与正则表达式的差异</h2><p><code>*</code>、<code>?</code> 在正则表达式中是量词，表示匹配的字符或表达式的数量，与其前一个表达式组合使用。在glob 中表示字符，可以单独使用。</p>',15),s=d("table",{"0,1":""},[d("thead",null,[d("tr",null,[d("th",null,"通配符"),d("th",null,"glob"),d("th",null,"正则表达式")])]),d("tbody",null,[d("tr",{"0,":""},[d("td",null,"*"),d("td",null,"匹配0个或多个字符"),d("td",null,"匹配前一个表达式 0 次或多次。等价于")]),d("tr",null,[d("td",null,"?"),d("td",null,"匹配1个字符"),d("td",null,"匹配前面一个表达式 0 次或者 1 次。等价于")])])],-1),b=d("h2",{id:"相关库",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#相关库","aria-hidden":"true"},"#"),t(" 相关库")],-1),p={href:"https://github.com/isaacs/minimatch",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/isaacs/node-glob",target:"_blank",rel:"noopener noreferrer"};function _(x,g){const e=a("ExternalLinkIcon");return r(),n("div",null,[i,s,b,d("p",null,[d("a",p,[t("minimatch"),c(e)])]),d("p",null,[d("a",u,[t("glob"),c(e)])])])}const v=o(h,[["render",_],["__file","glob.html.vue"]]);export{v as default};