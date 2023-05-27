# 一、Vue 基础

## 1、 框架 前置

### 1.1 为什么要学习流行框架？

企业为了提高效率，时间就是金钱。

开发人员：提高了开发效率

```js
思考： 为什么 原生JS开发 不高效？

-> 举例： 点击 某个 DOM元素，但 要阻止冒泡：

  const box = document.querySelector(".box");

  // 考虑 浏览器的兼容性
  box.addEventListener("click", (e) => {
    // 事件对象 的 兼容性 写法：
    e = e || window.event;

    // 阻止 冒泡 - 阻止事件冒泡也 需要兼容性写法：
    e.stopPropagation(); // 阻止事件冒泡
    e.cancelBubble = true; // 阻止事件冒泡 的 兼容性写法

    console.log("点击了 box...");
  });
```

JS => JQuery => 框架时代（React、Vue）

- JS：原生 JS 直接操作 DOM 元素
- JQuery 库（流行事件 2005 年~2015 年）：提供的大量的**函数**简化操作 DOM 并且解决 DOM 操作的浏览器兼容性问题。
- 框架（Angular - 谷歌出品 - 现在国内几乎不使用了、React - Facebook 出品、Vue）：提供了一整套全新的、高效的前端开发方案：

### 1.3 前端框架与库的区别？

- 功能层面

  jquery 库：操作 DOM + 网络请求后端数据

  框架：提供全方位功能，齐全

  如果把库比作肯德基的小套餐的话，框架就类似于 KFC 的全家桶级别的。

- 代码层面

  库：是为了实现某个页面功能，而调用某个函数；

  框架：在框架**提供的自己语法**和规则下完成页面功能的开发

- 总结

  库：在 JS 的基础上，引入和使用库的各种函数；

  框架：大而沉，有自己完整的语法，相比库的学习成本更高，但开发效率也更高。

### 框架所提供的重要功能和特性：

- 如 **数据的响应式（数据驱动视图）**
- 组件化
- 渐进式
- ...

### 1.4 思考：前端的的主要工作内容？

```js
工作中：前端的主要工作内容？

-> 后端给咱前端数据，将后端给的数据，绘制到 页面中。
```

> ##### 01-原生 JS 如何将数据渲染在页面中.html
>
> ```html
> <script>
>   // 后端返回的数据：
>   const model = {
>     // 注：model 表示数据（data）
>     content: "千锋数字智慧大前端",
>   };
> </script>
>
> // 思考1：如何 使用 JS 将 model 中的数据，以下述形式 绘制到 视图（页面）中 //
> -> 使用 `render` 函数实现
> <div id="app">
>   <h1>${model.content}</h1>
> </div>
> ```
>
> ```html
> <script>
>   // 思考2：若 model 的数据发生改变，如何 将改变后的数据，更新至 视图（页面）中
>   //  -> 再执行一次 render 函数，（render 函数的 作用：根据 model 绘制页面）
>   const model = {
>     // 注：model 表示数据（data）
>     content: "数据被更新...",
>   };
> </script>
>
> <div id="app">
>   <h1>${model.content}</h1>
> </div>
>
> // 思考：上述JS操作缺点是什么？ -> 数据被改变了，需要 人工/手动 执行 render
> 函数。 - -> 不能自动执行，所以 非常麻烦。 // 理想状态，应该怎样？ // ->
> 数据被改变，自动 执行 render 函数； -> 上述的自动化的过程，即
> 「数据的响应式（数据驱动视图）」。
> ```

### 1.5 MVVM 架构模式（Vue 实现 数据响应式 的 设计模式）

目标：理解 MVVM 设计模式的思想 与 作用

![MVVM](images/MVVM.png)

MVVM 其实是指三部分：

- **M** 指的是：**M**odel 层 是数据模型，即用来存储后端返回的数据；
- **V** 指的是：**V**iew 层 是视图（即浏览器页面），展示 Model 层的数据。
- **VM** 指的是：**V**iew**M**odel(视图模型)，其同时监测 Model 层和 View 层，只要一方发生变化，则 VM 便会自动更改另一方；最终使两方的内容保持一致。

```vue
<script>
// Model 层
const model = {
  // 注：model 表示数据（data）
  content: "数据被更新...",
};
</script>

// View 层
<div id="app">
  <h1>${model.content}</h1>
</div>
```

##### 特性：

1. **数据驱动视图**

   好处：当 Model 层发生数据变化时，页面会自动重新渲染。开发人员只维护好数据的变化，页面结构会被 VM 会自动渲染出来。

2. 双向数据绑定

   举个栗子：当视图中有 <input /> 若其值发生变化，则 vm 会自动把最新的值取出来，更新到数据。

   好处：开发人员不再需要手动操作 DOM 元素，来获取表单元素输入的最新值；js 数据的变化，会被自动渲染到页面上。

Vue.js 是一个提供了 MVVM 风格的双向数据绑定的 Javascript 库，专注于 View 层。

它的核心是 MVVM 中的 **VM**，也就是 ViewModel。

ViewModel 负责连接 View 和 Model，保证视图和数据的一致性，这种轻量级的架构让前端开发更加高效、便捷。

## 2、Vue 介绍

### 2.1 简介

Vue 是一个国产框架，之前所学的 JQuery 库、Bootstrap，基本都诞生于国外。像 Vue 这种优秀的国产框架少之又少，它的作者是国内大神—尤雨溪。

![img](images/EvanYou.jpg)

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。**Vue** **的核心库只关注视图层**，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

![logo](images/01.png)

**兼容性**：**Vue 不支持 IE8 及以下版本**，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。

**IE：它是一个用来下载其他浏览器的好工具**

![ie](images/ie.png)

### 2.2 市场地位

Vue.js 是前端的**主流框架之一**，和 Angular.js、React.js 一起，并成为前端三大主流框架！

- React 和 Vue 有许多相似之处，它们都有：

  - 使用 Virtual DOM
  - 提供了 响应式 (Reactive) 和 组件化 (Composable) 的视图组件。
  - 将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库。

- Vue.js 的优点：

  1. 体积小，压缩后只有 33kb

  2. 更高的运行效率，基于虚拟 dom 原理。

     一种可以预先通过 JavaScript 进行各种计算，把最终的 DOM 操作计算出来并优化的技术，由于这个 DOM 操作属于预处理操作，并没有真实的操作 DOM，所以叫做虚拟 DOM。

  3. 双向数据绑定原理。

     让开发者不用再去操作 dom 对象，把更多精力投入到业务逻辑上

  4. 生态丰富、学习成本低。

     市面上成熟、稳重的基于 vue.js 的 UI 框架、常用组件多。

     基于以上原因，Vue.js 对初学者友好，容易上手。国内中小企业用的较多。

### 2.3 Vue2 和 Vue3

- \*\* Vue2 官网：https://v2.cn.vuejs.org/
- Vue3 官网：https://cn.vuejs.org/
- 授课路线：先 vue2 再 vue3
  - Vue2 的编程范式(风格)：典型的 面向对象 -> `new 构造函数()`
  - Vue3 的编程范式(风格)：面向对象 + 面向函数

## 3、Vue 初体验

### 3.1 Vue 使用方式

- 方式一：直接 CDN 引入

  以选择引入开发环境版本还是生产环境版本

  ```html
  <!-- 开发环境版本，包含了有帮助的命令行警告 -->
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <!-- 生产环境版本，优化了尺寸和速度 -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  ```

- 方式二：下载并引入（**==初学者推荐==**）

  开发环境 ：https://v2.cn.vuejs.org/js/vue.js

  生产环境 ：https://v2.cn.vuejs.org/js/vue.min.js

### 3.2 Vue 基本使用

Vue.js 的 html 代码写法，是一个允许采用简洁的 模板语法 来声明式地将数据渲染进 DOM 的系统。

```html
<div id="app">
  <h1>{{content}}</h1>
</div>
```

每个 Vue 应用都是通过用 `Vue` 函数创建一个新的 **Vue 实例**开始的：

```javascript
const vm = new Vue({
  // Vue实例
  el: "#app", //目的地，挂载点
  data: {
    //数据
    content: "千锋数字智慧大前端",
  },
});
```

我们已经成功创建了第一个 Vue 应用！

看起来这跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。

现在数据和 DOM 已经被建立了关联，所有东西都是**响应式的**。

```vue
// 我们要怎么确认呢？
```

> ##### 01.vue 初体验.html
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
>   <head>
>     <meta charset="UTF-8" />
>     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
>     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
>     <title>Document</title>
>   </head>
>   <body>
>     <div id="app">
>       <h1>{{content}}</h1>
>     </div>
>   </body>
> </html>
> <script src="./vue.js"></script>
> <script>
>   var vm = new Vue({
>     // Vue实例
>     el: "#app", //目的地，挂载点
>     data: {
>       //数据
>       content: "千锋数字智慧大前端",
>     },
>   });
> </script>
> ```

#### 总结：

1. 引入 vue.js
2. 在 body 中创建一个挂载点
3. new Vue，挂载到挂载点上

> 使用 vue 的第一个好处：但凡 data 中声明的 属性 均可被挂载到 `{{  }}` 中，且 data 中的属性具有 **数据的响应式** 。

### 3.3 开发者工具

在使用 Vue 时，我们推荐在你的浏览器上安装 **Vue Devtools**。它允许你在一个更友好的界面中审查和调试 Vue 应用

##### 安装 chrome 插件的方式：

![devtools不显示0](images/安装chrome插件的方式.png)

##### devtools 不显示处理方式：

![devtools不显示0](images/devtools不显示0.png)

![devtools不显示.png](images/devtools不显示.png)

## 4、模板语法

Vue.js 使用了基于 HTML 的模板语法 -> “Mustache”语法，胡须 - 被俗称为 **「大胡子」**

模板语法的作用：new Vue 下很多 JS 数据可以直接在 模板语法中被使用 -> 如 data 中的属性，且 模板语法中的数据具有响应性。

数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：

```html
<div id="app">{{ message }}</div>
```

```js
var vm = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
  },
});
```

效果：

![logo](images/3Mustache.png)

#### 4.1 {{ 表达式 }} 可以放什么？

- data 中的 任意数据类型

```vue
- 数组 - 对象
```

- 表达式
  - 什么是 表达式？

```vue
-> ['a', 'b', 'c'].map(d => d + '1'); // 也是表达式 -> 123 + 111 // 也是表达式
```

> 06-模板语法的作用：可以写表达式
>
> ```vue
> <!DOCTYPE html>
> <html lang="en">
>   <head>
>     <meta charset="UTF-8" />
>     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
>     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
>     <title>Document</title>
>   </head>
>   <body>
>     <!-- 注：其 双花括号的代码，不生效 -->
>     <p>{{ content }}</p>
>     <div id="app">
>       <h1>{{ content }} - {{ message }}</h1>
>       <p>数组：{{ arr }}</p>
>       <p>对象：{{ obj }}</p>
>       <p>表达式 - 数组的map方法：{{ arr.map((d) => d + "1") }}</p>
>       <p>数字相加的表达式 {{ 11 + 22 }}</p>
>     </div>
>   </body>
> </html>
> <script src="../packages/vue.js"></script>
> <script>
> const vm = new Vue({
>   // `el` 指的是 `<div id="app">` 的 DOM元素
>   el: "#app", // 将 vue 的代码 生效的「挂载点」
>   data: {
>     // model
>     //数据
>     content: "千锋数字智慧大前端",
>     message: "Hello Vue!",
>     arr: ["a", "b", "c"],
>     obj: {
>       name: "姓名",
>       age: 33,
>     },
>   },
> });
> </script>
> ```

## 5、指令语法

```vue
// 概念约定： 标签的属性：属性名、 标签的属性值 分别的英文 和 简写

<div title="xxx">
  <!-- 
		title 被称为：「属性名」
			->  英文 和 简写： attribute
				-> attrName

		'xxx' 被称为：「属性值」
			-> 英文 和 简写
				->  attrValue
	-->
  
</div>
```

vue 中定义好的一些以"v-"开头+具体的名称的 属性，这些属性都有特定的功能。

- 说明

  指令加在标签，在 Vue 中凡是以 `v-` 开头的都叫做「指令」，加上就会有特定的功能。

- 常见用法

  ```html
  <div v-xx></div>
    
  <div v-xx="表达式 或 data中的属性"></div>
  <div v-xx:yy="表达式"> </div>
  ```

- 注意

  指令分：自定义指令和内置指令（Vue 自带）

内置指令：Vue 自带 的，能直接使用的 指令

自定义指令：就是用户自己定义的。扩展功能

下述列举 常用的 内置指令：

### 5.1 文本绑定

#### v-html、v-text

双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，需要用到 v-html

```html
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
<!-- v-text -->
<p>Using v-text directive: <span v-text="rawHtml"></span></p>
```

#### v-cloak

cloak ：[kləuk] 笼罩，覆盖；隐藏，掩饰的意思

用于隐藏尚未完成编译的 DOM 模板。 {{}}

当使用直接在 DOM 中书写的模板时，可能会出现一种叫做“未编译模板闪现”的情况：用户可能先看到的是还没编译完成的双大括号标签，直到挂载的组件将它们替换为实际渲染的内容。

`v-cloak` 会保留在所绑定的元素上，直到相关组件实例被挂载后才移除。配合像 `[v-cloak] { display: none }` 这样的 CSS 规则，它可以在组件编译完毕前隐藏原始模板。

```html
<style>
  [v-cloak] {
    display: none;
  }
</style>

