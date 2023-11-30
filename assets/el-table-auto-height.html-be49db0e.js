import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-90f462c1.js";const e={},p=t(`<h1 id="动态设置-el-table-高度" tabindex="-1"><a class="header-anchor" href="#动态设置-el-table-高度" aria-hidden="true">#</a> 动态设置 el-table 高度</h1><h1 id="vue基于elementui设置表格动态高度的几种方法" tabindex="-1"><a class="header-anchor" href="#vue基于elementui设置表格动态高度的几种方法" aria-hidden="true">#</a> vue基于elementui设置表格动态高度的几种方法</h1><blockquote><h5 id="方法一-css-js的形式" tabindex="-1"><a class="header-anchor" href="#方法一-css-js的形式" aria-hidden="true">#</a> 方法一 css + js的形式</h5></blockquote><p>这个方法需要在表格外层设置一个div，原理是将表格的高度设置成外层div的高度，所以外层的div需要使用calc来设置高度，然后给表格设置:height=&quot;tableH&quot;的属性</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>table-wrapper<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableWrapper<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stripe</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableH<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
      <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>date<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>日期<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>180<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
      <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>姓名<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>180<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
      <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>address<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>地址<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最外层div高度的设置方法</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>//这里减去的是你个人业务除了表格之外其他内容的高度，比如查询条件等
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.table-wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 60px<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态获取表格高度tableH的方法</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 在data里面初始化tableH</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">tableH</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 重置table高度</span>
      <span class="token function">resetHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>tableH <span class="token operator">=</span> <span class="token number">0</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 设置table高度</span>
      <span class="token function">fetTableHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">resetHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>tableH <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>tableWrapper<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>height <span class="token operator">-</span> <span class="token number">10</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// 调用</span>
 <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fetTableHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h5 id="方法二-纯css的形式" tabindex="-1"><a class="header-anchor" href="#方法二-纯css的形式" aria-hidden="true">#</a> 方法二 纯css的形式</h5></blockquote><p>还是需要在表格外加一层div,div高度设置和方法一相同，不过表格高度不用动态设置，直接设置height=&quot;100%&quot;即可</p><blockquote><h5 id="方法三-指令的形式" tabindex="-1"><a class="header-anchor" href="#方法三-指令的形式" aria-hidden="true">#</a> 方法三 指令的形式</h5></blockquote><p>这种方法不需要设置外层div,定义一个文件夹tableHeight分别定义一个tableHeight.js和index.js<br> tableHeight.js如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> addResizeListener<span class="token punctuation">,</span> removeResizeListener <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui/src/utils/resize-event&#39;</span>

<span class="token comment">// 设置表格高度</span>
<span class="token keyword">const</span> <span class="token function-variable function">doResize</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取表格Dom对象</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">componentInstance</span><span class="token operator">:</span> $table <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> vnode
  <span class="token comment">// 获取调用传递过来的数据</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> binding
  <span class="token comment">// if (!$table.height) {</span>
  <span class="token comment">//   throw new Error(\`el-$table must set the height. Such as height=&#39;100px&#39;\`)</span>
  <span class="token comment">// }</span>
  <span class="token comment">// console.log($table, &#39;$table$table$table$table&#39;)</span>
  <span class="token comment">// 获取距底部距离（用于展示页码等信息）</span>
  <span class="token keyword">const</span> bottomOffset <span class="token operator">=</span> <span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>bottomOffset<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">30</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>$table<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token comment">// 计算列表高度并设置</span>
  <span class="token keyword">const</span> height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">-</span> el<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top <span class="token operator">-</span> bottomOffset
  <span class="token comment">// $table.layout.setMaxHeight(height)</span>
  $table<span class="token punctuation">.</span>layout<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span>
  <span class="token comment">// $table.maxHeight = height</span>
  $table<span class="token punctuation">.</span><span class="token function">doLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 初始化设置</span>
  <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 设置resize监听方法</span>
    el<span class="token punctuation">.</span><span class="token function-variable function">resizeListener</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">doResize</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 绑定监听方法到addResizeListener</span>
    <span class="token function">addResizeListener</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>document<span class="token punctuation">.</span>body<span class="token punctuation">,</span> el<span class="token punctuation">.</span>resizeListener<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// // 绑定默认高度</span>
  <span class="token keyword">async</span> <span class="token function">inserted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">doResize</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// // 销毁时设置</span>
  <span class="token function">unbind</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 移除resize监听</span>
    <span class="token function">removeResizeListener</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> el<span class="token punctuation">.</span>resizeListener<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.js如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> tableHeight <span class="token keyword">from</span> <span class="token string">&#39;./table-height&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 绑定v-adaptive指令</span>
  Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;tableHeight&#39;</span><span class="token punctuation">,</span> tableHeight<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>Vue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">[</span><span class="token string">&#39;tableHeight&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> tableHeight
  <span class="token comment">// eslint-disable-next-line no-undef</span>
  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>install<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

tableHeight<span class="token punctuation">.</span>install <span class="token operator">=</span> install

<span class="token keyword">export</span> <span class="token keyword">default</span> tableHeight
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方式，在main.js里面引入以便全局使用，当然你也可以局部引入<br> main.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 这个是你刚刚写的index.js的路径</span>
<span class="token keyword">import</span> tableHeight <span class="token keyword">from</span> <span class="token string">&#39;@sysmng/directive/tableHeight&#39;</span>
<span class="token comment">// 表格自适应指令</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>tableHeight<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在表格中使用</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// 这里需要设置一个默认的高度，多少都可以，然后后面的60就是除了表格之外其他内容的高度，比如查询条件等
// 指令的好处是会监听屏幕的变化来动态改变高度
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stripe</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100px<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-tableHeight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{bottomOffset: 60}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
      <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>date<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>日期<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>180<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
      <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>姓名<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>180<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
      <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>address<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>地址<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[p];function c(l,u){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","el-table-auto-height.html.vue"]]);export{r as default};