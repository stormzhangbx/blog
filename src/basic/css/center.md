# 居中

- [1 水平居中](#1-水平居中)
- [2 垂直居中](#2-垂直居中)
- [3 水平垂直居中](#3-水平垂直居中)

## 1 水平居中

1 `text-align: center;`可以使标签内的行内元素居中，如文字、图片，块状元素通过`display: inline;`或`display:inline-block;`,也能居中。并且text-align属性可以继承。

```html
<style>
  .wrap {text-align: center;}
  .test {display: inline;} /* text-align: center;使标签内的行内元素居中 */
</style>
...
<body>
  <div class="wrap">
    <div class="test">hello world</div>
  </div>
</body>
```

```html
<style>
  .wrap {text-align: center;}
  .test {display: inline-block;width: 200px;} /* text-align: center;使标签内的行内块元素居中 */
</style>
...
<body>
  <div class="wrap">
    <div class="test">hello world</div>
  </div>
</body>
```

```html
<style>
  .wrap {text-align: center;}
</style>
...
<body>
  <div class="wrap">
    <div class="test">hello world</div> /* text-align属性可以继承 */
  </div>
</body>
```

2 margin和width实现水平居中，给元素定义一个宽带，然后配合margin的左右值为“auto”

```html
<style>
  .wrap {text-align: center;}
  .test {width: 100px;margin: 0 auto;}
</style>
...
<body>
  <div class="wrap">
    <div class="test">hello world</div>
  </div>
</body>
```

## 2 垂直居中

把文字的line-height设为文字父容器的高度，适用于只有一行文字的情况。

## 3 水平垂直居中

1 使用绝对定位进行居中，缺点是需要提前知道元素的尺寸。

```css
.child {
  width: 600px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -200px;    /* 高度的一半 */
  margin-left: -300px;    /* 宽度的一半 */
}
```

2 另一种使用绝对定位进行居中的方法，缺点是兼容性不好，ie9,ie10+以上现代浏览器才支持

```css
.child {
  width: 600px;
  height: 400px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;    /* 有了这个就自动居中了 */
}
```

3 使用绝对定位和平移进行居中

```css
.child {
  width: 600px; height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);    /* 50%为自身尺寸(宽高)的一半 */
}
```

4 使用绝对定位和calc()

```css
.child {
  width: 600px; height: 400px;
  position: absolute; 
  left: calc(50% - 300px); /* 这里的%相对的是父元素，300px是元素自身宽度的一半*/
  top: calc(50% - 200px);
}
```

5 使用flex布局

```css
.parent {
  display: flex;
  justify-content: center; /* 项目在主轴上居中 */
  align-items: center; /* 项目在交叉轴上居中 */
  width: 400px;
  height: 600px;
  border: 1px solid red;
}
.child {
  width: 200px;
  height: 100px;
  border: 1px solid black;
}
```

或：

```css
.parent {
  display: flex;
  width: 400px;
  height: 600px;
  border: 1px solid red;
}
.child {
  width: 200px;
  height: 100px;
  border: 1px solid black;
  margin: auto;
}
```
