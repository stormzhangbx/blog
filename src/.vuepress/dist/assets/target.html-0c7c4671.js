import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c,a as n,b as s,f as p,d as r}from"./app-f1b20077.js";const i={},l={id:"target",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#target","aria-hidden":"true"},"#",-1),u={href:"https://www.typescriptlang.org/tsconfig#target",target:"_blank",rel:"noopener noreferrer"},k=r(`<p>设置目标语言的版本（即编译后生成哪个版本的 JS），可设置为 <code>es3</code>、<code>es5</code> 和 <code>es6</code>/<code>es2015</code>、<code>es2016</code>、<code>es2017</code>、<code>es2018</code>、<code>es2019</code>、<code>es2020</code>、<code>es2021</code>，默认为 <code>es3</code>。</p><p>如下面代码根据不同的 <code>target</code> 编译后产生不同的产物：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> add <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>target: &#39;es3&#39;</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>target: &#39;esnext&#39;</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function v(m,g){const a=t("ExternalLinkIcon");return o(),c("div",null,[n("h1",l,[d,s(),n("a",u,[s("target"),p(a)])]),k])}const f=e(i,[["render",v],["__file","target.html.vue"]]);export{f as default};