<!-- 直到编译完成前，`<div>` 将不可见。 -->
<div v-cloak>{{ message }}</div>
```

#### v-pre

元素内具有 `v-pre`，所有 Vue 模板语法都会被保留并按原样渲染。最常见的用例就是显示原始双大括号标签及内容。

```html
<div v-pre>{{ rawHTML }}</div>
```

> 07-vue 中常见的指令.html
>
> ```vue
> <!DOCTYPE html>
> <html lang="en">
>   <head>
>     <meta charset="UTF-8" />
>     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
>     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
>     <title>Document</title>
>     <style>
>       [v-cloak] {
>         display: none;
>       }
>     </style>
>   </head>
>   <body>
>     <div id="app">
>       <!-- 注： {{}} 需要被 vue 解析，所以 刷新的 瞬间 `{{}}` 会闪现，因为 vue 还没将 {{}} 解析完成 -->
>       <!-- 注：v-cloak 作用：解决 刷新时的 闪现问题 -->
>       <h1 v-cloak>{{ content }} - {{ message }}</h1>
>
>       <!-- v-pre 的作用：组织 vue 解析 大胡子中的 表达式 -->
>       <h1 v-pre>{{ content }} - {{ message }}</h1>
>
>       <!-- v-html 其作用 等价于 `innerHTML` -->
>       <div v-html="rawHtml"></div>
>
>       <!-- v-html 其作用 等价于 `innerText` -->
>       <div v-text="rawHtml"></div>
>     </div>
>   </body>
> </html>
> <script src="../packages/vue.js"></script>
> <script>
> const vm = new Vue({
>   el: "#app", // 将 vue 的代码 生效的「挂载点」
>   data: {
>     // model
>     //数据
>     content: "千锋数字智慧大前端",
>     message: "Hello Vue!",
>     rawHtml: `<p>我是 字符串的 p 文本</p>`,
>   },
> });
> </script>
> ```

### 5.2 属性绑定 - `v-bind`

思考：若 给标签的 属性值 也能像 `{{ 表达式 }}` 一样，具有响应性，岂不美哉...

-> 而 `v-bind:attrName="表达式"` 就是 为了 实现 标签属性的 响应性的

- v-bind 的简写方式： `:attrName="表达式"` 其是 `v-bind:attrName="表达式"` 的简写形式。

> 绑定属性.html
>
> ```vue
> <!DOCTYPE html>
> <html lang="en">
>   <head>
>     <meta charset="UTF-8" />
>     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
>     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
>     <title>Document</title>
>   </head>
>   <body>
>     <div id="app">
>       <!-- 注： 使用 `v-bind` 指定，可以使得 attrValue 也能使用「表达式」 -->
>       <a v-bind:href="link">{{ title }}</a>
>
>       <!-- v-bind 的简写形式 -->
>       <h1 :title="title">{{ title }}</h1>
>     </div>
>   </body>
> </html>
> <script src="../packages/vue.js"></script>
> <script>
> const vm = new Vue({
>   el: "#app", // 将 vue 的代码 生效的「挂载点」
>   data: {
>     link: "http://www.baidu.com",
>     title: "百度一下",
>   },
> });
> </script>
> ```

#### 5.2.1 动态绑定类属性

操作元素的 class 列表和内联样式是数据绑定的一个常见需求。

但字符串拼接 class 和 style ，操作麻烦且容易出错。

因此，在将 v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。

表达式结果的类型除了字符串之外，还可以是**对象**或**数组**。

```vue
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        width: 100px;
        height: 100px;
        background-color: pink;
      }

      .bold {
        font-weight: 900;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <!-- vue 的 v-bind，对 class 和 style 做了优化：
        其可以是 字符串，也可以是 「对象」和「数组」！  
      -->

      <!-- class 可以是 对象，若 对象的 key 的 value 是 true，则 该 DOM 有 className 为 key 的 class -->
      <div v-bind:class="{ box: flag, bold: true }">对象方式</div>

      <!-- class 的数组写法：类比为 DOM.classList
        注： class 为 数组的时候，此种写法 非常常用！！！
      -->
      <div :class="['box', isBold ? 'bold' : '']">数组形式的 class</div>
    </div>
  </body>
</html>
<script src="../packages/vue.js"></script>
<script>
const vm = new Vue({
  el: "#app", // 将 vue 的代码 生效的「挂载点」
  data: {
    flag: true,
    isBold: true,
  },
});
</script>
```

##### 注意：

==在 vue 当中 静态 class 和 动态绑定 class 可以同时存在==

```vue
<!-- 注意：在vue 当中 静态class和动态绑定class可以同时存在 -->
<div class="title" v-bind:class="{ box: flag, size: 3 > 2 }">对象方式</div>
```

#### 5.2.2 动态绑定 style 属性

- 对象语法

  `v-bind:style` 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名：

  ```html
  <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
  ```

  ```js
  data: {
    activeColor: 'red',
    fontSize: 30
  }
  ```

- 数组语法

  `v-bind:style` 的数组语法==可以将多个样式对象==应用到同一个元素上：

  ```html
  <div v-bind:style="[baseStyles, overridingStyles]"></div>
  ```

  > style 的用法.html
  >
  > ```html
  > <!DOCTYPE html>
  > <html lang="en">
  >   <head>
  >     <meta charset="UTF-8" />
  >     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  >     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  >     <title>Document</title>
  >   </head>
  >   <body>
  >     <div id="app">
  >       <!-- style 是 对象 的写法 更常用！！！ -->
  >       <div v-bind:style="{ color: 'red', fontSize: fontSize }">
  >         对象方式
  >       </div>
  >
  >       <div :style="[baseStyles, overridingStyles]">数组的写法</div>
  >     </div>
  >   </body>
  > </html>
  > <script src="../packages/vue.js"></script>
  > <script>
  >   const vm = new Vue({
  >     el: "#app", // 将 vue 的代码 生效的「挂载点」
  >     data: {
  >       fontSize: "50px",
  >       baseStyles: {
  >         color: "blue",
  >         fontSize: 15,
  >       },
  >       overridingStyles: {
  >         background: "black",
  >         color: "white", // 注： 数组中的 对象，其 属性 若发生了 重复，则 后面的 会 覆盖前面的属性
  >       },
  >     },
  >   });
  > </script>
  > ```

<hr />

### 预讲：事件简介

```vue
<button @事件类型="赋值语句;"></button>
```

<hr />

### 5.3 条件渲染

原生 js : 条件分支 if 判断

```js
if(true){
    //....
}else if(){

}else if(){

}else{

}
```

在 Vue 当中，条件渲染用 v-if、v-else-if、v-else、v-show。

#### 5.3.1 v-if

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 true 的时候被渲染

```html
<h1 v-if="awesome">Vue is awesome!</h1>
```

也可以用 `v-else` 添加一个“else 块”：

```html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no</h1>
```

**在 template 上使用**

因为 `v-if` 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个 `<template>` 元素当做==不可见的包裹元素==，并在上面使用 `v-if`。最终的渲染结果将不包含 `<template>` 元素。 只起包裹作用

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

#### 5.3.2 v-else

你可以使用 `v-else` 指令来表示 `v-if` 的“else 块”：

```html
<div v-if="flag">Now you see me</div>
<div v-else>Now you don't</div>
```

`v-else` 元素必须紧跟在带 `v-if` 或者 `v-else-if` 的元素的后面，否则它将不会被识别。

`v-else-if`，顾名思义，充当 `v-if` 的“else-if 块”，可以连续使用：

```html
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
<div v-else>Not A/B/C</div>
```

#### 5.3.3 v-show

另一个用于根据条件展示元素的选项是 `v-show` 指令。用法大致一样：

```vue
<h1 v-show="ok">Hello!</h1>
```

不同的是带有 `v-show` 的元素始终会被渲染并保留在 DOM 中。`v-show` 只是简单地切换元素的 CSS property `display`

**v-if 与 v-show 比较**

- 渲染模式：v-if 控制 DOM 元素的 销毁与创建； v-show 是控制 css 的 display。
- 开销/性能：v-if 因为需要 销毁和创建，而 v-show 只是控制 display 的 css，所以 v-show 对性能开销更低。
- 如何选择：
  - 若是要控制大量元素的显示与隐藏，v-if 开销更大，不建议使用。
  - 但 若要有 条件分支的逻辑：if - else / if - else ... if，只能用 v-if；因为 v-show 没有其他的 v-else 的逻辑。

#### 总结：

1. 语法：

   ```vue
   <div v-if="条件1">条件1成立</div>
   <div v-else-if="条件2">条件2成立</div>
   <div v-else>条件1，2都不成立</div>
   ```

2. v-if 功能：添加、删除元素；切换频率不高，用 v-if

![v-if](./images/v-if.png)

3. v-else-if 、v-else 要配合 v-if 一起使用，不能单独使用

4. v-show 语法:

   ```vue
   <div v-show="条件">显示</div>
   ```

5. 特点：控制元素的 display 属性是否 none；切换比较频繁，建议使用 v-show

   应用场景：切换开销比较高就用 v-show

### 5.4 列表渲染

原生 JS 遍历数组 for

我们可以用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据数组，而 `item` 则是被迭代的数组元素的**别名**。

```html
<ul id="app">
  <li v-for="item in items" :key="item.name">{{ item.name }}</li>
</ul>
```

```js
var example1 = new Vue({
  el: "#app",
  data: {
    items: [{ name: "千千" }, { name: "小峰" }],
  },
});
```

> 嵌套渲染
>
> ```vue
> <!DOCTYPE html>
> <html lang="en">
>   <head>
>     <meta charset="UTF-8" />
>     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
>     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
>     <title>Document</title>
>   </head>
>   <body>
>     <ul id="app">
>       <li v-for="item in items">
>         {{ item.name }}
>         <ol>
>           <li v-for="child in item.children">{{ child.name }}</li>
>         </ol>
>       </li>
>     </ul>
>   </body>
> </html>
> <script src="../packages/vue.js"></script>
> <script>
> const vm = new Vue({
>   el: "#app",
>   data: {
>     items: [
>       {
>         name: "aa",
>         children: [
>           { name: "aa - 1" },
>           { name: "aa - 2" },
>           { name: "aa - 3" },
>         ],
>       },
>       {
>         name: "bb",
>         children: [
>           { name: "bb - 1" },
>           { name: "bb - 2" },
>           { name: "bb - 3" },
>         ],
>       },
>     ],
>   },
> });
> </script>
> ```

##### 作业：嵌套列表渲染

<img src="./images/作业：嵌套列表渲染.jpg" alt="img" style="zoom:67%;" />

## 6、事件处理

### 前置知识：

1. Vue2 典型的面向对象写法

2. Vue 的 函数 - methods

   注：因为 vue 是「面向对象」写法，所以 函数中，可以使用 `this`。

### 6.1 监听事件 - 基础写法：

注：（vue 的事件绑定，一共三种写法）

可以用 `v-on` 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。

- 语法：

```html
<div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
```

```js
var example1 = new Vue({
  el: "#example-1",
  data: {
    counter: 0,
  },
});
```

 ![logo](./images/7.png)

- 事件绑定的简写：

`v-on:click = "JS语句"` 的简写方式： `@click = "JS语句"`

### 6.2 事件 触发 回调函数

```html
<div id="example-2">
  <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
</div>
```

```js
var example2 = new Vue({
  el: "#example-2",
  data: {
    name: "Vue.js",
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert("Hello " + this.name + "!");
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName);
      }
    },
  },
});
```

### 6.3 事件传递参数

```html
<div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>
```

```js
new Vue({
  el: "#example-3",
  methods: {
    say: function (message) {
      alert(message);
    },
  },
});
```

##### 小结：

事件相关：1、this 指向 2、传参 3、事件对象

1. this 指向： 指向当前 vm 实例对象

2. 传参： ` v-on:click="say('Hi')"`

3. 事件对象：

   不带参数:接受到的第一个参数就是事件对象

   带参数：又要用事件对象时，必须写成$event！！！！！

### 6.4 事件修饰符（本质 就是 一些 “快捷键”）

在事件处理程序中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题，Vue.js 为 `v-on` 提供了**事件修饰符**。之前提过，修饰符是由点开头的指令后缀来表示的。

#### 6.4.1 事件修饰符

- `.stop` 阻止事件事件冒泡
- `.prevent` 阻止浏览器的默认行为
- `.capture` 开启 捕获模式
- `.self`
- `.once`
- .passive

```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

####

```vue
<!-- 案例： 阻止冒泡  和  阻止浏览器的默认行为 -->
<style>
  * {
    margin: 0;
    padding: 0;
  }
  body,
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .blue {
    width: 300px;
    height: 300px;
    background-color: blue;
  }
  .green {
    width: 200px;
    height: 200px;
    background-color: green;
  }
  .red {
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>

<div id="app">
  <div class="blue" @click.stop="handleClickBlue">
    <div class="green" @click.stop="handleClickGreen">
      <div
           class="red"
           @click.stop="handleClickRed"
           @contextmenu="handleContextMenuRed"
           ></div>
    </div>
  </div>
</div>
```

#### 6.4.2 按键修饰符

在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 `v-on` 在监听键盘事件时添加按键修饰符：

.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right

```html
<input v-on:keyup.enter="submit" />
```

#### 6.4.3 系统修饰键

可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。

- `.ctrl`
- `.alt`
- `.shift`
- `.meta` windows 下，指的是 windows 键；macos 下，指的是 command 键；

```html
<!-- Alt + C -->
<input v-on:keyup.alt.67="clear" />

<!-- Ctrl + Click -->
<div v-on:click.ctrl="doSomething">Do something</div>
```

### 6.5 案例：点击高亮

要求：

1. 动态渲染列表
2. 点谁高亮，谁高亮

![image-点击高亮](./images/点击高亮案例.png)

### 6.6 案例：点击删除按钮，删除对应行

1. 动态渲染列表
2. 点击删除按钮，删除对应的 li 标签

![删除案例](images/删除案例.png)

### 6.6 v-for 一定要绑定 key 属性

#### v-for 为什么一定要绑定 key?

> 有相同父元素的子元素必须有**独特的 key**。重复的 key 会造成渲染错误。

https://v2.cn.vuejs.org/v2/api/#key

##### 结论：

设置 key 的目的，就是为了让列表中当前节点得到复用。像 vue、react、还有小程序当中，只要用了遍历，生成同样结构的数据，必须要给每个结构加一个唯一性的标识。

#### 为什么需要「虚拟 DOM」？

数据渲染到界面要经历创建虚拟 DOM 的过程，才能真正上 DOM 树。

1. 真实 DOM 太重，属性太多。虚拟 DOM 轻。
2. 新旧虚拟 DOM 之间的对比，效率更高。

![虚拟DOM](./images/虚拟DOM.png)

**虚拟 Dom**：是真实 Dom 的映射，即用 JS 对象来描述真实 DOM 节点，本质上就是在 JS 和 DOM 之间做了一个缓存。

真实 DOM：

```vue
<ul id="list">
    <li class='item'>aa</li>
    <li class='item'>bb</li>
    <li class='item'>cc</li>
</ul>
```

虚拟 DOM：

```js
{
    tagName:'ul',//节点标签名
    props:{//dom的属性，用一个对象存储键值对
        id:'list'
    },
    children:[//该节点的子节点
        {tagName:'li',props:{class:'item'},children:['aa']}，
        {tagName:'li',props:{class:'item'},children:['bb']},
        {tagName:'li',props:{class:'item'},children:['cc']}
    ]
}
```

别名：vdom、vnode、virtual dom、virtual node

**diff 算法**：比较两棵虚拟 DOM 树的差异，最小量变化

**patch**：将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。

#### 为什么 key 属性最好不要用下标

- 若使用了 下标，其 效果 `:key` 作为 唯一标识的效果，就丧失了。

#### 总结：

1. 列表渲染一定要绑定 key！！！！
2. 设置 key 的目的，就是为了让列表中当前节点得到复用（提高性能）
3. 原则：尽量不要用下标，用后台提供的唯一标识！

## 7、表单输入绑定

回顾：前面我们讲过从 data 数据到页面的单向绑定，用到 v-bind，如果要实现双向绑定，就用到了接下来要讲的 v-model。

### 7.1 v-model

`v-model` ：可以实现表单元素和 Model 层中的数据的双向绑定，特点注意：==只能应用在表单类元素单中！==

 你可以用 `v-model` 指令在表单元素创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

`v-model` 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：

- text 和 textarea 元素使用 `value` property 和 `input` 事件；
- checkbox 和 radio 使用 `checked` property 和 `change` 事件；
- select 字段将 `value` 作为 prop 并将 `change` 作为事件。

你可以用 v-model 指令在表单控件元素上创建双向数据绑定

 ![logo](./images/MVVM-5129503.png)

==v-model 默认收集的是表单元素中 value 的值==

#### 案例：==自动==收集表单数据

![自动收集表单数据](./images/自动收集表单数据.png)

```vue

```

### 7.2 ref 来获取表单中的数据

- 说明

  给 DOM 元素或组件起名字，相当于 id 标记，通过：this.$refs.名字 获取给 Dom 元素

- 语法

  ```html
  <input type="text" ref="userInfo" />
  <!--相当于给input框取个名字，相当于id-->

  // JS 代码，在函数中 ，获取到 对应的 DOM 元素 // 再次强调：Vue
  中，切记，不要直接操作DOM元素；则 不要 document.querySelector()... // 因为
  vue/react 的思想，都是
  「数据驱动视图」，即考虑如何操作数据，而不是操作DOM元素。 this.$refs.userInfo
  ```

- 应用

  获取 Dom 节点;

  修改 DOM 节点相关属性

  - 注：不建议直接操作 DOM 元素

### 7.3 修饰符

.**lazy**

