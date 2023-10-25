import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as t}from"./app-f1b20077.js";const p={},e=t(`<h2 id="json-stringify" tabindex="-1"><a class="header-anchor" href="#json-stringify" aria-hidden="true">#</a> JSON.stringify()</h2><p>常用来：</p><ul><li>对象深拷贝（会忽略函数和 undefined 类型的内容）</li><li>用于比较两个对象是否“相同”</li></ul><p>JSON.stringify 除了可以转换对象、数组，也可以转换普通类型的值，如字符串、数字、布尔值、null、undefined，平常用的更多的是转换对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">friends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Marry&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// output: &#39;{&quot;name&quot;:&quot;Jack&quot;,&quot;friends&quot;:[&quot;Bob&quot;,&quot;Marry&quot;]}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-序列化对象时会忽略属性值为函数和-undefined、symbol的项" tabindex="-1"><a class="header-anchor" href="#_1-序列化对象时会忽略属性值为函数和-undefined、symbol的项" aria-hidden="true">#</a> 1 序列化对象时会忽略属性值为函数和 undefined、symbol的项</h2><p>为什么会这样呢，MDN 上说 “JSON 是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 null ”，由此可知函数和 undefined 是无法被序列化的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token function-variable function">f</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;{&quot;a&quot;:&quot;Jack&quot;,&quot;b&quot;:10,&quot;c&quot;:true,&quot;d&quot;:null}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以通过 <code>JSON.parse(JSON.stringify(xxx))</code> 来深拷贝一个对象或通过<code>JSON.stringify(xxx)</code>来比较两个对象是否“相同”时，结果可能会 <strong>“失真”</strong>。</p><p><strong>当序列化数组时，函数和 undefined、symbol 会被转换成 null。</strong></p><p><strong>当单独序列化函数和 undefined、symbol时，会返回 undefined。</strong></p><h2 id="_2-当参数是字符串时-属性顺序如何排序" tabindex="-1"><a class="header-anchor" href="#_2-当参数是字符串时-属性顺序如何排序" aria-hidden="true">#</a> 2 当参数是字符串时，属性顺序如何排序</h2><p>这里可以参考 Object.key() 的排序规则，先提取 Number 的 key，按升序排列，再提取 String 类型的 key，按定义顺序排列</p><p>注意事项：前一类需满足<code>0&lt;number&lt;2^32-1</code>，否则按字符串处理（见特殊示例）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">f</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> 
  <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;cc&#39;</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> 
  <span class="token number">3</span><span class="token operator">:</span> <span class="token string">&#39;bb&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;{&quot;1&quot;:&quot;cc&quot;,&quot;2&quot;:&quot;aa&quot;,&quot;3&quot;:&quot;bb&quot;,&quot;f&quot;:5,&quot;d&quot;:4}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-json-stringify-value-replacer" tabindex="-1"><a class="header-anchor" href="#_3-json-stringify-value-replacer" aria-hidden="true">#</a> 3 JSON.stringify(value, replacer)</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Mozilla&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&#39;box&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">replacer</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> value
<span class="token punctuation">}</span>
<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> replacer<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230730/05.png" alt="05" tabindex="0" loading="lazy"><figcaption>05</figcaption></figure><ul><li>初始时，传入 replacer 函数的第一个参数是空字符串，第二个参数是被序列化的对象</li><li>replacer 函数必须要有返回值，如下是错误的<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Mozilla&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&#39;box&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">replacer</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> replacer<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230730/06.png" alt="06" tabindex="0" loading="lazy"><figcaption>06</figcaption></li></ul>`,19),o=[e];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","JSON.stringify().html.vue"]]);export{d as default};