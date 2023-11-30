import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-90f462c1.js";const t={},p=e(`<h1 id="自定义插件" tabindex="-1"><a class="header-anchor" href="#自定义插件" aria-hidden="true">#</a> 自定义插件</h1><p>jQuery 自定义插件可以分为以下两类：</p><ul><li><p>自定义一个工具方法，类似 <code>$.trim(str)</code>，这种比较简单，相当于在 $ 中新增一个属性，如</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">myMethod</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>自定义一个插件，这种常用到，在网上找到的 jQuery 插件通常就是这种，如</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">myPlugin</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>下面讲述第二种插件的创建、使用。</p><h2 id="_1-创建" tabindex="-1"><a class="header-anchor" href="#_1-创建" aria-hidden="true">#</a> 1 创建</h2><p>新建一个 js 文件，文件名为 jQuery.myPlugin.js，插件添加到 <code>jQuery.fn</code> 对象下，定义时像这样</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 将代码包裹在一个自执行函数中，防止全局变量污染</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">jQuery</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  jQuery<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function-variable function">myPlugin</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// options 为插件配置项，并提供配置项默认值</span>
    <span class="token keyword">var</span> options <span class="token operator">=</span> jQuery<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">key1</span><span class="token operator">:</span> value1<span class="token punctuation">,</span>
      <span class="token literal-property property">key2</span><span class="token operator">:</span> value2<span class="token punctuation">,</span>
      <span class="token comment">//...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 插件中定义的所有方法/函数的末尾都必须带有一个 “;”（分号），否则将不利于代码的最小化</span>

    <span class="token comment">// 函数中的 this 用于引用 jQuery 对象，即 \`$(selector)\`</span>
    <span class="token comment">// 因为选择器选择的元素可能有多个，通过 this.each() 迭代匹配的元素</span>
    <span class="token comment">// 返回 jQuery 对象，便于 jQuery 的链式调用</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 此处的 this，表示当前被迭代到的 jQuery 对象</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>jQuery<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用" aria-hidden="true">#</a> 2 使用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;./plugin/jquery.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;./plugin/jquery.myPlugin.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token function">$</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">myPlugin</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","plugin.html.vue"]]);export{d as default};