在默认情况下，`v-model` 在每次 `input` 事件触发后将输入框的值与数据进行同步 (除了[上述](https://cn.vuejs.org/v2/guide/forms.html#vmodel-ime-tip)输入法组合文字时)。你可以添加 `lazy` 修饰符，从而转为在 `change` 事件*之后*进行同步：

```html
<!-- 
	在“change”时而非“input”时更新 
		即，光标丢失 且value内容发生了改变，才会触发 change 事件
-->
<input v-model.lazy="msg" />
```

.**number**

如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 `number` 修饰符：

```html
<input v-model.number="age" type="number" />
```

这通常很有用，因为即使在 `type="number"` 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 `parseFloat()` 解析，则会返回原始的值。

.**trim**

如果要自动过滤用户输入的首尾空白字符，可以给 `v-model` 添加 `trim` 修饰符：

```html
<input v-model.trim="msg" />
```

### 7.4 v-model 实现的原理

v-model 只不过是一个语法糖而已,真正的实现靠的还是

原理：

1、通过 v-bind，动态绑定 value 属性

2、监听 input 事件，把变化后的值赋值给变量

v-model 是什么。语法糖 :value + @input。还要分为两种情况

![v-model实现的原理](./images/v-model实现的原理.png)

#####

## 8、数据劫持与代理

### Object.defineProperty()

Vue2 中很多地方都用到了它，比如说 Vue 中的 数据劫持、数据代理、计算属性 等都用到了这个方法。

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

作用：为 对象 添加 或者 修改属性，使之变为==响应式的==。 数据劫持，拦截了做点儿啥事儿。

#### Object.defineProperty - 基本用法

```js
const data = {
  content: "你好",
};

Object.defineProperty(data, "key1", {
  value: "即表示给 key1 的value 值", // 作用：给 key1 增加 属性值
  enumerable: true, // enumerable - 即是否可被 for...in 循环遍历（默认值是 false）
  writable: true, // writable - 即 该key 的value值能否被修改（默认值是 false）
  configurable: true, // configurable - 即 该key 能否被 `delete` 将该 key 删除（默认值是 false）
});
```

```js
// 声明的 对象 - Model（数据）
const data = {
  content: "你好",
  age: 333,
};

const vm = {}; // 表示 vm 的实例对象

Object.defineProperty(vm, "age", {
  // 注：defineProperty 的对象，还有 两项 配置项：get函数 和 set函数
  get() {
    // get 函数 ，又被称为 `getter`，get 不能与 `value` 共用
    // 注：该函数的作用： 只要执行 `vm.age` 表示 查询该key的 value
    // 则 `vm.age` 的返回值是 本 get 函数的`返回值`
    console.log("vm - age 的 get 函数执行 了...");
    return data.age;
  },
  set(val) {
    // set 函数，又被称为 `setter`，set 不能与 `writable` 共用
    // 只要执行了 `vm.age = 新的value值`，即表示 data 的数据要被更新
    // 注：该函数的作用： 只要执行 `vm.age = 新的value值`，即赋值
    // 则会执行 set 函数，val 代表的是 `新的value值`

    console.log("vm - age 的 set 函数执行了 ...", val);
    data.age = val; // 数据被更新
  },
});
```

### 案例：使属性变成响应式

```vue
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style></style>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
<script src="../packages/vue.js"></script>
<script>
function render() {
  document.querySelector("#app").innerHTML = `
      <h1>${vm.msg}</h1>
      <h1>${vm.content}</h1>
    `;
}

const data = {
  msg: "你好",
  content: "千锋",
};

function createVm(data) {
  const vm = {};

  for (const key in data) {
    Object.defineProperty(vm, key, {
      get() {
        return data[key];
      },
      set(val) {
        data[key] = val;
        render();
      },
    });
  }

  return vm;
}

const vm = new createVm(data);

render();
</script>
```

提示：Vue2 使用 Object.defineProperty() 无法给 对象中新增的 key 实现数据的响应性

## 9、计算属性

案例：显示反转字符串

```vue
<div id="example">
  <!-- 将 message 字符串反转 -->
  <h1>{{ message.split('').reverse().join('') }}</h1>
</div>
```

上述写法（大胡子中的表达式写过多业务逻辑）的缺点：

在这个地方，模板不再是简单可读的代码。你必须看一段时间才能意识到（代码的可读性差），这里是想要显示变量 `message` 的翻转字符串。当你想要在模板中的多处包含此翻转字符串时，就会更加难以处理。

所以，对于任何复杂数据处理逻辑，你都应当使用**计算属性**。

**例子**

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```js
var vm = new Vue({
  el: "#example",
  data: {
    message: "Hello",
  },
  computed: {
    // 计算属性的 的简写getter
    reversedMessage() {
      // `this` 指向 vm 实例
      return this.message.split("").reverse().join("");
    },
  },
});
```

### 计算属性总结

- 作用：由计算得来的属性。当你需要一个属性，不需要在 data 中提前声明，而是由其他现有属性计算得到（对**data 中的属性进行再处理**）。

- 特点：是基于它的依赖而进行缓存。依赖变了，计算属性就重新计算;依赖不变，计算属性就不变。

- 应用场景：
  - 只要是需对 data 中的数据进行“二次加工”即可选择计算属性

### 计算属性 VS 方法

- 方法不存在缓存。调用几次方法，就执行几次方法，每次调用都执行

###

### 案例：

![计算属性](images/计算属性.png)

> ##### 14.方法和计算属性.html
>
> ```vue
> <!DOCTYPE html>
> <html lang="en">
>   <head>
>     <meta charset="UTF-8" />
>     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
>     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
>     <title>Document</title>
>     <style></style>
>   </head>
>   <body>
>     <div id="app">
>       姓：<input type="text" v-model="firstName" /> 名：<input
>         type="text"
>         v-model="lastName"
>       />
>
>       <!-- 第一种方式 1、字符串拼接 【不用】 -->
>       <p>1.字符串拼接： {{ firstName }}-{{ lastName }}</p>
>
>       <!-- 第二种方式 2、方法 【不用】 -->
>       <p>2.函数： {{ fGetFullName() }}</p>
>
>       <p>3.计算属性：{{ fullName2 }}</p>
>     </div>
>   </body>
> </html>
> <script src="../packages/vue.js"></script>
> <script>
> const vm = new Vue({
>   el: "#app",
>   data: {
>     firstName: "姓",
>     lastName: "名",
>   },
>   methods: {
>     fGetFullName() {
>       return this.firstName + `-` + this.lastName;
>     },
>   },
>
>   // 计算属性，是基于它的依赖而变化的。
>   computed: {
>     // 完整写法：
>     fullName: {
>       get() {
>         console.log("执行了 getter 函数");
>         return this.firstName + `-` + this.lastName;
>       },
>       set(val) {
>         [this.firstName, this.lastName] = val.split("-");
>       },
>     },
>
>     // 如果计算属性中只有getter方法，可以简写
>     fullName2() {
>       return this.firstName + `-` + this.lastName;
>     },
>   },
> });
> </script>
> ```

### 案例：todolist+模糊搜索

```vue
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style></style>
  </head>
  <body>
    <div id="app">
      <h1>todolist</h1>
      <div>
        对todolist的词条进行模糊搜索：
        <input type="text" v-model="search" />
      </div>
      <input
        type="text"
        placeholder="请输入待做项"
        @keydown.enter="handleKeydownEnter"
      />
      <ul>
        <li v-for="(item, index) in showList" :key="item.name">
          {{ item.name }}
          <button @click="handleDelete(index)">删除</button>
        </li>
      </ul>
    </div>
  </body>
</html>
<script src="../packages/vue.js"></script>
<script>
// 给 todoList 增加搜索项
const vm = new Vue({
  el: "#app",
  data: {
    todolist: [{ name: "吃饭" }, { name: "睡觉" }], // 注：只要的 待做项，统统放入该数组中
    search: "", // search 中的内容是对 todolist 进行 筛选/模糊搜索
  },
  methods: {
    // 方法 - function
    handleDelete(index) {
      this.todolist.splice(index, 1); // 删除 对应的 数据
    },

    handleKeydownEnter(event) {
      this.todolist.push({
        name: event.target.value,
      });

      event.target.value = ""; // 将 input 中输入的内容，清空
    },
  },

  computed: {
    // 本计算属性的作用：用于 li 的显示
    // 基于 search 搜索的内容，多 todolist 进行 过滤
    showList() {
      return this.todolist.filter((d) => {
        return d.name.includes(this.search); // '吃饭' 包含 '吃'
      }); // 对 todolist 进行过滤
    },
  },
});
</script>
```

### 案例：验证用户名是否可用

用户名是 admin，不可以注册；只要不是 admin，就可以注册

```vue
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style></style>
  </head>
  <body>
    <!-- 用户不能注册的用户名有： ['admin', 'abc', 'aaa', 'bbb', 'ccc'] -->
    <div id="app">
      注册用户名：<input type="text" v-model="username" />
      <span v-if="status === 'a'">请输入要注册的用户名</span>
      <span v-else-if="status === 'b'">该用户名已被注册，请输入其他用户名</span>
      <span v-else>该用户名可以使用</span>
    </div>
  </body>
</html>
<script src="../packages/vue.js"></script>
<script>
const vm = new Vue({
  el: "#app",
  data: {
    username: "",
    registeredList: ["admin", "abc", "aaa", "bbb", "ccc"],
  },
  computed: {
    /* 
        'a' 显示： `请输入要注册的用户名`
        'b' 显示： `该用户名已被注册，请输入其他用户名`
        'c' 显示： `该用户名可以使用`
      */
    status: {
      get() {
        const isRegistered = this.registeredList.includes(this.username);

        if (this.username === "") {
          return "a";
        } else if (isRegistered) {
          return "b";
        } else {
          return "c";
        }
      },
    },
  },
});
</script>
```

## 10、侦听器

又名 监视器。

- 说明

  监视的是已有数据。

  作用：监听**单个数据的变化**，一旦数据有变化执行相应的方法。

- 用法 1：监视基本的数据类型： 属性(新值,旧值)

```js
watch: {
  key(newValue, oldValue) {
    只要 key 的第一层数据被改变，即触发了 本回调函数函数
      注：其无法 deep 监听
  },
}
```

- 用法 2：handler （可配置：immediate 、deep）

```js
watch: {
  key: {
    handler(newValue, oldValue) {
      // 本为 回调函数
      // 只要是 函数，在 vue 中，就可以使用 this
    },
    immediate: true, 默认值为 false；设为 true，即刷新的时候会触发一次 回调函数
    deep: true, 设为 true，即开发对 key 的深度 监听
      注：开启深度监听，非常占用计算机资源
  }
}
```

- 用法 3：深入监听具体 key 的变化：

```js
watch: {
  `key1.key2.xxx`: {
    handler() {
      // 即监听指定 key 的变化
    }
  }
}
```

### computed VS watch

什么时候用计算属性：需要对 data 的数据 进行 `再加工` 的时候，用计算属性。

什么时候用 watch：需要监听 data 的数据发生了改变，则用 watch。

**相同**：computed 和 watch 都会因为 data 中的数据变化而执行响应的函数。

**不同**：

**computed**：是计算属性，依赖其它属性值

1. 支持缓存，只有依赖数据发生改变，才会重新进行计算
2. 不支持异步（只能同步写法）

**watch**：没有缓存性，更多的是==观察==的作用，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作；

1. 不支持缓存，数据变，直接会触发相应的操作；
2. watch 支持异步
3. 监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值

## 11、重要的实例 API

### 11.1 对象更新检测

说明：Vue 会监视 data 中所有层级的数据。对象修改后 视图同步更新的特点。

Vue 对对象数据的检测：

1. 修改已经存在的属性，界面跟着变。是响应式
2. 新添加的属性,界面不跟着变。 不是响应式

#### 实现对象视图同步更新

1. Vue.set( target, propertyName/index, value )
   参数：
   {Object | Array} target
   {string | number} propertyName/index
   {any} value
   返回值：设置的值。

   作用：

    若 某个 key 在初始的时候，并未在 data 中声明，要为后续添加的 key，使其具有数据响应性；则可使用该方法。

   用法：
   向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。

   组件内部：

   ```js
   // 写法1：Vue 静态方法：
   Vue.set(vm.ming, "height", "1999cm");
   
   // 写法2：this 等同于 vm
   vm.$set(vm.ming, "height", "2000cm");
   this.$set(this.obj, "age", 18); // 函数中 this 等同于 vm
   ```

2. Vue.delete(target, propertyName/index);

   出现的原因：delete vm.key ，其方法 不具有数据响应性。

   作用：使得 删除 key，也具有数据的响应性。

   组件内部：

   ```js
   // 写法1：
   this.$delete(this.obj, "name");
   vm.$delete(vm.ming, "name");
   
   // 写法2：
   Vue.delete(vm.ming, "name");
   ```

#### 总结：

Vue 对对象数据的检测：

1. 可以修改已经存在的属性；

2. 但是，对于新添加的属性不是响应式的，要想实现响应式需要：

   Vue.set(this.obj，'age',19) this.$set(this.obj，'age',19)

3. 对于删除已经存在的响应式数据，界面不会更新

   Vue.delete(this.obj,'age') this.$delete(this.obj，'age')

### 11.2 数组更新检测

#### 1、变更方法（修改原始数据）：

> Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：
>
> 下述的 实例方法，均会 改变数组本身；
>
> 那么，在 vue 中调用该实例方法，操作数组，都会具有 响应性。

| `push()`    | 往数组最后面添加一个元素，成功返回当前数组的长度                                                                      |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| `pop()`     | 删除数组的最后一个元素，成功返回删除元素的值                                                                          |
| `shift()`   | 删除数组的第一个元素，成功返回删除元素的值                                                                            |
| `unshift()` | 往数组最前面添加一个元素，成功返回当前数组的长度                                                                      |
| `splice()`  | 有三个参数，第一个是想要删除的元素的下标（必选），第二个是想要删除的个数（必选），第三个是删除 后想要在原位置替换的值 |
| `sort()`    | sort() 使数组按照字符编码默认从小到大排序,成功返回排序后的数组                                                        |
| `reverse()` | reverse() 将数组倒序，成功返回倒序后的数组                                                                            |

Vue 重写了以上几种方法，让数组变化后，通知页面更新的。对于下面的方法并没有重写（注：不会改变数组本身的方法，均没有被 vue 重写）。

#### 2、替换数组（生成新的数组）：

> 变更方法，顾名思义，会变更调用了这些方法的原始数组。相比之下，也有非变更方法，例如 `filter()`、`concat()` 和 `slice()`。它们不会变更原始数组，而**总是返回一个新数组**。当使用非变更方法时，可以==用新数组替换旧数组==：

#### 举例：变更方法

```html
<input type="text" v-model="fname" />
<button @click="add">添加</button>
<button @click="del">删除</button>
<button @click="change">替换</button>

<ul>
  <li :key="index" v-for="(item,index) in list">{{item}}</li>
</ul>
```

Js:

```js
data: {
    fname: '',
        list: ['apple','orange','banana']
},
    methods: {
        add: function(){
            this.list.push(this.fname);
        },
            del: function(){
                this.list.pop();
            },
            change: function(){
          // 截取数组
          // 如果只是截取数组：this.list.slice(0,2);并不会影响原始数组
          // 必须得把截取后的数组重新赋值给原始数组
          this.list = this.list.slice(0,2);
        }
    }
```

#### 3、数组响应式处理

对数组的修改，除了用上面提供的 API 之后，还可以通过索引直接操作数组。但是==通过索引操作并不是响应式的==。

```js
this.arr[2] = "新值"; // 这种写法不具有数据响应性！！！
```

但是 Vue 也提供了以下两种方法：

一、通过 Vue 对象调用 ：

```js
Vue.set(vm.items, indexOfItem, newValue);
```

二、通过 vue 示例调用

```j
vm.$set(vm.items,indexOfItem,newValue)
```

1. 参数一：要处理的数组名称
2. 参数二：要处理的数组的索引
3. 参数三：要处理的数组的值

```html
<ul>
  <li v-for="item in list">{{item}}</li>
</ul>
<div>
  <div>{{info.name}}</div>
  <div>{{info.age}}</div>
  <div>{{info.gender}}</div>
</div>
```

```js
/*
      动态处理响应式数据      
    */
var vm = new Vue({
  el: "#app",
  data: {
    list: ["apple", "orange", "banana"],
    info: {
      name: "lisi",
      age: 12,
    },
  },
});
// 用索引方式修改数据并不是响应式的
// vm.list[1] = 'lemon';
// 通过对象方式调用，可以修改数组里的值
// Vue.set(vm.list, 2, 'lemon');
// 通过实例方式
vm.$set(vm.list, 1, "lemon");
```

> ##### 31.数组更新检测.html
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
>   <head>
>     <meta charset="UTF-8" />
>     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
>     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
>     <title>Document</title>
>   </head>
>
>   <body>
>     <!-- 2、在body中创建一个挂载点 -->
>     <div id="app">
>       <h2>数组更新检测</h2>
>       <p>{{ arr }}</p>
>       <button @click="addArr">添加一个</button>
>       <p>
>         <button @click="cut">截取</button>
>       </p>
>       <p>
>         <button @click="update">修改数组元素</button>
>       </p>
>     </div>
>
>     <script src="vue.js"></script>
>     <script>
>       Vue.config.productionTip = false; //阻止 vue在启动时生成生产提示
>       // 3、new  Vue实例，并挂载到挂载点上 MV VM(Vue在此充当vm的角色 )
>       const vm = new Vue({
>         //vue实例
>         // el:'#app', //挂载点
>         data: {
>           arr: ["grape", "mongo", "peach"],
>         },
>         methods: {
>           addArr() {
>             // 修改了原数组，界面变
>             // this.arr.push('lemon');
>             this.arr.reverse();
>           },
>           cut() {
>             // let newArr= this.arr.slice(1)
>             // console.log(newArr);
>             // // 需要替换
>             // this.arr=newArr;
>             // 替换简写
>             this.arr = this.arr.slice(1);
>           },
>           update() {
>             // 通过数组下标更改数组元素，改不掉
>             // this.arr[2]='banana';
>             //   需要使用Vue2提供的this.$set()修改
>             // this.$set(this.arr,2,'banana')
>             this.$delete(this.arr, 2);
>           },
>         },
>       }).$mount("#app");
>     </script>
>   </body>
> </html>
> ```

### 11.3 界面强制更新

$forceUpdate() 强制该组件重新渲染。

鉴于 Vue 的全自动响应性系统，这个功能应该很少会被用到。

https://v2.cn.vuejs.org/v2/guide/components-edge-cases.html#%E5%BC%BA%E5%88%B6%E6%9B%B4%E6%96%B0

注：若 工作中，用到了 `$forceUpdate()` 绝大概率是我们 某些地方写错了。

### 11.4 总结

1. Vue2 对待对象的响应式和数组的响应式处理方式是不一样的：

   对于对象，使用的是 Object.defineProperty()。

   对于数组，重写数组中会改变数组本身的 7 种实例方法（pop/push/shift/unshift/splice/reverse/sort）。

2. 对象的更新检测

   对于响应式对象上新添加的属性，不是响应式的，需要特殊处理

   删除对象上的数据，不是响应式的，需要特殊处理

   ```js
   Vue.set(this.obj，'age',19)
   this.$set(this.obj，'age',19)

   Vue.delete(this.obj,'age')
   this.$delete(this.obj，'age')
   ```

3. 数组的更新检测

   非变更方法，用新数组替换旧数组

   通过下标来修改数组元素的值，不是响应式的，需要特殊处理

   ```js
   Vue.set(vm.items, indexOfItem, newValue);
   vm.$set(vm.items, indexOfItem, newValue);
   
   //删除数组里的某一项
   Vue.$delete(this.arr, 2);
   this.$delete(this.arr, 2);
   ```

# 二、组件相关

## 12、组件基础

### 思考：编写代码的技术进阶（中级/高级程序员），最需要考虑的几点：

```vue
1. 代码的可读性 （注：代码是给人读的） 2. 代码的可复用性（千万不要不断地
粘贴复制代码）
```

### 在框架之前，组织代码的最小单元：

```vue
什么是 代码的最小单元： 思考：前端中 任何一个小功能，必须有 html + css + js
三种代码才能组成。
```

### 组件的作用：

组件的概念：组件是 在 `xx.html` 能组成 html+css+js 代码 其基础上，`更小的代码单元`。

即 一个 页面中，可以有 多个组件，每个组件 都有 html+css+js 的代码组合。

组件的好处：在一个页面中，可以实现 `html+css+js` 三者组成的代码的 复用。

#### 组件化的思想

通常在框架中，我们将一个完整的页面分成很多个组件。每个组件都用于实现页面的一个具体功能块。而每一个组件又可以进行细分。

组件是一个单独功能模块的封装：这个模块有属于自己的 HTML 模板，也有属于自己的数据 data。使用时，把组件当作是一个标签。其实组件就是制作自定义的标签，这些标签在 HTML 中是没有的。

![](./images/components_0.png)

### 12.1 组件创建

### 12.1 组件创建

通常一个应用会以一棵嵌套的**组件树**的形式来组织：

例如，你可能会有页头、侧边栏、内容区等组件，每个组件又包含了其它的像导航链接、博文之类的组件。

![logo](./images/comp.png)

使用步骤：

- 定义组件
- 注册组件
- 使用组件

组件注册有两种方式：全局注册和局部注册。

为了能在模板中使用，这些组件必须先注册以便 Vue 能够识别。这里有两种组件的注册类型：**全局注册**和**局部注册**.

### 12.2 全局组件

在注册一个组件的时候，我们始终需要给它一个名字。比如在全局注册的时候我们已经看到了：

可以将 组件类比为 '函数'

```
Vue.component('my-component-name', { /* ... */ })
```

该组件名就是 `Vue.component` 的第一个参数。

你给予组件的名字可能依赖于你打算拿它来做什么。当直接在 DOM 中使用一个组件 (而不是在字符串模板或[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)) 的时候，我们强烈推荐遵循 [W3C 规范](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)中的自定义组件名 (字母全小写且必须包含一个连字符)。这会帮助你避免和当前以及未来的 HTML 元素相冲突。

你可以在[风格指南](https://cn.vuejs.org/v2/style-guide/#基础组件名-强烈推荐)中查阅到关于组件名的其它建议。

**组件名大小写**

定义组件名的方式有两种：

**使用 kebab-case**

```js
Vue.component("my-component-name", {
  /* 内容配置 */
});
```

当使用 kebab-case (短横线分隔命名) 定义一个组件时，你也必须在引用这个自定义元素时使用 kebab-case，例如 `<my-component-name />`。

**使用 PascalCase**

```js
Vue.component("MyComponentName", {
  /* 内容配置 */
});
```

当使用 PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时==两种命名法都可以使用==。也就是说 `<my-component-name>` 和 `<MyComponentName/>` 都是可接受的。注意，

尽管如此，**直接在 DOM (即非字符串的模板，即 html 文件中) 中使用时只有 kebab-case 是有效的**。

到目前为止，我们只用过 `Vue.component` 来创建组件：

```js
Vue.component("my-component-name", {
  // ... 选项 ...
});
```

这些组件是**全局注册的**。也就是说它们在注册之后可以用在任何新创建的 Vue 根实例 (`new Vue`) 的模板中。比如：

```html
Vue.component('component-a', { /* ... */ }) Vue.component('component-b', { /*
... */ }) Vue.component('component-c', { /* ... */ }) new Vue({ el: '#app' })
<div id="app">
  <!-- 注：html 中，只能写 烤串式 -->
  <component-a></component-a>
  <component-b></component-b>
  <component-c></component-c>
</div>
```

在所有子组件中也是如此，也就是说这三个组件*在各自内部*也都可以相互使用

#### 总结：

1. 名字规范：不能是 HTML 标签名
2. template 内部必须包含一个根节点
3. 组件内部的 data，必须写成一个函数。
4. html 文件中的写法有所局限：如 组件的使用，只能写 烤串式标签命名

### 12.3 局部组件（重点）

四部曲：定义、引入、注册、使用

##### 1、定义 局部组件 CompA.js:

```js
// 将 对象以 默认的形式导出
// 注：该对象，本质就是 `组件`
// 组件的声明/定义：
export default {
  template: `
    <div style="border: 1px solid blue;">
      <h1 @click="handleClick">doubleCount - {{doubleCount}}</h1>
      <p>我是一段 文本内容。。。</p>
      <button @click="count++">点我将 count + 1</button>
    </div>
  `,
  data() {
    return {
      // 注：data 函数必须返回 对象
      count: 1,
    };
  },

  methods: {
    handleClick() {
      alert("Yo ~ 你点击了 h1 标签");
    },
  },

  computed: {
    doubleCount() {
      return this.count * 2;
    },
  },
};
```

##### 2、哪里需要哪里引入：

```js
import CompA from "./CompA.js"; // 局部组件的 「引入」
```

##### 3、注册：

```js
components: {
  // 组件，都在 此 被注册~
  // CompA: CompA ES6 简写：
  CompA, // 局部组件的注册
},
```

##### 4、使用：

```vue
<!-- 局部组件 - 使用 -->
<comp-a></comp-a>
<comp-a></comp-a>
<comp-a></comp-a>
<comp-a></comp-a>
<comp-a></comp-a>
```

## 13、脚手架 创建 vue 项目

<img src="images/脚手架.png" alt="img" style="zoom:50%;" />

### 13.1 创建项目

#### 安装脚手架

npm install -g @vue/cli （安装脚手架）

```sh
npm install -g @vue/cli
# OR  npm i yarn -g
yarn global add @vue/cli

# 设置淘宝镜像
# npm config set registry http://registry.npm.taobao.org/
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install -g @vue/cli
```

检查其版本是否正确：

```bash
vue --version
```

#### 创建项目

vue create my-project（自定义项目名）

项目名称最好是英文，不能包含驼峰命名法

 -> 选择 `Manually select features`

 -> Babel：转码，把 ES6=>ES5

 -> Linter / Formatter

 -> Vue 2.0

 -> ESLint + Prettier

 -> Lint on save

 Eslint：语法校验

 Prettier：Ctrl + S 时，自动格式化代码格式

 -> In package.json

![Vue-cli](images/Vue-cli.png)

#### 启动项目（开发环境）：

 1）cd 至 项目文件夹

 2）npm run serve：本地启动项目

####项目目录介绍

```vue

```

####打包项目（生产环境）

 1）cd 至 项目文件夹

 2）npm run build ：上线

####插件安装

![image-20230209212607127](./images/image-20230209212607127.png)

![eslint](./images/elint.png)

####VSCode 配置：

`设置`中搜 `save`

![image-20230209212703435](./images/image-20230209212703435.png)

### 知识点补充：

- 组件的本质是对象
- 组件的嵌套 本质是 对象的嵌套（组件树 -> 对象的树形数据结构）
- this/组件 中的 `公有属性/方法` 、 `私有属性/方法`

## 14、组件传值

### 14.1 prop 传值

最基本、最简单的组件通信方式。

适用场合：适用于父子之间

父可以给子传递==非函数数据==和==函数数据==

#### 14.1.1 传递普通数据（非函数数据）

**语法**：

调用子组件时通过属性形式定义传递的数据

` <Son title='标题' />`

在子级组件中,通过 props 属性接收,不写接收是接收不到的

```js
export default{
	props:['title', 'xxx', 'yyy', ...]
 }
```

 在子级组件中使用 props 数据：直接当变量使用 title

**1.** **静态 props，动态的 props**

 静态 props `<Son title='标签'>`，标签即为 字符串。

 动态的 props ` <Son :title='mytitle'/>`，mytitle 即为 JS 表达式。

**2.** **props 类型**

 props:{ title:String }

 在子组件中，定义 子组件接收哪些 参数。

#### 14.1.2 父向子传递函数数据

父可以给子传递函数数据，本质是父亲想要儿子的数据，通过函数调用传参的方式把数据传递给父亲

强调：props 的形式，只能用于 父组件 给 子组件 传递数据！！

#### 总结：

1. Props 最基础、最常用的通信（组件之间传递数据），
2. 父可以给子传递
   (1) 传递非函数数据，本质就是父亲给儿子传数据
   (2) 传递函数数据，本质是父亲想要儿子的数据，通过函数调用传参的方式把数据传递给父亲

3. 不足：必须是父子关系才能传递数据（且只能 父传子），其他组件关系关系数据则相对麻烦。

#### 强调：vue 的单向数据流的重要性！

```vue
为什么 vue 中 props 只能是 父组件传递数据给子组件，反之 子传父，则不行？？？
```

### 14.2 props 校验

我们可以为组件的 prop 指定验证要求，例如你知道的这些类型。如果有一个需求没有被满足，则 Vue 会在浏览器控制台中警告你。这在开发一个会被别人用到的组件时尤其有帮助

```js
Vue.component('my-component', {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number

    // 多个可能的类型
    propB: [String, Number],

    // 必填的字符串
    propC: {
      type: String,
      required: true // ！！！重点强调
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100 // ！！！重点强调
    },
    // 强调！！带有默认值的 对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个 工厂函数 获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      // validator - 验证
      validator: function (value) { // value 即为调用组件时，传递的参数的值
        // 这个值必须匹配下列字符串中的一个
        // 即必须要求 传递的参数是 数组中的某个元素
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})
```

**类型校验**

当 prop 验证失败的时候，(开发环境构建版本的) Vue 将会产生一个控制台的警告。

`type` 可以是下列原生构造函数中的一个：

- `String`
- `Number`
- `Boolean`
- `Array`
- `Object`
- `Date`
- `Function`
- `Symbol`

额外的，`type` 还可以是一个自定义的构造函数，并且通过 `instanceof` 来进行检查确认。

### 14.3 自定义事件

作用：子组件 传递数据给 父组件 的 技术方案。

强调：还必须是 父子组件。

**由来：**父组件通过 props 传递给子组件的数据，子组件不能修改。但是可以通过自定义事件，由子组件通知父组件，让父组件自行修改。

#### 自定义时间的步骤：

1. 子组件中，通过 **this.$emit('自定义事件名'，'传参数') ** 触发绑定到该事件上的回调函数

2. 父组件中，通过 v-on 来监听子组件事件

   语法 ：<Son @自定义事件名="回调函数" />

3. 子组件定义事件

   ```js
   this.$emit("自定义事件名", this.msg);
   ```

4. 父组件-调用子组件上面接受自定义事件

   ```html
   <子组件 @自定义事件名='函数名'/> methods:{ 函数名(val){ this.xx = val; } }
   ```

==不足之处：只能应用在父子之间==

#### 自定义事件命名规范

不同于组件和 prop，事件名不存在任何自动化的大小写转换。而是触发的事件名需要完全匹配监听这个事件所用的名称。举个例子，如果触发一个 camelCase 名字的事件：

```js
this.$emit("myEvent");
```

则监听这个名字的 kebab-case 版本是不会有任何效果的：

```html
<!-- 没有效果 -->
<my-component v-on:my-event="doSomething"></my-component>
```

不同于组件和 prop，事件名不会被用作一个 JavaScript 变量名或 property 名，所以就没有理由使用 camelCase 或 PascalCase 了。并且 `v-on` 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 HTML 是大小写不敏感的)，所以 `v-on:myEvent` 将会变成 `v-on:myevent`——导致 `myEvent` 不可能被监听到。

## 15、处理边界（极端情况）

https://v2.cn.vuejs.org/v2/guide/components-edge-cases.html#ad

> 这里记录的都是和处理边界情况有关的功能，即一些需要对 Vue 的规则做一些小调整的特殊情况。不过注意这些功能都是有劣势或危险的场景的。我们会在每个案例中注明，所以当你使用每个功能的时候请稍加留意。

### 15.1 访问 本组件 根节点

$el

### 15.2 访问根实例

`实例对象` -> 对象

放在根`实例`上的数据，能实现组件共享，全局的，因为所有的组件实例都可以访问这个实例

访问根实例 $root

### 15.3 访问父组件实例 $parent

打印 this 先看自身：$vnode 虚拟 dom 指向的是 第三层

#### 即可通过该方式获得 父组件中的 数据 和 data：

1. this.$parent.xxx
2. {{ $parent.xx  }}

- 注意：尽管在 Vue 中，允许通过 `$parent`访问父组件，但在真实开发中尽量不要这样做（单向数据流）

### 15.4 获取子组件实例

- this.$children 是一个数组类型，它包含所有子组件对象。

### 15.5 $ref 访问子组件实例（使用相对较多）

前面讲双向数据绑定时，讲过用 "ref 来获取表单中数据"，ref 获取的其实就是 Dom 元素，而组件其实也就是自定义标签元素，同样可以用 ref 获取。

1. 获取 DOM 元素：

   ```vue
   <div ref="xx"></div>
   ```

   this.$refs.xx 获取 div-dom 元素

2. 获取子组件实例

   ```vue
   <Son ref="xx" />
   ```

   获取子组件的属性：

   ```vue
   this.$refs.xx.子组件的属性
   ```

   执行子组件的方法：

   ```js
   this.$refs.fnXX(); // 即执行 子组件中声明的函数
   ```

### 15.6 组件实例和 Vue 实例关系

#### （1）组件实例 和 Vue 实例

组件实例 -> 即每个组件的实例对象，比如说 `this.$refs.hello`

Vue 实例 -> new Vue() 返回的实例对象，之前一直说的 `vm`

每个组件都是一个 VueComponent 构造函数，而在组件内部打印出来的 this，都是当前组件的实例。

new VueComponent({options}) // 返回值是 组件的实例对象

new Vue({}) // 返回值是 Vue 实例，即 vm

##### 对比：

在组件选项中打印 this，指的是 VueComponent 实例；即组件内的 data 函数，methods 中的函数，watch 中的函数，computed 中的函数 都指的是 ==VueComponent 实例对象== `vc`

在 new Vue 选项中打印 this，指的是 Vue 实例；即 data 函数，methods 中的函数，watch 中的函数，computed 中的函数 都指的是 ==Vue 实例对象== `vm`

底层在创建的时候，很多代码都是复用的。

##### 所以：

> 组件实例有的功能，vm 都有。但是 vm 有的，组件实例并不全都有。如 el 属性，只有根节点才能挂载。

https://v2.cn.vuejs.org/v2/guide/components.html

#### （2）重新指向（原型链关系）

结论：Vue 强制让 VueComponen t 的 原型对象 的隐式原型属性 指向了 Vue 的 原型对象

`VueComponent.prototype.__proto__===Vue.prototype`

即，可认为 `VueComponent` 的父类是 `Vue`；

注：VueComponent 是子类， Vue 是父类：从「继承」来说，子类的实例对象能获取(继承)到 父类的属性和方法。

所以，Vue 原型对象 上的 属性 和 方法，会被 VueComponent （实例组件）所`继承` 。

### 15.7 原型链传递（继承）

#### 实用场景：

Vue.prototype.$user='admin'

```js
//挂载一个数据--挂载到原型链上
Vue.prototype.$user = "admin";
```

访问任何组件树中的 子组件，均可 继承 ：

```js
`this.$user` 获取到 Vue原型对上上的 'admin'
```

## 16、全局事件总线

#### 回顾：vue 自定义事件

由来：父组件通过 props 传递给子组件的数据，子组件不能直接修改。想要修改？

可以通过自定义事件，==通知==父组件去修改。

步骤：

1. 在子组件中，通过 this.$emit(‘自定义事件名’,参数) 来触发事件
2. 父组件中，通过 v-on 来监听子组件的事件 v-on:自定义事件名="回调函数"

弊端：必须是父子组件中，子组件给父组件传递数据。

如果不是父子，是兄弟或者是其他隔着层级比较多的话，就不适合

#### 全局事件总线 -> `eventBus`

作用：任何关系的组件间，均可传递数据。

基于 vue 自定义事件。 `$emit` , `$on  `

使用条件：

1，所有的组件对象都能找到它 -> Vue.prototype.xxx

2，在它身上可以使用`$emit` 和 `$on `

```js

```

适用场景：任何场景

缺点：管理不集中（即哪些 组件 使用了 事件总线，很难 立马得知；还有一共有哪些事件总线，也很难得知）

补充：全局事件总线本质是应用了设计模式-「观察者模式」。

> 「观察者模式」学习资料
>
> 链接: https://pan.baidu.com/s/1ssHpcESnpsYTtmHVJmSbsw?pwd=n4cr 提取码: n4cr

## 补充：

### webpack 简介：

```vue
1. 打包：将比如 `.vue` / `.scss` 等 浏览器默认不认识的文件， 打包/解析成
浏览器认识的文件。 文件的查看位置： 浏览器/源代码 -> `app.js` ||
`chunk-vendors.js` webpack 自学资料：
https://www.bilibili.com/video/BV1YU4y1g745/?spm_id_from=333.337.search-card.all.click
```

### <style scoped> 作用：

```vue
Add "scoped" attribute to limit CSS to this component only
增加 "scoped" 属性 则 限制 css 只在 本组件内生效。


原因：css 属性，默认 全局生效。
在 组件的 <style scoped> 增加 scoped 属性，则确保 css 只作用于 本组件内部。
```

### 图片显示：

```vue
具体见 代码
```

## 17、生命周期

什么是生命周期？

组件的 生命 周期：Vue 组件从创建到销毁的过程。

案例：v-if 从 显示 到 销毁 -> 一个组件的“一生”。

```vue

```

生命周期钩子（生命周期函数）：在特点时间点上触发的函数，不需要你手动调用，当组件加载到一定的阶段，会自动触发。

什么是 生命周期的钩子函数：

即 在组件特定的 “生命时间点” 会被执行的函数，则被称为 「生命周期的钩子函数」

### 17.1 生命周期图

https://v2.cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA

### 17.2 五个大阶段

初始化阶段、模板编译阶段、挂载阶段、更新阶段、销毁阶段

![lifecycle](./images/lifecycle.png)

1. 初始化阶段：beforeCreate（初始化之前）、created（初始化之后）

   在 beforeCreate 和 created 之间 -> 给 data 里的所有属性添加 getter 和 setter 方法。

   beforeCreate：打印 data 里的数据，打印不到；vm 已经创建，只是数据还没代理。

   created：初始化完成。可以访问数据。

   ```js

   ```

2. 挂载阶段：beforeMount 和 mounted 把虚拟 Dom 变成真实 Dom

   beforeMount：即将把虚拟 Dom 变成真实 Dom

   mounted：真实 DOM 在页面中渲染完毕

   ```js

   ```

3. 更新阶段：beforeUpdate 和 updated

   beforeUpdate：vm 上的数据已经更改，而页面的数据更新之前。

   updated：页面的数据更新之后，

   ```html

   ```

4. 销毁阶段

    beforeDestroy：收尾阶段，解绑事件，清除定时器

    destroyed：组件销毁完毕

```js

```

### 17.3 总结-钩子函数：

beforeCreate：实例化之前，数据和方法还没有代理，vm，

 特点：访问不到数据和方法；可以访问 this

created: 实例化之后。已经代理完成

 特点：可以访问数据和方法；**可以在本钩子函数中发送 ajax 请求**

beforeMount：挂载之前 将模板挂载到虚拟 DOM 时 注意：页面中是没数据 this.$el 还没有

mounted：挂载完成 可以操作 DOM，this.$el 也有了 开定时器、绑定事件

beforeUpdate: 数据更新之后，界面更新之前

updated： 数据更新之后，界面也更新之后

beforeDestroy ：销毁之前，收尾工作

destroyed：销毁之后

强调：`destroy` 钩子函数的作用：

```vue
destroy 声明周期的作用：组件被销毁时，清除定时器 或
其他容易引起内存泄漏相关的代码
```

## 脚手架解锁新技能：scss

注： scss 的意义： 使得 css 有了 很多类似 JS 的功能。

```js
// 作用1：`@import 'path'` 引入scss的单文件模块
//  ->  `/style` 文件夹， 在 main.js 中引入 index.scss 统一管理
//  -> import "@/style/index.scss";
// 注： scss 具有模块化的功能，所以关于 样式/scss，可以更方便地统一进行代码管理

// 作用2：颜色变量
// 使用 -> @import "@/style/variable.scss";
// 具体见 `代码`
// 颜色变量的作用：1）颜色变量的 可复用性；  2）方便 页面主题 的切换。

// 作用3：代码的嵌套
// 具体见： `代码`

// 作用4：`&` 符号
// 具体见： `代码`

// sass 官网：https://www.sass.hk/docs/
```

##

## .sync 属性修饰符

思考：如何用 `自定义事件` 实现父子组件间的 “双向数据流”？

sync - 同步

async - 异步

1. 子组件：

   ```vue
   <template>
     <div>
       <input type="text" v-model="val" />
     </div>
   </template>

   <script>
   export default {
     name: "SonComp",
     props: {
       data: {
         type: String,
       },
     },
     data() {
       return {
         val: "",
       };
     },
     created() {
       this.val = this.data;
     },
     watch: {
       val() {
         this.$emit("update:data", this.val);
       },
     },
   };
   </script>

   <style scoped lang="scss"></style>
   ```

2. 父组件

   ```vue
   <template>
     <div id="app">
       <Son :data="msg" @update:data="handleUpdateData" />
     </div>
   </template>
   
   <script>
   import Son from "./components/Son.vue";
   export default {
     name: "App",
     components: {
       Son,
     },
     data() {
       return {
         msg: "xxx",
       };
     },
   
     methods: {
       handleUpdateData(data) {
         this.msg = data;
       },
     },
   };
   </script>
   
   <style lang="scss"></style>
   ```

上述写法的语法糖（类比为 v-model ）

sync 修饰符是一个语法糖，它主要是解决了父子组件的双向绑定问题。因为 vue 提倡的是单向数据流动，因此不能直接在子组件里面修改父组件传过来的数据，通过自定义事件通知父组件去修改。

而.sync 属性修饰符实现原理就是自定义事件。

父组件给子组件属性传递数据后面添加.sync 例如:

```html
<Son :data.sync="msg" />

<!-- 注：其是  <Son :data="msg" @update:data="handleUpdateData" />  的语法糖！ -->
```

强调： `sync` 语法糖，在 vue3 中，被废弃了。

## 18、插槽

### 18.1 插槽介绍

插槽的作用：有了插槽，可以将组件的参数，不仅限于 JS 的数据，还可以是 `标签`，甚至是 `组件`。

```js
props 传参的局限性：只能传递 JS的数据。
// 为什么 “只能传递 JS的数据” 就叫局限性？
// -> 因为 组件是对 `JS+html+css` 三者的封装，所以 参数，很多情况下，也会是 `JS+html+css` 的组合。

插槽解决的问题：
即通过 插槽，可以传递 html+css+js 的代码（主要是 html）
```

> Vue 实现了一套内容分发的 API，将 `<slot>` 元素作为承载分发内容的出口。

插槽的作用：让父组件可以向子组件指定的位置插入 html 结构，也是一种组件间通信的方式，适用于父组件---》子组件。插槽的使用者，往插槽里塞东西。

#### 步骤：

**（1）定义：**使用 `<slot>` 标签预留位置

**（2）调用组件时**，写具体的要呈现的内容，要显示在<slot>标签中

### 18.2 插槽类型

#### 18.2.1 匿名插槽

（1）子组件定义时，预留好插槽：

```html
<!--预留好插槽
	即 默认参数
-->
<slot>默认内容，不传结构时，默认展示</slot>
```

（2）父组件：调用时不需要写具体的标识，都可以显示在匿名插槽中

```html
<Son>
  <h3>html结构</h3>
</Son>
```

#### 18.2.2 具名插槽

作用：即 可以传递 多个参数

有时我们需要多个插槽。例如对于一个带有如下模板的 `<header>` 组件：

```html
<div class="header">
  <div>
    <!-- 我们希望把 左侧内容放这里 -->
  </div>
  <div>
    <!-- 我们希望把 中间内容放这里 -->
  </div>
  <div>
    <!-- 我们希望把 右侧内容放这里 -->
  </div>
</div>
```

对于这样的情况，`<slot>` 元素有一个特殊的 attribute：`name`。这个 attribute 可以用来定义额外的插槽：

```html
<div class="header">
  <!--左侧内容插槽 -->
  <slot name="left"></slot>

  <!--默认插槽 -->
  <slot></slot>

  <!--右侧侧内容插槽 -->
  <slot name="right"></slot>
</div>
```

一个不带 `name` 的 `<slot>` 出口会带有隐含的名字“default”。

**Vue2.6 版本后，新语法：**

在向具名插槽提供内容的时候，我们可以在一个 `<template>` 元素上使用 `v-slot` 指令，并以 `v-slot` 的参数的形式提供其名称：

```html
<header>
  <template v-slot:left>
    <!-- 具名插槽缩写 -->
    <!-- <template #left>  -->
    <span>列表左侧</span>
  </template>

  <span>列表标题</span>

  <template v-slot:right>
    <span>列表右侧</span>
  </template>
</header>
```

现在 `<template>` 元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有 `v-slot` 的 `<template>` 中的内容都会被视为默认插槽的内容。

然而，如果你希望更明确一些，仍然可以在一个 `<template>` 中包裹默认插槽的内容：

```html
<!-- 具名插槽的简写 与 默认插槽 -->
<header>
  <!-- <template v-slot:left> -->
  <!-- 具名插槽缩写 -->
  <template #left>
    <span>列表左侧</span>
  </template>

  <span v-slot:default>列表标题</span>

  <template v-slot:right>
    <span>列表右侧</span>
  </template>
</header>
```

**Vue2.6 版本之前（被废弃）**

老版本属性写法；新版本用 v-slot 指令的写法，v-slot 只能用在 template 中

```html
<!-- 老版本用法：必须是slot；不能是v-slot-->
<div slot="left">
  <span>列表左侧</span>
</div>
```

#### 总结：

1. 插槽定义在子组件里
2. 父组件插槽的使用者，往插槽里塞 html 结构
3. 普通插槽实现了：父向子传值

#### 18.2.3 作用域插槽

数据定义在子组件中，根据数据生成的结构由使用者父组件决定。

数据传递给插槽的使用者，即父组件。

作用: 让插槽内容能够访问子组件中才有的数据 (插槽提供数据，让别人使用)

 即，子组件 能给 父组件 传递数据...

实现：子组件向父组件传值方式

2. 语法：子组件

   ```html
   <slot name="footer" :msg="msg" :num="num"></slot>
   ```

3. 父组件 使用插槽：

   ```html
   <template v-slot:footer="obj">
     底部区域
     <p>使用slot数据:{{ obj }}</p>
     <p>{{ obj.msg }}</p>
   </template>
   ```

   注意：==obj 一个对象 obj={ msg:'',num:'',...}==

#### 总结：

插槽的作用：插槽的使用者，往插槽里塞东西，而作用域插槽，就是把插槽的数据，反着传递给插槽的使用者

#### 18.2.4 具名插槽缩写

跟 v-on 和 v-bind 一样，v-slot 也有缩写，即把参数之前的所有内容 (v-slot:) 替换为字符 #。

例如 **v-slot:header 可以被重写为 #header**

## 18、高级组件

### 18.1 动态组件

语法：

```html
<component :is="组件名称"></component>
```

作用： 根据 `组件名称` 确定显示哪个组件（ 让组件显示和隐藏 v-if）

特点：
通过组件销毁 和重建过程实现组件切换

案例：选项卡

```vue
<template>
  <div id="app">
    <button @click="handleClick('Son1')">显示1</button>
    <button @click="handleClick('Son2')">显示2</button>
    <button @click="handleClick('Son3')">显示3</button>

    <component :is="showComp" />
    <!-- <Son1 />
    <Son2 />
    <Son3 /> -->
  </div>
</template>

<script>
import Son1 from "./components/Son1.vue";
import Son2 from "./components/Son2.vue";
import Son3 from "./components/Son3.vue";

/* 
  // 需求：点击 button，分别显示 对应的 组件 - Son1 / 2 / 3
  // 即： 选项卡案例
  正常思路：需要 if - else if ... 的条件分支：
*/
export default {
  name: "App",
  components: {
    Son1,
    Son2,
    Son3,
  },
  data() {
    return {
      showComp: "Son1",
    };
  },
  methods: {
    handleClick(str) {
      this.showComp = str;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style/variable.scss"; // 引入/导入 颜色变量
</style>
```

### 18.2 缓存组件

上面的动态组件，组件之间切换，不会复用，会卸载组件，重新挂载新组件。所以，每次切换 mounted 执行一次，说明每次切换渲染一次。当组件比较多，内容比较多的话，耗性能，而且页面中有发送网络请求的话，每次切换都得重新发送。没加 keep-alive，相当于 v-if 效果，加上相当于 v-show。

```html
<!-- 动态组件 -->
<!-- :exclude 为 排除 为某个组件 “保活”   `TODO` -->
<keep-alive :exclude='["Personal"]'>
  <component :is="comName"></component>
</keep-alive>
```

#### 两个生命周期钩子

被 keep-alive 包括的组件被缓存起来，就不会再走生命周期的挂载和销毁了，如果说有些特殊需求必须放到这两个生命周期里，该如何解决呢？

被 keep-alive 所缓存的组件，特有的两个钩子函数：

activated：组件被激活时触发

deactivated：组件失活时触发

## 19、过渡与动画

https://v2.cn.vuejs.org/v2/guide/transitions.html

### 19.1 过渡

Vue 把元素的过渡分为两个阶段：进入阶段和离开阶段

进入过程：元素从无到有

离开过程：元素从有到无

能对什么过渡：对连续的过程可以加过渡。比如：颜色变化，宽高的变化

### 19.2 过渡类名

Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。

在进入/离开的过渡中，会有 6 个 class 切换。

1. `v-enter`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

2. `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

3. `v-enter-to`：**2.1.8 版及以上**定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除。

4. `v-leave`：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

5. `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

6. `v-leave-to`：**2.1.8 版及以上**定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除。

   ![logo](./images/2.png)

### 19.3 自定义过渡类名与三方库结合

animate.css 官网：https://animate.style/

https://github.com/animate-css/animate.css

1. 安装：

   （1）安装

   ```
   npm install animate.css
   ```

   （2）main.js 引入样式

   ```js
   //main.js里引入演示
   import "animate.css";
   ```

   （3）使用

   ```html
   <!-- 
   	使用 - 4.X版本（最新版本）
   
   	而 vue官网介绍的 3.X 的 animate.css 版本，
   	
   	建议 同学直接使用 4.X（即直接参照本教程使用即可）
   -->
   <Transition
     name="custom-classes"
     enter-active-class="animate__animated animate__fadeInDown"
     leave-active-class="animate__animated animate__bounceOut"
   >
     <会被施加 进场 和 离场效果的 组件或标签 />
   </Transition>
   
   注：只更改 `animate__animated` 后面的 class 具体的 class 直接在
   `https://animate.style/` 复制即可
   ```

注：vue 官网使用的是 3.X 的 `animate.css` 版本，而现在(默认版本) `animate.css` 最新版本是 `4.X`

vue 官网教程：https://v2.cn.vuejs.org/v2/guide/transitions.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BF%87%E6%B8%A1%E7%9A%84%E7%B1%BB%E5%90%8D

## 20、过滤器

Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：**双花括号插值和 `v-bind` 表达式** (后者从 2.1.0+ 开始支持)。

过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：

```html
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>
```

### 20.1 定义局部过滤器：

```js
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

### 20.2 全局定义过滤器

创建 Vue 实例之前全局定义过滤器：

```js
Vue.filter("capitalize", function (value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  // ...
});
```

当全局过滤器和局部过滤器重名时，会采用局部过滤器。

过滤器函数总接收表达式的值 (之前的操作链的结果) 作为第一个参数。在上述例子中，`capitalize` 过滤器函数将会收到 `message` 的值作为第一个参数。

## 21、nextTick

### 为什么要有 nextTick?

#### [异步更新队列](https://v2.cn.vuejs.org/v2/guide/reactivity.html#异步更新队列)

Vue 在更新 DOM 时是**异步**执行的。

只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。

好处：这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。

例如，当你设置 `vm.someData = 'new value'`，该组件不会立即重新渲染。而是将多次数据更新放到一个队列中，做完 diff 算法等计算后，一并更新。

而 `Vue.nextTick(callback)` 或 `vm.$nextTick(callback)` 的回调函数，则会在 DOM 更新后，执行。

### 使用场景

在 Vue 生命周期的 created()钩子函数进行的 DOM 操作一定要放在 Vue.nextTick()的回调函数中。

在 Vue 生命周期函数中 created 钩子函数中： DOM 并没有进行任何渲染， 而此时进行 DOM 操作无异于是徒劳的， 所以此处一定将 DOM 操作的 js 代码放进 Vue.nextTick 回调函数中，

# 三、网络请求

## Axios

### 介绍

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中

#### 文档：

https://github.com/axios/axios

https://www.kancloud.cn/yunye/axios/234845

### axios 使用

1. 安装

   ```js
   npm install axios -S

   // 简写：
   npm i axios
   ```

2. 常见请求方式

   1. 执行 `GET` 请求

      ```js
      // 为给定 ID 的 user 创建请求
      axios
        .get("/user?ID=12345")
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

      // 可选地，上面的请求可以这样做
      axios
        .get("/user", {
          params: {
            ID: 12345,
          },
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      ```

   2. 执行 `POST` 请求

      ```js
      axios
        .post("/user", {
          firstName: "Fred",
          lastName: "Flintstone",
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      ```

      执行多个并发请求

      ```js
      function getUserAccount() {
        return axios.get("/user/12345");
      }
   
      function getUserPermissions() {
        return axios.get("/user/12345/permissions");
      }
   
      axios.all([getUserAccount(), getUserPermissions()]).then(
        axios.spread(function (acct, perms) {
          // 两个请求现在都执行完成
        })
      );
      ```

3. 拦截器

   在请求或响应被 `then` 或 `catch` 处理前拦截它们。

   ```js
   // 添加请求拦截器
   axios.interceptors.request.use(
     function (config) {
       // 在发送请求之前做些什么
       return config;
     },
     function (error) {
       // 对请求错误做些什么
       return Promise.reject(error);
     }
   );
   
   // 添加响应拦截器
   axios.interceptors.response.use(
     function (response) {
       // 对响应数据做点什么
       return response;
     },
     function (error) {
       // 对响应错误做点什么
       return Promise.reject(error);
     }
   );
   ```

<img src="./images/拦截器.png" />

### axios 二次封装（标准用法）

#### `/api/http.js` 中对 axios 进行二次封装

> 对 生成 http 实例，以对 baseURL 和 headers 进行 DRY
>
> ```js
> // /api/http.js
>
> // 生成 axios实例，其 作用域 axios 几乎一致，但其可以封装一些基础“参数”
> const http = axios.create({
>   baseURL: "", //
>   // baseURL: process.env.VUE_APP_URL,
>   headers: { "Content-type": "application/json" },
> });
> ```

#### 指定生产环境和开发环境的 后端地址

https://cli.vuejs.org/zh/guide/mode-and-env.html

> .env.dev / .env.prod
>
> ```js
> VUE_APP_URL = "http://生产环境 / 开发环境对应后端地址";
>
> // 注：两文件要放入 根目录
> ```
>
> package.json
>
> ```js
> "scripts": {
>   	"serve": "vue-cli-service serve --mode dev", // npm run serve 执行本行代码
>   	"build": "vue-cli-service build --mode prod",
> },
> ```

> 使用「拦截器」，以对 response 进行数据统一处理
>
> ```js
> // /api/http.js
> // 添加请求拦截器
> http.interceptors.request.use(
>   function (config) {
>     // 在发送请求之前做些什么
>     return config;
>   },
>   function (error) {
>     // 对请求错误做些什么
>     return Promise.reject(error);
>   }
> );
>
> // 添加响应拦截器
> http.interceptors.response.use(
>   function (response) {
>     // 对响应数据做点什么
>     return response.data; // 直接获得 data 数据
>   },
>   function (error) {
>     // 对响应错误做点什么
>     return Promise.reject(error);
>   }
> );
> ```

#### `/api/modules` 文件夹的作用：

1. api 接口的统一管理
2. 代码的 复用

## 跨域

### 什么是跨域？

所谓的跨域就是违背了浏览器的同源策略。

规定了三者必须一致：协议名、主机名、端口号

<img src="./images/跨域.png" alt="跨域"  />

请求确实送到了服务器，服务器也确实收到了请求，并且把数据给了浏览器。但是，浏览器并没有把数据给用户。

### 如何解决跨域？

#### （1）cors：

不用前端人员做任何的事情。后端人员加几个特殊的响应头。所以，cors 解决跨域，才是真正意义上的解决跨域。

真正开发中，响应头不是随便配置的。配置之后，导致的就是任何人都可以找这个服务器要数据。

#### （2）jsonp

是借助 script 标签的 src 属性，在引入外部资源的时候，不受同源策略的特点。

虽然巧妙，但是真正开发用的微乎其微。面试的时候，问的多，就是看你知不知道这个技巧。

原因：

1. 前端人员写回调函数，后端配合。
2. 只能解决 get 请求的跨域问题，post、delete、put 都请求解决不了。

#### （3）代理服务器 - proxy

代理服务器所处的端口号跟前端一样。

发请求发给代理服务器，代理服务器把请求转发给真实服务器。

![代理跨域](./images/代理跨域.png)

房屋中介

服务器和服务器之间打交道，不存在跨域，用的就是最传统的 http 请求，不用 ajax。Ajax 是前端技术。有浏览器才有 window，才有 xhr,才有 fetch。

##### 开启代理服务器：

（1）nginx 反向代理服务器 （学习成本高，需要了解后端技术）

（2）借助 vue-cli （脚手架 还是 借助了 webpack 的功能）

设置代理：vue.config.js

```js
//手动创建  vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
```

# 四、路由系统

路由官网：https://v3.router.vuejs.org/zh/

## 1、什么是 路由？

### 1.1 生活中的 路由

生活中的 路由 和 路由器，是为了上网。

![img](./images/路由器.jpg)

路由(route)本质就是多个 key—value 的对应关系。route = key+value

路由器(router)，用来管理多个路由(多个对应关系)。

### 1.2 编程中的路由

根据不同的 url，响应不同的数据或页面，这就是路由。key 和 value 的一一对应关系。

##### 后端路由 vs 前端路由：

- 后端路由：根据不同的 URL( path )请求，返回不同的数据。

- 举例：

  - http://localhost:8888/test/first -> 路由 - path（/test/first）,请求 一种数据

  - http://localhost:8888/test/second -> 路由 - path（/test/second）,请求 另一种数据

- 前端路由：为了实现页面跳转（页面内容的切换）。

  - 举例：不同的 path ，显示不同的页面
    - https://v3.router.vuejs.org/ja/ -> path (/ja)，显示 一种页面
    - https://v3.router.vuejs.org/zh/ -> path (/zh)，显示 另一种页面

  多页面：index.html、list.html、detail.html、order.html....多个页面来回切换、来回跳

  单页面：只有一个 index.html，其他都是以组件的方式挂载

  ### 单页面 VS 多页面

  单页面应用也称为 SPA(Single Page Application),它主要是网页的界面渲染在一个静态的页面上， 当用户要从当前界面跳到另一个界面的时候， 在这个过程中，不需要重新加载整个页面，所以页面之间的切换十分快速。

  多页面在进行页面切换时十分缓慢,在路由进行跳转的时候会加载所有的资源，而且页面重复代码多。

  对比之下，单页面原理是 JavaScript 动态修改内容而已，资源只需要局部的刷新，因此 SPA 具有极高的流畅度,有利于提升用户体验。

  ####

  |          | 多页面（MPA）               | 单页面（SPA）                    |
  | -------- | --------------------------- | -------------------------------- |
  | 组成     | 由多个完整页面构成          | 外壳页面和多个页面片段           |
  | 资源共用 | 不共用，每个页面都需要加载  | 共用，只需要在页面加载           |
  | 刷新方式 | 整页刷新                    | 页面局部刷新或更改               |
  | URL 模式 | xxx.com/first.html          | xxx.com/#/one 或者 xxx.com/first |
  | 用户体验 | 页面切换慢，体验差          | 页面切换快，体验好               |
  | 数据传递 | 依赖 URL 传参，本地存储传参 | 容易（路由传参或者组件传值）     |
  | SEO      | 利于 SEO                    | 不利于 SEO                       |
  | 维护成本 | 相对复杂                    | 相对容易                         |

  #### 总结：

  整体而言，单页面应该更占优势。而单页面应用的实现，就是通过路由来实现。在 Vue 中，通过 VueRouter 实现。

  ##### 前端路由本质：导航链接（path）与组件（component） 的对应关系。

SPA：单页面应用的本质： path 改变，页面中渲染不同的组件。

需要开发人员自己配置相应的路由规则

Vue Router 管理所有的路由规则：

```bash
[
    /index    加载 index.vue

    /list     加载 list.vue

    /news     加载 news.vue

    .....
]
```

### 总结：

1. 前端路由：为了实现 SPA（Single Page Application）单页面应用。
2. 整个应用只有一个完整的页面：index.html
3. 点击页面中 导航链接，页面不会重新刷新，只会使页面局部刷新
4. Vue 中的路由器 Vue Router 管理着：导航链接 和 组件 的对应关系（path 对应 具体的 component）
5. 组件内部的数据通过发送网络请求获取并展示

## 2、路由安装

### 2.1 简介

https://v3.router.vuejs.org/zh/

 ![logo](./images/router.png)

Vue Router 是 [Vue.js (opens new window)](http://cn.vuejs.org/)官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。

### 2.2 概念区分

#### 非路由组件 和 路由组件

##### 非路由组件 - `/components`

作用：可以声明 多个 组件，这些组件，可以在 project 中，反复复用，以实现 代码的 可复用性（DRY - Don't Repeat Yourself）。

##### 路由组件 - `/views`

作用：/views 中的一个组件，对应 一个 路由的 path。path 发生变化，即 渲染 对应的组件，之前被渲染的组件 即会被 销毁。

### 2.3 路由安装步骤（非脚手架）：

1. 安装路由

   npm i vue-router@3.5 -S

2. 引入路由插件 ==src/router/index.js==:

   ```js
   // 引入路由插件
   import VueRouter from "vue-router";

   // 安装路由  install（）
   Vue.use(VueRouter);
   ```

3. 定义(views)并且引入路由组件 ： ==router/index.js==:

   ```js
   //引入路由组件
   import Home from "../views/Home.vue";
   ```

4. 定义路由表（配置路由规则，路由，key-value）

   ```js
   // 4、定义路由规则
   const routes = [
     {
       path: "/home", //path： 路径
       component: Home,
     },
   ];
   ```

5. 创建 VueRouter 实例，并导出

   ```js
   const router = new VueRouter({
     routes: routes,
   });
   //导出路由实例
   export default router;
   ```

6. 主文件导入路由实例，并挂载路由

   ```js
   import router from "./router";

   new Vue({
     render: (h) => h(App),
     router,
   }).$mount("#app");
   ```

7. 定义路由出口（展示区域，舞台） ==App.vue==

   ```html
   <router-view></router-view>
   ```

8. 路由导航 App.vue

   ```html
   <!-- 路由导航 -->
   <router-link to="/home">Home</router-link> |
   
   <!-- 路由出口 -->
   <router-view />
   ```

### 2.3 同步导入 组件 VS 异步导入组件

```js
// 同步导入：
// `import` 关键字，引入 路由组件
// 引入的是 Home 组件
// 「同步加载」，即 刷新页面的时候，即加载本组件
import HomeView from "../views/HomeView.vue";



// 异步导入：
  {
    path: "/about",
    name: "about", // 注：name 不是 必选项

    /* 懒加载/异步加载 的好处：
      1. 首屏加载（首页），不需要加载对应的 组件，点击/输入 对应的 path ，才进行组件的加载。
        -> 避免了 首屏白屏。

        首屏白屏：
          首页的时候，需要 同步 import 太多组件，导致 CPU/内存，消耗过大。
            才导致的白屏。

      2. 点击/输入 对应的 path，才 import 对应的 路由组件。
        避免 首屏加载过多，导致白屏。

    */
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"), // 异步导入
  },


  // 总结：vue 的路由配置中： 非首页的 路由组件，建议统一使用 `异步加载`。
```

### 2.4 案例：在 vue 中，增加 “新页面” - 新闻页：

#### views/News.vue:

```vue
<template>
  <div class="news">
    <h1>我是新闻页~~~</h1>
  </div>
</template>

<script>
export default {
  name: "NewsView",
};
</script>
```

#### router/index.js:

```js
  {
    // 若 url 显示 `/news`，则 渲染 `新闻组件`
    path: "/news",
    component: () => import("../views/NewsView.vue"),
  },
```

#### App.vue:

```vue
<template>
  <div id="app">
    <div>
      <button @click="handleToPath('/')">toHome</button>
      <button @click="handleToPath('/about')">toAbout</button>
      <button @click="handleToPath('/news')">toNews</button>
    </div>
    <nav>
      <!-- 
        <router-link> 本质是 <a> 点击其标签，进行 url 的 path 更改 
        -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/news">News</router-link> |
    </nav>

    <!-- 
      <router-view /> 作用：
        路由组件，渲染在 <router-view /> 其中。
      
     -->
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    handleToPath(path) {
      // 是 路由跳转的 最常用 写法！
      this.$router.push(path);
    },
  },
};
</script>
```

### 最常用的 路由跳转

```js
// 路由跳转，最常用的方法：

this.$router.push(path);
```

#### 总结：

1. 路由组件通常都放到`pages`或者`views`文件夹下，非路由组件通常放到`components`文件夹下
2. 通过路由切换，展示的路由组件，默认是被重新挂载，不展示的路由组件默认是被卸载的，下一次切换再重新挂载
3. 每个路由组件都有自己的`$route`属性，里面存放着自己的路由信息
4. 整个应用只有一个路由器实例 router，可以在路由组件中通过`$router`获取
5. 组件中，使用 `this.$router.push(path)` 可以实现路由跳转

## 3、案例：登录成功，跳转至用户详情页

```
// 案例描述：
// 1）在 `/login` 页面 进行 「用户名」和「密码」的输入， 点击提交，验证通过，则跳转至 `/user-details` 用户详情页面
// 2）若 用户已经登录（token），则 用户详情 根据接口，显示用户详情的数据
// 3）若 用户并未登录，则 alert 告知用户未登录，并跳回 登录页面，引导用户登录

```

## 4、动态路由匹配

作用：路由跳转时，进行 传参

应用场景：不同“入口” 进入 同一路由组件，有不同的显示。

![image-动态路由](./images/动态路由-1.png)

![img](./images/动态路由-2.png)

#### 路由传参：

分为两种情况：params 传参 和 query 传参

ajax 里的 params 参数：localhost:3000/zhangsan/001

ajax 里的 query 参数：localhost:3000?name=zhangsan&id=001

### 4.2 params 传参

ajax 里的 params 参数：localhost:3000/zs/001

#### 路由跳转：

```vue
<!-- params to属性字符串写法 -->
<router-link to="/user/zhangsan/001">User 1</router-link>
|
<router-link to="/user/lisi/002">User 2</router-link>
|
```

#### 路由配置 router/index.js

```js
// 定义路由表
const routes = [
  //{},{},{}.....
  {
    // params 动态路由  以冒号开头  /路径/:参数/:参数
    path: "/user/:name/:id",
    name: "user",
    component: () => import("../views/User.vue"),
  },
];
```

#### 接收参数 User.vue：

```vue
<div>
    <H2>User</H2>
    <p>name:{{ $route.params.id }}----{{ $route.params.name }}</p>
  </div>
```

```js
created() {
    console.log(this);
    // 获取参数  {参数：值,id:123,name:''}
    console.log(this.$route.params);
},
```

### 4.2 query 传参

参数会跟在 url 后面，不需要修改路由规则的配置

#### 路由跳转

```vue
<!-- query传参：字符串写法 -->
<!-- 静态写法 -->
<router-link to="/detail?id=001&title=hello">query传参-商品详情-1</router-link>
|
<router-link to="/detail?id=002&title=hi">query传参-商品详情-2</router-link>
|
```

#### 路由配置 router/index.js:

```js
// 定义路由表
const routes = [
  //{},{}.....
  {
    // 动态路由  以
    path: "/detail", //地址
    name: "detail",
    component: Detail,
  },
];
```

#### 接收参数 Detail.vue：

```vue
<p>id---{{ $route.query.id }}</p>
<p>title---{{ $route.query.title }}</p>
```

#### 总结：

1. 配置动态路由，声明接收 params 参数：

   ```js
   {
       // params 动态路由  以冒号开头  /路径/:参数/:参数
       path: "/user/:id/:name", //地址
       name: "yonghu",
       component: User,
     },
   ```

2. params 传参特点：/user/参数 1/参数 2 to="/user/123/zhangsan"

3. 接收参数：

   ```js
   $route.params.id;
   $route.params.title;
   ```

4. 对比 query 传参：

   parms 参数：属于路径当中的一部分，需在在路由中进行配置

   query 参数：不属于路径当中的一部分，不需在在路由中进行配置

## 5、嵌套路由

以 element 官网举例：https://element.eleme.cn/#/zh-CN

![嵌套路由2](./images/嵌套路由2.png)

#### 路由配置 router/index.js

```js
  {
    path: "/nest",
    component: () => import("../views/Nest/index.vue"),
    children: [
      {
        path: "nest1", //访问  /nest/nest1
        component: () => import("../views/Nest/Nest1.vue"),
      },
      {
        path: "nest2", //访问  /nest/nest2
        component: () => import("../views/Nest/Nest2.vue"),
      },
    ],
  },
```

#### Nest.vue

路由跳转要写完整路径，子路由前面带上父路由

```vue
<template>
  <div>
    <h1>嵌套路由页面</h1>
    <main>
      <div class="menu">
        <!-- 路由导航 -->
        <ul>
          <li><router-link to="/nest/nest1">子路由1</router-link></li>
          <li><router-link to="/nest/nest2">子路由2</router-link></li>
        </ul>
      </div>
      <!-- 路由出口 -->
      <div class="view">
        <router-view />
      </div>
    </main>
  </div>
</template>
```

## 6、编程式导航

声明式导航：`<router-link>`

编程式导航：JS 控制跳转

### 6.1 router.push

除了使用 `<router-link>` 创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，通过编写代码来实现。

```js
router.push(location, onComplete?, onAbort?)
```

**注意：在 Vue 实例内部，你可以通过 `$router` 访问路由实例。因此你可以调用 `this.$router.push`。**

想要导航到不同的 URL，则使用 `router.push` 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。

当你点击 `<router-link>` 时，这个方法会在内部调用，所以说，点击 `<router-link :to="...">` 等同于调用 `router.push(...)`。

| 声明式                      | 编程式             |
| --------------------------- | ------------------ |
| `<router-link :to="...  ">` | `router.push(...)` |

该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如：

```js
// 字符串（这种写法 最常用）
router.push("home");

// 对象
router.push({ path: "home" });

// params方式： 命名的路由 给路由规则加个名字    /user/123/zhangsan
router.push({ name: "user", params: { userId: "123" } });

// 带查询参数，变成 /register?plan=private&ws=apple
router.push({ path: "register", query: { plan: "private" } });
```

### 6.2 router.replace

作用（与 push 的区别）：不会有 历史记录（history）。

### 6.3 forward、back、go

forward：前进

back：后退

go：这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 `window.history.go(n)`。

例子

 ![logo](./images/go.png)

## 7、命名路由、重定向

### 7.1 命名路由

有时候，通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候。你可以在创建 Router 实例的时候，在 `routes` 配置中给某个路由设置名称。

```diff
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
+     name: 'user', // name 也可以进行路由跳转
      component: User
    }
  ]
})
```

```js
this.$router.push({ name: "user" });
```

### 7.2 重定向

#### 介绍

重定向也是通过 `routes` 配置来完成，下面例子是从 `/a` 重定向到 `/b`：

```js
const router = new VueRouter({
  routes: [
    // 只要 用户访问了 /a 的 path，会被自动重定向到 '/b'
    { path: "/a", redirect: "/b" },
  ],
});
```

#### 重定向的常用场景：- `/404`

```js
const router = new VueRouter({
  routes: [
    {},
    ...// 其他路由

    { path: "/404", component: () => import("../views/404.vue") },

    // '*' 表示 通配符 所有
    // 将所有的 无效路由，重定向到 `/404` 对应的 组件
    { path: "*", redirect: "/404" }, // 注：一定要放在数组的 最后
  ],
});
```

## 8、路由组件传参

### 8.1 介绍

==耦合度越低越好==

在组件中使用 `$route` 会使之与其对应路由形成高度 `耦合`，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。

使用 `props` 将 组件 和路由解耦：

##### router/index.js

```diff
{
  // 动态路由  以冒号开头  /路径/:参数/:参数
  path: '/user/:id/:name', //地址
  name: 'user',
  component: User,
+  // 第一步：支持动态路由传参
+  props: true
 }
```

如果 `props` 被设置为 `true`，`route.params` 将会被设置为组件属性。

##### User.vue

```diff
<script>
export default {
+  // 第二步：
+  props: ["id", "name"],

}
```

这样你便可以在任何地方使用该组件，使得该组件更易于重用和测试。

#### 第一种：布尔值写法

会把该路由组件收到的==所有 params 参数==，以 props 的形式传递给组件

##### 弊端：

只能传递 params 参数，不能传递 query 参数

#### 第二种：对象写法（不推荐使用）

props 值为对象，对象中所有的 key-value 组合都会通过 props 传给组件

```js
{
    // params 动态路由  以冒号开头  /路径/:参数/:参数
    path: '/user/:id/:name',
    name: 'yonghu',
    component: () => import('@/views/User.vue'),
    // 第二种写法：props值为对象，对象中所有的key-value组合都会通过props传给组件
    props: { a: '1',b:'2' } // 则 a / b 的数据，可以传递给组件
  }
```

##### 弊端：

传递的是死数据，无法传递动态参数，所以很少使用。

#### 第三种：函数写法（推荐使用）

props 值为函数，返回的对象通过 props 传递给组件，灵活，推荐使用

```js
// router/index.js
{
    path: "/user",
    component: () => import("@/views/User.vue"),
    props(route) {
      return {
        id: route.query.id,
        name: route.query.name,
      };
    },
  },


 // 路由跳转
    this.$router.push({
      path: "/user",
      query: {
        id: "idxxx",
        name: "nameyyy",
      },
    });
```

## 9、路由模式

#### 2 种 路由模式

1. 默认 hash（哈希） 模式 http://yoursite.com/#/user/id有#

   `#` 及其后面的内容就是 hash 值

   原理：`window.onhashchange = 回掉函数;` 当 hash 路由改变，会触发回调函数。

   hash 值最大的特点：hash 值不会包含在 http 请求中，即不会作为路径的一部分发给服务器。

2. history 模式 http://yoursite.com/user/id 没有#

   原理： H5 的 `history`

   注意：

   ==使用这个 history 模式 在发布项目到线上的时候，需要后台的支持。==

#### 语法配置

```js
const router = new VueRouter({
    mode: 'history',
    routes: [...]
})
```

##### 后端配置例子

https://v3.router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90

## 10、导航高亮

Router-link 默认携带 class：router-link-active 和 router-link-exact-active

## 11、路由导航守卫

### 11.1 简介

**作用**：拦截，对路由进行权限控制

**原理**：与 axios 的拦截器原理一致。

**分类：**全局守卫（3 个）、路由独享守卫（1）个、组件内守卫（3 个）

**原则**：要么别写，写了必须要有放行 next()

### 11.2 全局前置守卫（重点）

你可以使用 `router.beforeEach` 注册一个全局前置守卫：

初始化的时候调用、每次路由切换之前被调用

==注意：只要发生路由跳转，都会被拦截，都会走全局前置守卫==

 router.beforeEach 注册一个全局前置守卫

```js
const router = new VueRouter({ ... })

//注册一个全局前置守卫
// 本守卫的作用： 在进入 路由之前，先执行 beforeEach 的回调函数
router.beforeEach((to, from, next) => {
  // ...
})
```

当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 **等待中**。

每个守卫方法接收三个参数：

- **`to: Route`**: 即将要进入的目标 [路由对象](https://router.vuejs.org/zh/api/#路由对象)
- **`from: Route`**: 当前导航正要离开的路由
- **`next: Function`**: 一定要调用该方法来 **resolve** 这个钩子。执行效果依赖 `next` 方法的调用参数。
  - **`next()`**: 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 **confirmed** (确认的)。
  - **`next(false)`**: 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 `from` 路由对应的地址。
  - **`next('/')` 或者 `next({ path: '/' })`**: 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 `next` 传递任意位置对象，且允许设置诸如 `replace: true`、`name: 'home'` 之类的选项以及任何用在 [`router-link` 的 `to` prop](https://router.vuejs.org/zh/api/#to) 或 [`router.push`](https://router.vuejs.org/zh/api/#router-push) 中的选项。
  - **`next(error)`**: (2.4.0+) 如果传入 `next` 的参数是一个 `Error` 实例，则导航会被终止且该错误会被传递给 [`router.onError()`](https://router.vuejs.org/zh/api/#router-onerror) 注册过的回调。

 **确保 `next` 函数在任何给定的导航守卫中都被严格调用一次。它可以出现多于一次，但是只能在所有的逻辑路径都不重叠的情况下，否则钩子永远都不会被解析或报错**。

> 案例：登录验证
>
> 举例：若用户 没有登录，还要访问 某些页面(路由跳转至某些页面)，可以直接在 拦截器中，将用户的访问，直接重定向到 登录页面
>
> ```js
> router.beforeEach((to, from, next) => {
>   // 如果是 去往 登录页直接 “放行”
>   if (to.path === "/login") {
>     next();
>     return;
>   }
>
>   // 模拟 未登录
>   const isLogin = false;
>
>   // 若未登录，去往其他页面，则会被 重定向至 登录页面
>   if (!isLogin) {
>     alert("你未登录，请登录");
>     next("/login");
>   } else {
>     next();
>   }
> });
> ```

### 11.3 全局解析守卫（了解）

 在 2.5.0+ 你可以用 `router.beforeResolve` 注册一个全局守卫。这和 `router.beforeEach` 类似，区别是在导航被确认之前，**同时在所有组件内守卫和异步路由组件被解析之后**，解析守卫就被调用。

### 11.4 全局后置钩子

初始化的时候调用、每次路由切换之后被调用

你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 `next` 函数也不会改变导航本身：

```js
router.afterEach((to, from) => {
  // ...
});
```

### 11.5 路由独享的守卫（1 个）

beforeEnter

你可以在路由配置上直接定义 `beforeEnter` 守卫：

```js
const router = new VueRouter({
  routes: [
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),

      // 路由独享守卫====》针对这一条路由规则
      beforeEnter: (to, from, next) => {
        // ...
        console.log("路由独享守卫-----about");
        next();
      },
    },
  ],
});
```

这些守卫与全局前置守卫的方法参数是一样的。

### 11.6 组件内的守卫（3 个）

最后，你可以在路由组件内直接定义以下路由导航守卫：

- `beforeRouteEnter` 读不到 this
- `beforeRouteUpdate` (2.2 新增)
- `beforeRouteLeave`

```js
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  },
};
```

### 总结：

**作用**：拦截，对路由进行权限控制

**分类：**全局守卫（3 个）、路由独享守卫（1）个、组件内守卫（3 个）

**原则**：要么别写，写了必须要有方向 next()

### 11.8 路由 元 信息

#### 介绍

定义路由的时候可以配置 `meta` 字段：

作用：可以给每个路由（route）配置单独的 信息/标记。

 标记![logo](./images/meta.png)

全局前置守卫里拦截判断：

```js
//全局前置守卫
router.beforeEach((to, from, next) => {
  //1. 判断将要去的路由组件是否需要登录
  if (to.meta.requiresAuth) {
    //true
    //2. 需要登录-- 再判断是否已经登录了
    //判断登录状态 token
    const token = localStorage.getItem("token"); // 获取 token信息
    if (token) {
      //有 token信息，表示已经登录了，直接放行
      next();
    } else {
      //没有 token信息，没登录，去登录页
      next("/login");
    }
  } else {
    //不需要登录
    next();
  }
});
```

# 五、状态 管理

## 回顾：组件通信方式：

1. 父传子：props

2. 子传父：自定义事件： this.$emit v-on

3. 兄弟： 父组件做中转 子 -> 父 -> 子

4. $refs.xx，父可以获取 子组件的 data 和 method

5. 事件总线机制

   -> 痛点：管理不集中

6. Vuex -> 任意组件

## 1、Vuex 介绍

### 1.1 简介

Vuex 是一个专为 Vue.js 应用程序开发的 **状态管理模式**。它采用==集中式存储==管理应用的所有组件的状态，并以相应的规则保证状态以一种==可预测==的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 [devtools extension (opens new window)](https://github.com/vuejs/vue-devtools)，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。

 https://v3.vuex.vuejs.org/zh/

![](./images/vuex.png)

### 1.2 vuex 原理图

 ![logo](./images/vuex2.png)

## 2、什么情况下应该使用 Vuex？

Vuex 可以帮助我们管理共享状态，并附带了更多的概念和框架。这需要对短期和长期效益进行权衡。

 如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择.

## 3、store

### 3.1 介绍

 每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的**状态 (state)**。Vuex 和单纯的全局对象有以下两点不同：

1. Vuex 的状态存储是`响应式`的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
2. 你 不能 直接改变 store 中的状态（state）。改变 store 中的状态的唯一途径就是显式地**提交 (commit) mutation**。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用

### 3.2 vuex 的作用/优势：

1. 状态(state) 的集中管理
2. 状态 具有响应性

### 3.3 核心概念：

#### 3.3.1 state

提供唯一的公共数据源，需要共享的数据都放到 store 的 state 中

强调：不能直接改变 state 的数据

##### 定义 state

```js
// /store/index.js
const store = new Vuex.Store({
  state: {
    count: 0,
  },
});
```

##### 访问数据第一种方式：$store.state.名称

JS 中：

```js
this.$store.state.count;
```

HTML 模板当中：

```vue
<p>访问state中数据的第一种方式: 
     {{$store.state.count}}---{{this.$store.state.count}}</p>
```

##### 访问数据第二种方式：辅助函数

```js
// 1、按需引入辅助函数
import { mapState } from "vuex";
 computed: {
    // ** 写法1：映射成当前组件需要的计算属性 【常用】   ...mapState(['','',''])
    ...mapState(["count"]),

    // 写法2：mapState 对象写法（作用：对 state 的数据 进行 “重命名”）
    ...mapState({
      num: 'count' // 即  this.num 可以获取到 $store.state.count 的值
    }),

    // 写法3：对state 实现 计算属性的写法
    ...mapState({
      // mapState 函数写法:可以访问data数据
      // 注：也可对 state 的数据 进行 “再加工”
      count22: state => state.count,
    }),
  },
  mounted() {
    console.log(this.count);
  }
```

#### 3.3.2 Mutation

更改 Vuex 的 store 中的 状态 的 ==唯一方法== 是提交 mutation （变异）

强调：mutation 是唯一 可以改变 state 中数据的方法

##### 定义 mutation

```js
 mutations: {
    // mutation是一个方法，在此可以定义多个mutation
    // 1、定义  mutation   作用：修改state里的数据
    updateCount(state, value) {
        console.log('updateCount mutation 被调用了')
        state.count += value
    }
  }
```

##### 第一种触发 mutation 的方法：$store.commit

```js
methods: {
    add() {
      // 触发mutation的第一种方式 this.$store.commit('mutation名字')
      this.$store.commit("updateCount", 3);
    }
  }
```

##### 第二种触发 mutation 的方法：辅助函数

映射为当前组件所需要的 methods 方法：

```js
// 1. 从 vuex 中按需导入 mapMutations 函数
import { mapMutations } from "vuex";
```

```js
// 2. 将指定的 mutations 函数，映射为当前组件的 methods 函数
methods: {
 ...mapMutations(['updateCount'])
}
```

#### 3.3.3 Action

- 说明

  Action 用于处理 异步任务。如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，但是在 Action 中还是要通过触发 Mutation 的方式间接变更数据。

- 注意

  在 actions 中，不能直接修改 state 中的数据；

  必须通过 context.commit() 触发某个 mutation 才行

##### 定义 action

```js
const store = new Vuex.Store({
  // ...省略其他代码
  mutations: {
    updateCount(state, value) {
      console.log("ADD mutation 被调用了");
      state.count += value;
    },
  },

  // 放多个action,每个action都是响应组件中用户动作的方法
  actions: {
    // 延迟加
    delayAdd(context, value) {
      console.log("delayAdd action 被调用了--延迟加");
      setTimeout(() => {
        context.commit("updateCount", value);
      }, 2000);
    },
  },
});
```

##### 触发 actions 的第一种方式：$store.dispatch

```js
// 组件中：触发 Action
methods: {
  handle() {
    // 触发 actions 的第一种方式
    // 强调：通过 dispath 触发 action 的定义
    this.$store.dispatch('delayAdd', /*本实参值被赋值给 value*/)
  }
}
```

##### 触发 actions 的第二种方式：辅助函数

- 实现

  ```js
  // 1. 从 vuex 中按需导入 mapActions 函数
  import { mapActions } from "vuex";
  ```

  通过刚才导入的 mapActions 函数，将需要的 actions 函数，映射为当前组件的 methods 方法：

  ```js
  // 2. 将指定的 actions 函数，映射为当前组件的 methods 函数
  methods: {
   	...mapActions(['delayAdd', '其他action...'])
  }
  ```

  3、直接调用

  ```html
  <button @click="delayAdd(3)">延迟2S执行</button>
  ```

#### 3.3.4 Getter

- 说明：

  Getter 用于对 state 中的数据进行“再加工”（其作用 等同于 计算属性）。

##### 定义 getter

```js
// 定义 Getter
const store = new Vuex.Store({
  state: {
    count: 2,
  },
  getters: {
    doubleCount: (state) => {
      return state.count * 2;
    },
  },
});
```

#####使用 getters 的第一种方式：$store.getters.名称

```js
// JS函数中
this.$store.getters.名称;
```

```html
<!-- template中 用法 -->
<h3>{{$store.getters.doubleCount}}</h3>
```

##### 使用 getters 的第二种方式：辅助函数

```js
import { mapGetters } from 'vuex'
computed: {
 ...mapGetters(['doubleCount'])
}
```

```html
<!-- template中 用法 -->
<h3>{{doubleCount}}</h3>
```

注：getter 与计算属性一样，其返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

### 3.5 Modules

#### （1）介绍

 由于使用 单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

 为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块。

所谓的模块管理，就是把状态拆分成一个个的模块进行管理。

```js
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

// module 的好处：方便管理 state 
store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

https://v3.vuex.vuejs.org/zh/guide/modules.html#%E6%A8%A1%E5%9D%97%E7%9A%84%E5%B1%80%E9%83%A8%E7%8A%B6%E6%80%81

#### （2）模板代码 （/store/modules/example.js）

```js
// *** 在组件中 的用法 *** eg:

// import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
// computed: {
//   ...mapState("example", ["count"]),
//   ...mapGetters("example", ["squareCount"])
// }
// methods: {
//   ...mapActions("example", ["delayIncrement"]),
//   ...mapMutations("example", ["increment"]),
// }

// *** 在组件中 的用法 *** eg:

export default {
  namespaced: true, // 强调：必须 设该 属性为 true
  state: {
    count: 11,
  },
  getters: {
    squareCount: (state) => state.count ** 2,
  },
  mutations: {
    increment(state, value) {
      state.count += value;
    },
  },
  actions: {
    // 异步操作
    delayIncrement({ commit }, value) {
      setTimeout(() => {
        // 异步时间到了，触发 对应 的 mutation 方法
        commit("increment", value);
      }, 1000);
    },
  },
};
```

## 4、目录结构

Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：

1. 应用层级的状态应该集中到单个 store 对象中。
2. 提交 **mutation** 是更改状态的唯一方法，并且这个过程是同步的。
3. 异步逻辑都应该封装到 **action** 里面。

只要你遵守以上规则，如何组织代码随你便。如果你的 store 文件太大，只需将 action、mutation 和 getter 分割到单独的文件。

对于大型应用，我们会希望把 Vuex 相关代码分割到模块中。下面是项目结构示例：

```bash
├── index.html
├── main.js
├── api
    └── modules
        ├── test.js       # 测试模块
        └── user.js       # 用户相关模块
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```

```js
import Vue from "vue";
// 2、导入Vuex，并且安装到项目中
import Vuex from "vuex";
// 安装
Vue.use(Vuex);

import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import cityModule from "./module/cityModule";
import userModule from "./module/userModule";
import example from "./module/example";

// 3、创建Store实例
const store = new Vuex.Store({
  // 开启严格模式
  strict: true,
  // 共享数据
  state,
  mutations,
  actions,
  getters,
  modules: {
    example,
    cityModule,
    userModule,
  },
});

// 导出实例
export default store;
```

# 补充：ElementUI

https://element.eleme.cn/#/zh-CN/component/installation

# 六、Vue3

## 1、Vue3 快速上手

## 1.1 Vue3 介绍

### Vue3 现状

- 2020 年 09 月 18 日，发布 vue3.0 版本。代号：One Piece（海贼王 ）
- 现在主流组件库都已经发布了支持 vue3.0 的版本，其他生态也已经非常成熟

### Vue3 优势

- 性能提升（体积更小，速度更快）

  打包体积减少 41%

  内存减少 54%

  初次渲染快 55%，更新渲染快 133%

  https://github.com/vuejs/core/releases/tag/v3.0.0

  ....

- 源码升级

  使用 Proxy 代替 defineProperty 实现响应式

  重写 虚拟 DOM，虚拟 DOM 的对比更快了，实现 Tree-Shaking

  ....

- 更好的支持 Typescript

  最大的亮点。对类型进行更加严格的校验。以后肯定是拥抱 TS 的前端时代。

- ** 组合式 API（Composition API）【重点关注 】**

  好处：能够更好的组织逻辑，封装逻辑，复用逻辑：

  关键技术：

  - setup 配置
  - ref 和 reactive
  - watch 和 watchEffect
  - Provide 和 inject

### Vue3 与 Vue2 的 关键差别：

- 关于响应式
  - Vue2 使用 `Object.defineProperty`
  - Vue3 使用 `Proxy`
- 关于 编程范式：
  - Vue2 只支持「面向对象」的编程范式
  - Vue3 同时支持「面向对象」和「面向函数」两种编程范式
- 关于组件库：
  - Vue2 使用 `ElementUI`：https://element.eleme.cn/
  - Vue3 使用 `ElementPlus`：https://element-plus.gitee.io/

### 官网：

- 英文网站：https://v3.vuejs.org/
- 中文：https://cn.vuejs.org/

## 1.2 项目创建

### 1.2.1 vue-cli 创建

https://cli.vuejs.org/zh/

https://cli.vuejs.org/zh/guide/creating-a-project.html

1. 安装最新版本的 Vue-cli 工具

```bash
# 查看vue-cli 版本，确保在4.5.0以上
vue -V
# 或者
vue --version

# 安装或升级脚手架
npm install -g @vue/cli

# 创建项目
vue create vue3-cli-base
```



### 1.2.2 vite 创建

创建项目：

```bash
#vue2
vue create <project-name>

#vue3 vue官方创建vue3项目的命令，基于vite打包的
npm init vue@latest

# 创建一个纯的vite项目
npm init vite@latest
```

![创建Vue3项目](/Users/mark/Downloads/day22课件/images/创建Vue3项目.png)

![vite项目](/Users/mark/Downloads/day22课件/images/vite项目.png)

并没有 node_modules 文件

```bash
npm i
```

启动

```bash
npm run dev
```

#### 关于 vite

什么是 vite？—— 新一代前端构建工具。 Webpack vue-cli

官方文档：https://vitejs.cn

- 它是一个更加轻量（热更新 速度快，打包构建速度快）的 vue 项目脚手架工具。

- 相对于 vue-cli 它默认安装的插件非常少，随着开发过程依赖增多，需要自己额外配置。

- 优势：

  - 开发环境中，无需打包操作，可快速的冷启动。
  - 轻量快速的热重载（HMR）。
  - 真正的按需编译，不再等待整个应用编译完成。

- 传统构建 与 vite 构建对比图

<img src="images/bundler.png" alt="bundler" style="zoom: 40%;" />

<img src="images/esm.png" alt="esm" style="zoom:43%;" />

现用现分析，动态引入和代码分割。

## 2、选项式 API VS 组合式 API

## 2.1 选项 API 和组合 API

Vue3 支持两种代码风格，选项式 API 和组合式 API，当然两种代码风格都可以完成一样的功能，不同的是书写风格上的差异。

**选项式** **API (Options API)**

使用选项式 API，我们可以用包含多个选项的对象来描述组件的逻辑，例如 data 、 methods 和 mounted 。选项所定义的属性都会暴露在函数内部的 this 上，它会指向当前的组件实例。

**组合式** **API (Composition API)**

通过组合式 API，我们可以使用导入的 API 函数来描述组件逻辑。

![选项API和组合API2](/Users/mark/Downloads/day22课件/images/选项API和组合API2.png)

每一个功能模块的代码颜色一样，左边是 Options API，一个功能的代码零散的分布在 data，methods 等配置内，维护起来很麻烦，而右边的 Compositon API 就不一样了，每个功能模块都在一起维护。

其实还可以更进一步，如果每个颜色块代码，我们都拆分出去一个函数，我们就会写出类似上面右侧风格的代码，每个数据来源都清晰可见，而且每个功能函数都可以在各个地方复用。

![选项API和组合API](/Users/mark/Downloads/day22课件/images/选项API和组合API.png)

![基于函数组合的API](/Users/mark/Downloads/day22课件/images/基于函数组合的API.png)

**选项式** **API (Options API)**

```vue
<template>
  <div>
    <h2>Vue2计数器</h2>
    <p>count：{{ count }}</p>
    <button @click="count += 1">count++</button>
  </div>
</template>

<script>
export default {
  name: "Vue2Domo",
  data() {
    return {
      count: 0,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
```

**组合式** **API (Composition API)**

```vue
<template>
  <h3>Vue3计数器</h3>
  <p>Count:{{ count }}</p>
  <button @click="addHandler">增加</button>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0);

    const addHandler = () => {
      count.value++;
    };

    return {
      count,
      addHandler,
    };
  },
};
</script>
```

#### 两种风格区别

##### 选项式 API

在 vue2.x 项目中使用的就是 选项式 API 写法

优点：易于学习和使用，写代码的位置已经约定好了

缺点：代码组织性差，相似的逻辑代码不便于复用，逻辑复杂代码多了不好阅读

##### 组合式 API

在 vue3 中使用的就是 组合 API 写法

优点：功能逻辑复杂繁多情况下，各个功能逻辑代码组织再一起，便于阅读和维护

缺点：需要有良好的代码组织能力和拆分逻辑能力

为了能让大家较好的过渡到 vue3.0 的版本来，也支持 vue2.x 选项 API 写法

### 2.2.2 Vue3 响应式

要在组件模板中使用响应式状态，需要在 `setup()` 函数中定义并返回。

#### setup

1. Vue3 中一个新的配置项，值为一个函数。`setup` 是一个专门用于组合式 API 的特殊钩子函数

2. 所有的组合 API 函数都在此使用, 只在初始化时执行一次

3. 注意：

   - 只有 setup 函数中 return 的 对象属性才能在 template 中使用。

   - 尽量不要与 Vue2 选项式 API 混合使用

#### ref

- 作用: 定义一个数据的响应式

- 语法

  ```js
  const xxx = ref(initValue):
  ```

- 说明

  - 创建一个包含响应式数据的==引用(reference)对象（或者说 ref 对象）==
  - js 中操作数据: ` xxx.value`
  - 模板中操作数据: 不需要.value

- 实例对象 解释

  其构造函数是：`RefImpl`

  RefImpl：reference(引用) implement(实现) "**引用的实现**"

  构造函数 `RefImpl` 生成的对象，简称「引用对象」。

- `.value` 解释

  Vue 中 `Proxy` 或 ` Object.defineProperty` 的数据响应，本质都是 给对象的 key 绑定 setter 钩子函数，所以需要 `.value` 属性，才能实现数据的响应性。

- 注意：

  一般用来定义一个基本类型的响应式数据，也可以是对象类型

  基本类型数据：响应式仍然是 通过 `Object.defineProperty()` 的 getter 和 setter 实现

- 模板解析：

  模板在解析的时候，会判断是不是 ref 形式创建的数据，直接取出 value。所以在模板中使用的时候，省略 .value

![ref](images/ref.png)

##### 总结：

- 在 Vue3 中 ，想把普通的 number、string、Boolean 变成响应式的数据，就必须要借助 ref

- Vue3 里 ref 对基本类型数据实现响应式的原理，是通过 Object.defineProperty()，getter 和 setter 拦截来实现 .value

- ref 定义对象类型数据，底层原理是利用了 ES6 的的 Proxy 实现的响应式，而在 Vue3 中，对 Proxy 的操作封装在了一个叫做 reactive 的新函数中。

#### reactive

- 作用

  定义一个==对象类型==的响应式数据， 别用 reactive 定义基本类型数据

- 语法

  ```js
  // const 代理对象 = reactive(源对象)
  const proxyObj = reactive(obj);
  ```

  接收一个==普通对象(或数组)==，然后返回一个==响应式代理对象==

- 定义的响应式数据是“深层的”：会影响对象内部所有嵌套的属性

- 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的

- 代码

  ```vue
  <template>
    <h3>Vue3Reactive实现对象类型数据的响应式</h3>
    <p>姓名：{{ stu.name }}</p>
    <p>年龄：{{ stu.age }}</p>
    <p>英语：{{ stu.score.english }}</p>
    <p>数学：{{ stu.score.shuxue }}</p>
    <p>测试 c :{{ stu.a.b.c }}</p>
    <p>爱好：{{ stu.hobby }}</p>
    <p><button @click="change">修改name和age</button></p>
  </template>
  
  <script>
  import { reactive } from "vue";
  export default {
    setup() {
      // 处理对象  ref({}) 借助 reactive来实现的响应式
      // 代理对象  源对象
      let stu = reactive({
        name: "zhangsan",
        age: 18,
        score: {
          english: 19,
          shuxue: 99,
        },
        // 深层次
        a: {
          b: {
            c: 1,
          },
        },
        hobby: ["⚽️", "🏀", "🏓"],
      });
  
      // 定义方法
      const change = () => {
        stu.name = "李四";
        stu.age = 98;
        // reactive({})  修改里面的属性  不需要再 .value
        stu.score.english = 100;
        stu.hobby[1] = "篮球";
      };
  
      return { stu, change };
    },
  };
  </script>
  <style lang="" scoped></style>
  ```

#### 总结：

##### ref 和 reactive 的区别

ref：定义一个数据的响应式，number,string,boolean 得到的是：RefImpl 的实例，==引用对象== .value

reactive：定义复杂类型数据响应式，Object，Array 得到的是：Proxy 的实例，==代理对象==

##### 原理区别：

ref 处理基本数据类型，用的是 Object.defineProperty()，走的是 getter,setter，数据劫持

reactive 处理对象，数组类型，底层用的是 ES6 里的 Proxy，通过代理对象对源对象进行加工操作

### 2.2.3 Vue2 响应式原理

#### vue2 的响应式

对象类型：通过 `Object.defineProperty()` 对属性的读取或修改进行拦截(数据劫持)

数组类型：通过重写数组方法来实现拦截，对数组的变更方法进行了包装。

```js
Object.defineProperty(data, "count", {
  get() {},
  set() {},
});
```

存在问题：

1. 对象新增属性或者删除已有属性，界面不会更新

   解决办法：`this.$set(obj,'gender','女')`

2. 直接通过下标修改数组，界面也不会更新

   解决办法：`this.$set(arr,1,'🏀')`

### 2.2.4 Vue3 响应式原理

#### Vue3 响应式

- 通过 Proxy(代理): 拦截对 data 任意属性的任意(13 种)操作, 包括属性值的读写, 属性的添加, 属性的删除等...

  ref() 基本数据类型 Object.defineProperty()

  reactive({}) [] Proxy ref(null) ref([]) ==>proxy

- 通过 Reflect(反射): 动态对源对象的相应属性进行特定的操作

- 文档:

  - https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy

  - https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

    ```js
    //被代理
    const data = {
      name: "lucy",
      age: 19,
    };
    //proxyData 代理对象
    const proxyData = new Proxy(data, {
      // 拦截读取属性值
      get(target, prop) {
        console.log("触发了 getter 钩子");
        return Reflect.get(target, prop);
      },
      // 拦截设置属性值或添加新属性
      set(target, prop, value) {
        console.log("触发了 setter 钩子");
        return Reflect.set(target, prop, value);
      },
      // 拦截删除属性
      deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
      },
    });
    
    proxyData.name = "tom";
    ```

### 2.2.5 reactive VS ref

#### 定义：

ref：用来定义 基本类型数据；reactive：用来定义对象或数组类型数据(递归深度响应式)

ref 也可以用来定义对象或数组，内部自动通过 reactive 转为代理对象

#### 使用：

ref 定义的数据：操作数据需要 `.value`，模板中读取时不需要 `.value`

reactive 定义的数据：操作与读取数据都不需要 `.value`

#### 原理：

ref 通过 `Object.defineProperty()` 的 getter 和 setter 实现响应式。

reactive 通过 ES6 的 Proxy 实现响应式，并通过 Reflect 操作源对象内部的数据。

### `<script setup>`

在 `setup()` 函数中手动暴露大量的状态和方法非常繁琐。幸运的是，我们可以通过使用构建工具来简化该操作。当使用单文件组件（SFC）时，我们可以使用 `<script setup>` 来大幅度地简化代码。（只写 Vue3 代码）

```vue
<template>
  <h2>Vue3——Setup</h2>

  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <button @click="sayHi">打招呼</button>
</template>

<script setup>
// 定义数据
const username = "zhangsan";
const age = 18;

// 定义方法
function sayHi() {
  alert(`我是${username},今年${age}岁了！`);
}
</script>

<style lang="scss" scoped></style>
```

> 在指南的后续章节中，我们基本上都会在组合式 API 示例中使用单文件组件 + `<script setup>` 的语法，因为大多数 Vue 开发者都会这样使用。

## 2.2 计算属性

计算属性本身简化模板语法（{{}}）带来的复杂。

使用选项式 API 的时候，所有的计算属性都必须放在 computed 中，这样如果有很多计算属性就显得很臃肿，但如果使用 组合式 API，这个问题就迎刃而解了。

Vue3 的计算属性写法，完全可以提取到单独文件里去处理，处理完再引入。

### 选项 API\_计算属性

```vue
<template>
  <div>
    <h2>Vue2 的计算属性</h2>
    <p>{{ msg }}</p>
    <p>{{ reverseHello }}</p>
    <p>{{ info }}</p>
    <p>{{ reverseInfo }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello",
      info: "你好啊",
    };
  },
  computed: {
    //Vue2的 计算属性特别多，就会造成computed臃肿
    reverseHello() {
      return this.msg.split("").reverse().join("");
    },
    reverseInfo() {
      return this.info.split("").reverse().join("");
    },
  },
};
</script>

<style lang="scss" scoped></style>
```

### 组合 API\_计算属性

```vue
<template>
  <div>
    <h2>Vue3 的计算属性</h2>
    <p>{{ msg }}</p>
    <p>{{ reverseHello }}</p>
    <p>{{ info }}</p>
    <p>{{ reverseInfo }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { reverseStr } from "@/utils/reversedStr";

const msg = ref("hello");
const info = ref("你好呀");

const reverseHello = reverseStr(msg);

const reverseInfo = reverseStr(info);
</script>
```

提取到单独文件：

```js
import { computed } from "vue";

export const reverseStr = (str) => {
  return computed(() => {
    return str.value.split("").reverse().join("");
  });
};
```

## 2.3 侦听器

### 选项式 API\_侦听器

```vue
<template>
  <h2>Vue2侦听器</h2>
  <p><input type="text" v-model="keyword" /></p>
  <p>keyword:{{ keyword }}</p>
</template>

<script>
export default {
  data() {
    return {
      keyword: "1",
    };
  },
  // 侦听已有属性的变化
  watch: {
    // 常用写法：
    // keyword(newVal, oldVal) {
    //   console.log(newVal, oldVal);
    // },

    // 配置型 写法
    keyword: {
      immediate: true, //  立即监听
      deep: true, // 开启深层次检测，默认开启的是浅层次的监视
      handler(newVal, oldVal) {
        console.log("keyword变化了", newVal, oldVal);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
```

### 组合式 API\_侦听器

#### 监听 响应式数据

```vue
<template>
  <h2>Vue3侦听器</h2>
  <p><input type="text" v-model="keyword" /></p>
  <p>count：{{ count }}</p>
  <p><button @click="count++">count++</button></p>
</template>

<script setup>
import { ref, watch } from "vue";

const keyword = ref("keyword");

// 1、监听ref定义的响应式数据
// 两个参数：参数1：要侦听的数据  参数2：回调函数 参数3：监视的配置
watch(
  keyword,
  (newVal, oldVal) => {
    console.log("keyword 变化了：", newVal, oldVal);
  },
  { immediate: true }
);

const count = ref(0);

// 常用写法
watch(count, (newVal, oldVal) => {
  console.log("count 变化了：", newVal, oldVal);
});

// 2、监视ref定义的多个响应式数据
// watch([keyword, count], (newVal, oldVal) => {
//   console.log("keyword或count变化：", newVal, oldVal);
// });
</script>
```

### watchEffect 函数

watch 的作用：既要指明要监视的属性，也要指明监视的回调

watchEffect 的作用：

- 不用指明监视哪个属性，监视的回调中用到哪个属性，就监视哪个属性
- 默认初始时就会执行第一次, 从而可以收集需要监视的数据

类似计算属性：基于它的依赖进行缓存，依赖变化，重新计算。

计算属性 与 watchEffect 的区别：

- 计算属性，要有返回值
- 而 watchEffect，没有返回值，是监视到变化之后，做什么逻辑。

```vue
<template>
  <h2>Vue3侦听器</h2>
  <p><input type="text" v-model="keyword" /></p>
  <p>count：{{ count }}</p>
  <p><button @click="count++">count++</button></p>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const keyword = ref("keyword");
const count = ref(0);

watchEffect(() => {
  console.log("watchEffect", keyword.value, count.value);
});
</script>
```

####

## 2.4 生命周期

**回顾 vue2.x 生命周期钩子函数：**

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed

**Vue3 中可以继续使用 Vue2 中的生命周期钩子，但是有两个改名了：**

- beforeDestroy 改为了 beforeUnmount
- destroyed 改为了 unmounted

**Vue3 提供了 Composition API 形式的生命周期钩子，与 2.x 版本生命周期相对应**：

- `beforeCreate` -> 使用 `setup()`
- `created` -> 使用 `setup()`
- `beforeMount` -> `onBeforeMount`
- `mounted` -> `onMounted`
- `beforeUpdate` -> `onBeforeUpdate`
- `updated` -> `onUpdated`
- `beforeDestroy` -> `onBeforeUnmount`
- `destroyed` -> `onUnmounted`
- `errorCaptured` -> `onErrorCaptured`

#### 认识 vue3.0 生命周期钩子函数

- `setup` 创建实例前
- `onBeforeMount` 挂载 DOM 前
- `onMounted` 挂载 DOM 后
- `onBeforeUpdate` 更新前
- `onUpdated` 更新后
- `onBeforeUnmount` 卸载前
- `onUnmounted` 卸载后

![组件生命周期图示](/Users/mark/Downloads/day22课件/images/lifecycle.png)

#### 组合式 API\_生命周期

把生命周期钩子都放在 setup 里。

```vue
<template>
  <h3>Vue3 - 组合式API - 生命周期</h3>
  <p>{{ msg }}</p>
  <button @click="changeMsg">changeMsg</button>
</template>

<script setup>
import { ref } from "vue";
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

const msg = ref("1");
const changeMsg = () => {
  msg.value += "==";
};

// beforeCreate 和 created Vue3里并没有提供组合API的写法；即这两个放不到组合API里
// 注：直接使用 setup 钩子 替代 create 钩子
onBeforeMount(() => {
  console.log("onBeforeMount - 钩子执行");
});
onMounted(() => {
  console.log("onMounted - 钩子执行");
});

onBeforeUpdate(() => {
  console.log("onBeforeUpdate - 钩子执行");
});
onUpdated(() => {
  console.log("onUpdated - 钩子执行");
});

onBeforeUnmount(() => {
  console.log("onBeforeUnmount - 钩子执行");
});
onUnmounted(() => {
  console.log("onUnmounted - 钩子执行");
});

console.log("setup - 钩子执行");
</script>
```

#### 选项式 API\_生命周期

```vue
<template>
  <h3>Vue3 - 选项式API - 生命周期</h3>
  <p>{{ msg }}</p>
  <button @click="changeMsg">changeMsg</button>
</template>

<script>
export default {
  data() {
    return {
      msg: "1",
    };
  },
  methods: {
    changeMsg() {
      this.msg += "==";
    },
  },
  setup() {
    console.log("setup - 钩子执行");
  },
  beforeCreate() {
    console.log("beforeCreate - 钩子执行");
  },
  created() {
    console.log("created - 钩子执行");
  },
  beforeMount() {
    console.log("beforeMount - 钩子执行");
  },
  mounted() {
    console.log("mounted - 钩子执行");
  },
  beforeUpdate() {
    console.log("beforeUpdate - 钩子执行");
  },
  updated() {
    console.log("updated - 钩子执行");
  },
  beforeUnmount() {
    console.log("beforeUnmount - 钩子执行");
  },
  unmounted() {
    console.log("unmounted - 钩子执行");
  },
};
</script>
```

## 2.5 模板引用

虽然 Vue 的声明性渲染模型为你抽象了大部分对 DOM 的直接操作，但在某些情况下，我们仍然需要直接访问底层 DOM 元素。要实现这一点，我们可以使用特殊的 `ref` attribute：

读取 DOM

放在 DOM 元素上，获取 DOM 节点，放到组件上，获取子组件的实例，可以直接使用子组件的属性和方法

Vue2:

```js
this.$refs.box;
```

Vue3:

```vue
<template>
  <h3>Vue3 获取Dom 元素</h3>
  <div ref="box">Hello</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// 注：变量名 `box`， 必须与 ref 的属性值一致： `<div ref="box">Hello</div>`
const box = ref(null);

onMounted(() => {
  console.log(box.value);
});
</script>
```

## 2.6 组件通信\_props

### 选项 API_props:

父组件：

```vue
<template>
  <h2>Vue2 组件传递props</h2>
  <h3>父组件</h3>
  <p>msg:{{ msg }}</p>
  <ChildComp :msg="msg" />
</template>

<script>
import ChildComp from "./ChildComp.vue";
export default {
  components: {
    ChildComp,
  },
  data() {
    return {
      msg: "Vue2 父组件数据",
    };
  },
};
</script>
```

子组件：

```vue
<template>
  <h3>子组件</h3>
  <p>父组件传递过来的msg:{{ msg }}</p>
</template>

<script>
export default {
  props: ["msg"],
};
</script>
```

### 组合 API_props:

在使用 `<script setup>` 的单文件组件中，props 可以使用 `defineProps()` 宏来声明：

```vue
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  msg: String,
});

console.log(props.foo);
</script>
```

在没有使用 `<script setup>` 的组件中，prop 可以使用 [`props`](https://cn.vuejs.org/api/options-state.html#props) 选项来声明：

```js
export default {
  props: {
    msg: String,
  },
  setup(props) {
    // setup() 接收 props 作为第一个参数
    console.log(props.foo);
  },
};
```

注意传递给 `defineProps()` 的参数和提供给 `props` 选项的值是相同的，两种声明方式背后其实使用的都是 prop 选项。

#### 子组件：

```vue
<template>
  <h4>ChildComp 组件：{{ title }}</h4>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
```

#### 父组件：

```vue
<template>
  <ChildComp :title="msg" />
</template>

<script setup>
// Vue3 - <script setup> 中：引入组件不需要注册，直接使用
import ChildComp from "@/components/ChildComp.vue";

// 若 数据不需要响应式，则可以省略 ref
const msg = "vue3 msg";
</script>
```

## 2.7 组件通信\_自定义事件

### Vue2 自定义事件

```vue
<template>
  <div>
    <h3>Vue2 自定义事件</h3>
    <h3>Parent</h3>
    <ChildComp @sendMsg="getMsg" />
    <p>{{ message }}</p>
  </div>
</template>
<script>
import ChildComp from "./ChildComp.vue";

export default {
  data() {
    return {
      message: "",
    };
  },
  components: {
    ChildComp,
  },
  methods: {
    getMsg(data) {
      this.message = data;
    },
  },
};
</script>
```

子组件：

```vue
<template>
  <div>
    <h3>ChildComp</h3>
    <button @click="sendHandler">发送数据</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "子元素数据",
    };
  },
  methods: {
    sendHandler() {
      this.$emit("sendMsg", this.msg);
    },
  },
};
</script>
```

### Vue3 自定义事件

可以通过 [`defineEmits`](https://cn.vuejs.org/api/sfc-script-setup.html#defineprops-defineemits) 宏来声明需要抛出的事件：

```vue
<!-- 子组件 -->
<script setup>
import { defineEmits } from "vue";

// 注意：接收的是数组
const emit = defineEmits(["自定义事件类型"]);
</script>
```

#### 父组件：

```vue
<template>
  <h1>父组件：{{ msg }}</h1>
  <ChildComp @sendHandler="getFn" />
</template>

<script setup>
// Vue3 - <script setup> 中：引入组件不需要注册，直接使用
import ChildComp from "@/components/ChildComp.vue";
import { ref } from "vue";

const msg = ref("");

const getFn = (data) => {
  console.log("父组件中", data);
  msg.value = data;
};
</script>
```

#### 子组件：

```vue
<template>
  <h4>ChildComp 组件</h4>
  <button @click="fn">emit</button>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["sendHandler"]);

const fn = () => {
  emit("sendHandler", "子组件传递给父组件的数据");
};
</script>
```

## 2.8 组件通信\_事件总线

### Vue2\_事件总线

在 2.x 中通过 EventBus 的方法来实现组件通信

Vue3 不支持，当前 vue3 项目，无法演示

```js
var EventBus = new Vue()
Vue.prototype.$EventBus = this
...
this.$EventBus.$on()  this.$EventBus.$emit()
```

### Vue3_mitt

在 3.x 中移除了`$on`, `$off`等方法，而是推荐使用 mitt 方案来代替

```js
import mitt from "mitt";
const emitter = mitt();
// 挂载到 app 上
app.config.globalProperties.$mitt = mitter;

// 监听： listen to an event
emitter.on("foo", (e) => console.log("foo", e));
// 发射: fire an event
emitter.emit("foo", { a: "b" });
```

#### 使用 mitt 库

1. 安装：

   npm i mitt -S

2. main.js 中挂载

   ```js
   import mitt from "mitt";
   // mitt库默认导出的是一个函数，我们需要执行它从而得到事件总线的对象
   const mitter = mitt();
   const app = createApp(App);

   // 挂载到 app 上
   app.config.globalProperties.$mitt = mitter;

   app.mount("#app");
   ```

   也可以在单独的文件暴露出事件总线对象

   utils/eventbus.js:

   ```js
   // mitt库默认导出的是一个函数，我们需要执行它从而得到事件总线的对象
   /* eventbus.js */
   // 这里我们在js中暴露这个事件总线对象
   import mitt from "mitt";
   const emitter = mitt();
   export default emitter;
   ```

3. 在 A 组件中发射

   ```vue
   <template>
     <h3>A 组件</h3>
     <p>
       <button @click="sendMsg">发送数据</button>
     </p>
   </template>

   <script setup>
   import { ref, getCurrentInstance } from "vue";

   const msg = ref("A里的数据");
   const { proxy } = getCurrentInstance();

   const sendMsg = () => {
     proxy.$mitt.emit("send", msg);
   };
   </script>

   <style lang="scss" scoped></style>
   ```

4. B 组件中接收

   ```vue
   <template>
     <h3>B 组件</h3>
     <p>
       {{ message }}
     </p>
   </template>
   
   <script setup>
   import { getCurrentInstance, onMounted, ref } from "vue";
   
   const { proxy } = getCurrentInstance();
   const message = ref("");
   
   onMounted(() => {
     proxy.$mitt.on("send", (data) => {
       message.value = data.value;
     });
   });
   </script>
   
   <style lang="scss" scoped></style>
   ```

## 2.9 组合式函数

在 Vue 应用的概念中，“组合式函数”(Composables) 是一个利用 Vue 的组合式 API 来封装和复用**有状态逻辑**的函数。

或者叫做 自定义 Hook，

##### 什么是 Hook? 钩子

Hook 本质是一个函数。

组合式 API 的一部分灵感正来自于 React hooks，Vue 的组合式函数也的确在逻辑组合能力上与 React hooks 相近。

自定义 Hook：使用 Vue3 的组合 API 封装的可复用的功能函数

优势：封装复用代码， 让组合 API 逻辑更清楚易懂

### 案例： `useMouse`

基本步骤：

- 展示鼠标坐标 x y {}
  - 定义一个响应式数据对象，包含 x 和 y 属性。 ==>响应式数据对象
  - 在组件渲染完毕后，监听 window 的鼠标移动事件 ==>生命周期，挂载之后
  - 指定 move 函数为事件对应方法，在函数中修改坐标
  - 在 setup 返回数据，模版中使用

#### 代码：

```vue
<template>
  <div>
    <h2>获取鼠标位置</h2>
    <p>x:{{ mouse.x }}---y:{{ mouse.y }}</p>
  </div>
</template>

<script setup>
import { reactive, onMounted, onBeforeUnmount } from "vue";

function useMouse() {
  // 1、定义一个响应式数据对象，包含x和y属性
  const mouse = reactive({
    x: 0,
    y: 0,
  });
  // 2、监听document的鼠标移动事件  ==>事件绑定，
  onMounted(() => {
    window.addEventListener("mousemove", move);
  });
  // 3、move函数为事件对应方法
  const move = (e) => {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  };
  // 4、解绑事件
  onBeforeUnmount(() => {
    window.removeEventListener("mousemove", move);
  });

  return mouse;
}

const mouse = useMouse();
</script>
```

### vueUse 简介

https://vueuse.org/
