import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as a,f as e,d as t}from"./app-f1b20077.js";const i={},r=t(`<h1 id="typescript-中的-extends-关键字" tabindex="-1"><a class="header-anchor" href="#typescript-中的-extends-关键字" aria-hidden="true">#</a> TypeScript 中的 extends 关键字</h1><p>extends 关键字在 TypeScript 中经常用到，在不同场景下含义不同，总结如下：</p><h2 id="_1-表示继承" tabindex="-1"><a class="header-anchor" href="#_1-表示继承" aria-hidden="true">#</a> 1 表示继承</h2><p><strong>继承父类的方法和属性</strong></p><p>Class 可以通过 extends 关键字实现继承</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> name<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> color<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Meow, My name is Tom</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>继承某个类型</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">kind</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 
 <span class="token keyword">interface</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
   <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token comment">// Dog =&gt; { name: string; bark(): void }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-泛型约束" tabindex="-1"><a class="header-anchor" href="#_2-泛型约束" aria-hidden="true">#</a> 2 泛型约束</h2>`,9),u={href:"https://www.typescriptlang.org/docs/handbook/2/functions.html#constraints",target:"_blank",rel:"noopener noreferrer"},d={href:"https://ts.yayujs.com/handbook/MoreOnFunctions.html#%E7%BA%A6%E6%9D%9F-constraints",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/dizuncainiao/article/details/124295921",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#generic-parameter-defaults",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>在书写泛型的时候，我们往往需要对类型参数作一定的限制，比如希望传入的参数是一个对象数组，且数组的每一项是至少含有 name 属性（类型为 string），我们可以这么写：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> getCnames<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>entities<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> entities<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">entity</span> <span class="token operator">=&gt;</span> entity<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>T extends A</code> 表示用类型 A 对类型 T 进行约束，若类型 A 有 n 个约束条件，那么类型 T 至少也有这 n 个约束条件。</p><p>如 <code>T extends { name: string, age: number }</code> 表示 T 是一个对象，且<strong>至少</strong>含有属性name（类型为 string）、age（类型为 number），T 可以还包含其他属性。</p><h2 id="_3-条件类型" tabindex="-1"><a class="header-anchor" href="#_3-条件类型" aria-hidden="true">#</a> 3 条件类型</h2><blockquote><p><code>SomeType extends OtherType ? TrueType : FalseType;</code></p></blockquote><p>条件类型有点像 JavaScript 中的三元表达式，当左侧的类型符合右侧类型“约束”时，将在第一个分支（“真实”分支）中获得类型；否则，将在后一个分支（“假”分支）中获得类型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">live</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">woof</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// Animal 表示需要有属性 live，而 Dog 有属性 live、woof，所以这里符合约束（套用“泛型约束”）</span>
type Example1 <span class="token operator">=</span> Dog <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token operator">?</span> number <span class="token operator">:</span> string<span class="token punctuation">;</span>  <span class="token comment">// type Example1 = number</span>
 
type Example2 <span class="token operator">=</span> RegExp <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token operator">?</span> number <span class="token operator">:</span> string<span class="token punctuation">;</span>  <span class="token comment">// type Example2 = string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>type Human <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">occupation</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
type Duck <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
type Bool <span class="token operator">=</span> Duck <span class="token keyword">extends</span> <span class="token class-name">Human</span> <span class="token operator">?</span> <span class="token string">&#39;yes&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;no&#39;</span><span class="token punctuation">;</span> <span class="token comment">// type Bool = &#39;no&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现此时类型 Bool 为 &#39;no&#39;，<strong>这是因为 Duck 没有类型为 string 的 occupation 属性，类型 Duck 不满足类型 Human 的约束条件</strong></p><p><code>Duck extends Human</code> 中 Human 约束了 Duck，表示 Duck 需要满足条件 “有两个属性name、Duck，且都是 string 类型”（<strong>这跟泛型约束是一致的</strong>），如果满足就取“真”类型，否则取“假”类型</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>type Human <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
type Duck <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">occupation</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
type Bool <span class="token operator">=</span> Duck <span class="token keyword">extends</span> <span class="token class-name">Human</span> <span class="token operator">?</span> <span class="token string">&#39;yes&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;no&#39;</span><span class="token punctuation">;</span> <span class="token comment">// type Bool = &#39;yes&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function b(g,y){const s=o("ExternalLinkIcon");return c(),l("div",null,[r,n("p",null,[n("a",u,[a("Constraints"),e(s)])]),n("p",null,[n("a",d,[a("约束（Constraints）"),e(s)])]),n("p",null,[n("a",k,[a("TypeScript 泛型参数的默认值理解"),e(s)])]),n("p",null,[n("a",m,[a("Generic parameter defaults"),e(s)])]),v])}const x=p(i,[["render",b],["__file","extends.html.vue"]]);export{x as default};