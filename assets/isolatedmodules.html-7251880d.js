import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c as o,b as s,d as n,f as i,a as c}from"./app-90f462c1.js";const l={},r=s("h1",{id:"isolatedmodules",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#isolatedmodules","aria-hidden":"true"},"#"),n(" isolatedModules")],-1),u={href:"https://cloud.tencent.com/developer/article/1820475",target:"_blank",rel:"noopener noreferrer"},d=c(`<p>确保每个文件在不依赖其他导入下能被安全编译</p><hr><h2 id="什么是「-仅仅导入-导出声明-」" tabindex="-1"><a class="header-anchor" href="#什么是「-仅仅导入-导出声明-」" aria-hidden="true">#</a> <strong>什么是「 仅仅导入 / 导出声明 」</strong></h2><p>为了能导入类型，TypeScript 重用了 JavaScript 的导入语法。</p><p>例如，在下面的这个例子中，我们确保 JavaScript 的值 doThing 以及 TypeScript 类型 Options 一同被导入:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ./foo.ts</span>
<span class="token keyword">interface</span> <span class="token class-name">Options</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">doThing</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> Options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// ./bar.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> doThing<span class="token punctuation">,</span> Options <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./foo.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">doThingBetter</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> Options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something twice as good</span>
  <span class="token function">doThing</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">doThing</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是很方便的。</p><p>遗憾的是，这仅是因为一个被称之为「导入省略」的功能在起作用。</p><p>当 TypeScript 输出一个 JavaScript 文件时，TypeScript 会识别出 Options 仅仅是当作了一个类型来使用，它将会删除 Options。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ./foo.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">doThing</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> Options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// ./bar.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> doThing <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./foo.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">doThingBetter</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> Options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something twice as good</span>
  <span class="token function">doThing</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">doThing</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在通常情况下，这种行为都是比较好的，但是它会导致一些其他问题。</p><p>首先，在一些场景下，TypeScript 会混淆导出的究竟是一个类型还是一个值。</p><p>比如在下面的例子中， MyThing 究竟是一个值还是一个类型？</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MyThing <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./some-module.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> MyThing <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果单从这个文件来看，我们无从得知答案。</p><p>如果 Mything 仅仅是一个类型，Babel 和 TypeScript 使用的 transpileModule API 编译出的代码将无法正确工作，并且 TypeScript 的 isolatedModules 编译选项将会提示我们，这种写法将会抛出错误。</p><p>问题的关键在于，没有一种方式能识别它仅仅是个类型，以及是否应该删除它，因此「导入省略」并不够好。</p><p>同时，这也存在另外一个问题，TypeScript 导入省略将会去除只包含用于类型声明的导入语句。</p><p>对于含有副作用的模块，这造成了明显的不同行为。</p><p>于是，使用者将会不得不添加一条额外的声明语句，来确保有副作用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// This statement will get erased because of import elision.</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SomeTypeFoo<span class="token punctuation">,</span> SomeOtherTypeBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./module-with-side-effects&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// This statement always sticks around.</span>
<span class="token keyword">import</span> <span class="token string">&#39;./module-with-side-effects&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个我们看到的具体例子是出现在 Angularjs（1.x）中， services 需要在全局在注册（它是一个副作用），但是导入的 services 仅仅用于类型声明中。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ./service.ts</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&#39;globalServiceId&#39;</span><span class="token punctuation">,</span> Service<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ./consumer.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Service <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./service.js&#39;</span><span class="token punctuation">;</span>

<span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;globalServiceId&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">service</span><span class="token operator">:</span> Service</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do stuff with Service</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果 ./service.js 中的代码不会被执行，导致在运行时会被中断。</p><p>在 TypeScript 3.8 版本中，我们添加了一个<code>仅仅导入/导出</code> 声明语法来作为解决方式。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> SomeThing <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./some-module.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> type <span class="token punctuation">{</span> SomeThing <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>import type 仅仅导入被用于类型注解或声明的声明语句，它总是会被完全删除，因此在运行时将不会留下任何代码。</p><p>与此相似，export type 仅仅提供一个用于类型的导出，在 TypeScript 输出文件中，它也将会被删除。</p><p>值得注意的是，类在运行时具有值，在设计时具有类型。它的使用与上下文有关。</p><p>当使用 import type 导入一个类时，你不能做类似于从它继承的操作。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">ButtonProps</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token operator">&lt;</span>ButtonProps<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//               ~~~~~~~~~</span>
    <span class="token comment">// error! &#39;Component&#39; only refers to a type, but is being used as a value here.</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在之前你使用过 <code>Flow</code>，它们的语法是相似的。</p><p>一个不同的地方是我们添加了一个新的限制条件，来避免可能混淆的代码。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Is only &#39;Foo&#39; a type? Or every declaration in the import?</span>
<span class="token comment">// We just give an error because it&#39;s not clear.</span>

<span class="token keyword">import</span> type Foo<span class="token punctuation">,</span> <span class="token punctuation">{</span> Bar<span class="token punctuation">,</span> Baz <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;some-module&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//     ~~~~~~~~~~~~~~~~~~~~~~</span>
<span class="token comment">// error! A type-only import can specify a default import or named bindings, but not both.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与 import type 相关联，我们提供来一个新的编译选项：<code>importsNotUsedAsValues</code>，通过它可以来控制没被使用的导入语句将会被如何处理，它的名字是暂定的，但是它提供来三个不同的选项。</p><ul><li><code>remove</code>，这是现在的行为 —— 丢弃这些导入语句。这仍然是默认行为，没有破坏性的更改</li><li><code>preserve</code>，它将会保留所有的语句，即使是从来没有被使用。它可以保留副作用。</li><li><code>error</code>，它将会保留所有的导入（与 preserve 选项相同）语句，但是当一个值的导入仅仅用于类型时将会抛出错误。如果你想确保没有意外导入任何值，这会是有用的，但是对于副作用，你仍然需要添加额外的导入语法。</li></ul><p>对于该特性的更多信息，参考该 PR。</p><h2 id="babel-和-typescript-是如何一起工作的" tabindex="-1"><a class="header-anchor" href="#babel-和-typescript-是如何一起工作的" aria-hidden="true">#</a> <strong>Babel 和 TypeScript 是如何一起工作的</strong></h2><h3 id="typescript-做了两件事" tabindex="-1"><a class="header-anchor" href="#typescript-做了两件事" aria-hidden="true">#</a> <strong>TypeScript 做了两件事</strong></h3><ol><li>将静态类型检查添加到 JavaScript 代码中。</li><li>将 TS + JS 代码转换为各种JS版本。</li></ol><p>Babel 也做第二件事。</p><p>Babel的方法（特别是transform-typescript插件时）是: <code>先删除类型，然后进行转换</code>。</p><p>这样，就即可以使用 Babel 的所有优点，同时仍然能够提供 ts 文件。</p><p>看个例子：</p><p>babel 编译前：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// example.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Color <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./types&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">changeColor</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">color</span><span class="token operator">:</span> Color</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>babel 编译后：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// example.js</span>
<span class="token keyword">const</span> <span class="token function-variable function">changeColor</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">color</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，babel 不能告诉 example.ts 那个 Color 实际上是一个类型。</p><p>因此，babel 也被迫错误地将此声明保留了转换后的代码中。</p><p>为什么会这样？</p><p>Babel在转译过程中一次明确地处理一个文件。</p><p>大概是因为 babel 团队并不想像 TypeScript 那样， 在相同的类型解析过程中进行构建，只是为了删除这些类型吧。</p><h2 id="isolatedmodules-1" tabindex="-1"><a class="header-anchor" href="#isolatedmodules-1" aria-hidden="true">#</a> <strong>isolatedModules</strong></h2><h3 id="isolatedmodules-是什么" tabindex="-1"><a class="header-anchor" href="#isolatedmodules-是什么" aria-hidden="true">#</a> <strong>isolatedModules 是什么</strong></h3><p>isolatedModules是TypeScript编译器选项，旨在充当保护措施。</p><p>tsc 做类型检查时，当监测到 <code>isolatedModules</code> 是开启的，就会报类型错误。</p><p>如果错误未解决，将影响独立处理文件的编译工具（babel）。</p><p>From TypeScript docs:</p><blockquote><p>Perform additional checks to ensure that separate compilation (such as with transpileModule or @babel/plugin-transform-typescript) would be safe.</p></blockquote><p>From Babel docs:</p><blockquote><p>--isolatedModules This is the default Babel behavior, and it can&#39;t be turned off because Babel doesn&#39;t support cross-file analysis.</p></blockquote><p>换句话说，每个 ts 文件都必须能够独立进行编译。</p><p>该 <code>isolatedModules</code> 标志可防止我们引入模棱两可的 import。</p><p>下面看两个具体的例子看几个例子，了解 isolatedModules 标记的重要性。</p><h3 id="_1-混合导入-混合导出" tabindex="-1"><a class="header-anchor" href="#_1-混合导入-混合导出" aria-hidden="true">#</a> <strong>1. 混合导入， 混合导出</strong></h3><p>在这里，我们采用在 <code>types.ts</code> 文件中定义的类型，然后从中重新导出它们。</p><p>打开 isolatedModules 时，此代码不会 通过类型检查。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// types.ts</span>
<span class="token keyword">export</span> type Playlist <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">trackIds</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> type Track <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">artist</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// lib-ambiguous-re-export.ts</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> Playlist<span class="token punctuation">,</span> Track <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./types&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> CreatePlaylistRequestParams<span class="token punctuation">,</span> createPlaylist <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./api&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Babel 转换后：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// dist/types.js</span>
<span class="token operator">--</span>empty<span class="token operator">--</span>

<span class="token comment">// dist/lib-ambiguous-re-export.js</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> Playlist<span class="token punctuation">,</span> Track <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./types&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> CreatePlaylistRequestParams<span class="token punctuation">,</span> createPlaylist <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./api&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错：</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230713/11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>一些理解：</p><ul><li>Babel 从我们的types模块中删除了所有内容，它仅包含类型。</li><li>Babel 没有对我们的 lib 模块进行任何转换。Playlist 并且 Track 应该由 Babel 移除。从Node 的角度来看，Node 做模块解析时，会发现 types.js 中引入的文件是<code>空的</code>，报错：文件不存在。</li><li>如截图所示，tsc 类型检查过程立即将这些模糊的重新导出报告为错误。</li></ul><h3 id="_2-显式类型导入-显式类型导出" tabindex="-1"><a class="header-anchor" href="#_2-显式类型导入-显式类型导出" aria-hidden="true">#</a> 2. 显式类型导入，显式类型导出</h3><p>这次，我们明确地将中的类型重新导出lib-import-export.ts。</p><p>打开 isolatedModules时，此代码将通过 tsc 类型检查。</p><p>编译前：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// types.ts</span>
<span class="token keyword">export</span> type Playlist <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">trackIds</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// lib-import-export.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Playlist <span class="token keyword">as</span> PlaylistType<span class="token punctuation">,</span>
  Track <span class="token keyword">as</span> TrackType<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./types&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  CreatePlaylistRequestParams <span class="token keyword">as</span> CreatePlaylistRequestParamsType<span class="token punctuation">,</span>
  createPlaylist
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./api&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> type Playlist <span class="token operator">=</span> PlaylistType<span class="token punctuation">;</span>
<span class="token keyword">export</span> type Track <span class="token operator">=</span> TrackType<span class="token punctuation">;</span>
<span class="token keyword">export</span> type CreatePlaylistRequestParams <span class="token operator">=</span> CreatePlaylistRequestParamsType<span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> createPlaylist <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// dist/types.js</span>
<span class="token operator">--</span>empty<span class="token operator">--</span> <span class="token constant">TODO</span> or does babel remove it all together<span class="token operator">?</span>

<span class="token comment">// lib-import-export.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPlaylist <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./api&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> createPlaylist <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时：</p><ul><li>Babel仍输出一个空 types.js 文件。但这没关系，因为我们编译的lib-import-export.js器没再引用它。</li></ul><h2 id="typescript-3-8" tabindex="-1"><a class="header-anchor" href="#typescript-3-8" aria-hidden="true">#</a> <strong>TypeScript 3.8</strong></h2><p>如先前介绍， TypeScript 3.8 引入了新的语法 -- 「 仅仅导入 / 导出声明 」。</p><p>该语法在使用时为类型解析过程增加了确定性。</p><p>现在，编译器（无论是tsc，babel还是其他）都将能够查看单个文件，并取消导入或导出（如果它是TypeScript类型）。</p><p><code>import type ... from</code>让编译器知道您要导入的内容绝对是一种类型。</p><p><code>export type ... from</code>一样， 仅用作导出。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// src/lib-type-re-export.ts</span>
<span class="token keyword">export</span> type <span class="token punctuation">{</span> Track<span class="token punctuation">,</span> Playlist <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./types&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> type <span class="token punctuation">{</span> CreatePlaylistRequestParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./api&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> createPlaylist <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./api&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 会被编译为：</span>

<span class="token comment">// dist/lib-type-re-export.js</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> createPlaylist <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./api&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,91);function k(v,m){const a=p("ExternalLinkIcon");return t(),o("div",null,[r,s("p",null,[s("a",u,[n("你不知道的 「 import type 」"),i(a)])]),d])}const g=e(l,[["render",k],["__file","isolatedmodules.html.vue"]]);export{g as default};