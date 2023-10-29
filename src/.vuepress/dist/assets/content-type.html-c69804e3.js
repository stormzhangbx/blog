import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as l,a as n,b as a,f as t,d as i}from"./app-72775176.js";const c={},u=n("h1",{id:"content-type",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#content-type","aria-hidden":"true"},"#"),a(" Content-Type")],-1),r={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.cnblogs.com/Zhaols/p/6274899.html",target:"_blank",rel:"noopener noreferrer"},k={href:"http://yijiebuyi.com/blog/b0b830b8119be778aa099ebb21333edc.html#",target:"_blank",rel:"noopener noreferrer"},m=i(`<p>GET请求方式，参数是拼接在url后传递的，因此在请求中不需要设置<code>Content-Type</code></p><h2 id="_1-作用" tabindex="-1"><a class="header-anchor" href="#_1-作用" aria-hidden="true">#</a> 1 作用</h2><ul><li>在请求中 (如POST 或 PUT)，客户端告诉服务器实际发送的数据类型（编码格式）。</li><li>在响应中，Content-Type头告诉客户端实际返回的内容的内容类型。</li></ul><h2 id="_2-语法" tabindex="-1"><a class="header-anchor" href="#_2-语法" aria-hidden="true">#</a> 2 语法</h2><p><code>Content-Type</code>的值可以由三部分通过<code>;</code>连接组成:</p><ul><li>media-type 资源或数据的 MIME type</li><li>charset 字符编码标准</li><li>boundary 对于多部分实体，boundary 是必需的，其包括来自一组字符的1到70个字符，已知通过电子邮件网关是非常健壮的，而不是以空白结尾。它用于封装消息的多个部分的边界。<br> 如：</li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Content-type</span><span class="token punctuation">:</span> <span class="token header-value">text/html;chartset=UTF-8</span></span>
<span class="token header"><span class="token header-name keyword">Content-type</span><span class="token punctuation">:</span> <span class="token header-value">multipart/form-data;boundary=something</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>XMLHttpRequest对象设置请求头 xhr.setRequestHeader(&#39;Content-type&#39;, &#39;xxx&#39;)，此方法必须在open()方法和send()之间调用（否则会报错），如</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> xhr <span class="token operator">=</span> window<span class="token punctuation">.</span>XMLHttpRequest <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft.XMLHTTP&quot;</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token comment">// string</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token comment">// 返回响应正文</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/api/info&#39;</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;applition/json;charset=UTF-8&#39;</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;userName=zbx&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>axios 设置请求配置中的headers，如</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">userName</span><span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pwd</span><span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;Content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;applition/json;charset=UTF-8&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-种常用的content-type" tabindex="-1"><a class="header-anchor" href="#_3-种常用的content-type" aria-hidden="true">#</a> 3 种常用的Content-type</h2><h3 id="_3-1-application-x-www-form-urlencoded-charset-utf-8" tabindex="-1"><a class="header-anchor" href="#_3-1-application-x-www-form-urlencoded-charset-utf-8" aria-hidden="true">#</a> 3.1 application/x-www-form-urlencoded;charset=UTF-8</h3><p><code>&lt;form&gt;</code>属性enctype、jquery ajax 配置项contentType的默认值都是这个。参数以<code>key1=val1&amp;key2=val2&amp;key3=val3</code>形式传递。如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST http://www.example.com HTTP/1.1
Content-Type: application/x-www-form-urlencoded;charset=UTF-8

title=test&amp;sub%5B%5D=1&amp;sub%5B%5D=2&amp;sub%5B%5D=3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-multipart-form-data" tabindex="-1"><a class="header-anchor" href="#_3-2-multipart-form-data" aria-hidden="true">#</a> 3.2 multipart/form-data</h3><p>这又是一个常见的 POST 数据提交的方式。我们使用表单上传文件时，必须让 form 的 enctype 等于这个值。请求格式如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /info HTTP/1.1
Content-Type:multipart/form-data; boundary=----WebKitFormBoundaryrGKCBY7qhFd3TrwA

------WebKitFormBoundaryrGKCBY7qhFd3TrwA
Content-Disposition: form-data; name=&quot;name&quot;

zbx
------WebKitFormBoundaryrGKCBY7qhFd3TrwA
Content-Disposition: form-data; name=&quot;pic&quot;; filename=&quot;chrome.png&quot;
Content-Type: image/png

PNG ... content of chrome.png ...
------WebKitFormBoundaryrGKCBY7qhFd3TrwA--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-text-xml" tabindex="-1"><a class="header-anchor" href="#_3-3-text-xml" aria-hidden="true">#</a> 3.3 text/xml</h3><p>XML-RPC（XML Remote Procedure Call）。它是一种使用 HTTP 作为传输协议，XML 作为编码方式的远程调用规范。典型的 XML-RPC 请求是这样的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST http://www.example.com HTTP/1.1
Content-Type: text/xml

&lt;!--?xml version=&quot;1.0&quot;?--&gt;
&lt;methodcall&gt;
    &lt;methodname&gt;examples.getStateName&lt;/methodname&gt;
    &lt;params&gt;
        &lt;param&gt;
            &lt;value&gt;&lt;i4&gt;41&lt;/i4&gt;&lt;/value&gt;

    &lt;/params&gt;
&lt;/methodcall&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-application-json-charset-utf-8" tabindex="-1"><a class="header-anchor" href="#_3-4-application-json-charset-utf-8" aria-hidden="true">#</a> 3.4 application/json;charset=UTF-8</h3><p>实际上，现在越来越多的人把它作为请求头，用来告诉服务端消息主体是序列化后的 JSON 字符串。可以方便的提交复杂的结构化数据，特别适合 RESTful 的接口。如</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;title&#39;</span><span class="token operator">:</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;sub&#39;</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终发送的请求是</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST http://www.example.com HTTP/1.1
Content-Type: application/json;charset=utf-8

{&quot;title&quot;:&quot;test&quot;,&quot;sub&quot;:[1,2,3]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-知识点" tabindex="-1"><a class="header-anchor" href="#_5-知识点" aria-hidden="true">#</a> 5 知识点</h2><p>上传文件时除了通过下面这种方式</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multipart/form-data<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pic<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>提交<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /info HTTP/1.1
Content-Type:multipart/form-data; boundary=----WebKitFormBoundaryrGKCBY7qhFd3TrwA

------WebKitFormBoundaryrGKCBY7qhFd3TrwA
Content-Disposition: form-data; name=&quot;name&quot;

zbx
------WebKitFormBoundaryrGKCBY7qhFd3TrwA
Content-Disposition: form-data; name=&quot;pic&quot;; filename=&quot;chrome.png&quot;
Content-Type: image/png

PNG ... content of chrome.png ...
------WebKitFormBoundaryrGKCBY7qhFd3TrwA--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以通过</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> inputnputElement<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> fileInputElement<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// fileInputElement表示上传控件</span>
<span class="token keyword">var</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
request<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://foo.com/submitform.php&quot;</span><span class="token punctuation">)</span>
request<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用postman调用接口时，如果请求方式时get，只能在Params下添加参数</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230724/01.png" alt="01" tabindex="0" loading="lazy"><figcaption>01</figcaption></figure>`,34);function v(b,h){const s=p("ExternalLinkIcon");return o(),l("div",null,[u,n("ul",null,[n("li",null,[a("MDN"),n("a",r,[a("Content-Type"),t(s)])]),n("li",null,[n("a",d,[a("四种常见的 POST 提交数据方式"),t(s)])]),n("li",null,[n("a",k,[a("四种常见的 POST 提交数据方式"),t(s)])])]),m])}const y=e(c,[["render",v],["__file","content-type.html.vue"]]);export{y as default};