import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,b as n,d as s,f as e,a as t}from"./app-90f462c1.js";const i={},u=t('<h1 id="ref-自动解包" tabindex="-1"><a class="header-anchor" href="#ref-自动解包" aria-hidden="true">#</a> ref 自动解包</h1><h2 id="_1-什么是解包" tabindex="-1"><a class="header-anchor" href="#_1-什么是解包" aria-hidden="true">#</a> 1 什么是解包</h2><p>通常情况下，如果想要使用 ref，需要通过 <code>.value</code>，如 <code>name.value</code>，解包就是可以不通过 <code>.value</code> 来使用 ref。</p><h2 id="_2-手动解包-unref" tabindex="-1"><a class="header-anchor" href="#_2-手动解包-unref" aria-hidden="true">#</a> 2 手动解包 <code>unref</code></h2><p>这是 <code>val = isRef(val) ? val.value : val</code> 计算的一个语法糖。</p><p>通过 <code>unref</code>，如果参数是 ref，则返回内部值，否则返回参数本身。</p><h2 id="_3-哪些场景下会自动解包" tabindex="-1"><a class="header-anchor" href="#_3-哪些场景下会自动解包" aria-hidden="true">#</a> 3 哪些场景下会自动解包</h2>',7),r={href:"https://staging-cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#reactivity-fundamentals",target:"_blank",rel:"noopener noreferrer"},d=t(`<h3 id="_3-1-ref-在模板中的解包" tabindex="-1"><a class="header-anchor" href="#_3-1-ref-在模板中的解包" aria-hidden="true">#</a> 3.1 ref 在模板中的解包</h3><p>当 ref 在模板中作为顶层 property 被访问时，它们会被自动“解包”，所以不需要使用 <code>.value</code></p><h3 id="_3-2-ref-在响应式对象中的解包" tabindex="-1"><a class="header-anchor" href="#_3-2-ref-在响应式对象中的解包" aria-hidden="true">#</a> 3.2 ref 在响应式对象中的解包</h3><p>当一个 ref 作为一个响应式对象的 property 被访问或更改时，它会自动解包，因此会表现得和一般的 property 一样：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// count 和 state.count 是相关联的，修改其中一个，另一个也相应变化。</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  count
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 0</span>

state<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">// 注意此时 count 的值也改变了</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 此时，count 和 state.count 不是相关联的</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> count<span class="token punctuation">.</span>value
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，当 count 是一个数组或 Map ref 时，不会自动解包。</p><h3 id="_3-4-ref-在-defineexpose-中的解包" tabindex="-1"><a class="header-anchor" href="#_3-4-ref-在-defineexpose-中的解包" aria-hidden="true">#</a> 3.4 ref 在 defineExpose 中的解包</h3>`,8),k={href:"https://staging-cn.vuejs.org/api/sfc-script-setup.html#defineexpose",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>hello.vue</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment">// 写法一，这种形式与 3.2 中的 state 类似</span>
<span class="token comment">// const temp = reactive({ a: a, b: b })</span>
<span class="token comment">// defineExpose(temp)</span>

<span class="token comment">// 写法二</span>
<span class="token comment">// defineExpose({</span>
<span class="token comment">//   a: a,</span>
<span class="token comment">//   b: b</span>
<span class="token comment">// })</span>

<span class="token comment">// 或者三</span>
<span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  a<span class="token punctuation">,</span>
  b
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.vue</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>click<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hello</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>helloRef<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> Hello <span class="token keyword">from</span> <span class="token string">&#39;@/components/Hello.vue&#39;</span>

  <span class="token keyword">const</span> helloRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>helloRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// null</span>

  <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>helloRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>b<span class="token punctuation">)</span> <span class="token comment">// 2</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    helloRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>b <span class="token operator">+=</span> <span class="token number">1</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>helloRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>b<span class="token punctuation">)</span> <span class="token comment">// 点击按钮后打印 3，此时hello.vue 中 b 的值变为 3</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),m={href:"https://staging-cn.vuejs.org/guide/components/provide-inject.html#inject",target:"_blank",rel:"noopener noreferrer"};function b(f,h){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[n("a",r,[s("响应式基础"),e(a)])]),d,n("p",null,[n("a",k,[s("defineExpose"),e(a)])]),v,n("p",null,[s("注意：在依赖注入中，ref 不会自动解包（"),n("a",m,[s("注入"),e(a)]),s("）")])])}const x=p(i,[["render",b],["__file","ref-unwrapping.html.vue"]]);export{x as default};