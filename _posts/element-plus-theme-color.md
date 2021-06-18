---
title: 'vite + vue3 + ts + element-plus 踩坑记录'
date: '2020-06-16'
author:
  name: Mekki
---

###

### 怎么修改 elementui 的主题颜色

#### 参考官网

Element Plus 的 theme-chalk 使用 SCSS 编写，如果你的项目也使用了 SCSS，那么可以直接在项目中改变 Element Plus 的样式变量。新建一个样式文件，例如 element-variables.scss，写入以下内容：

```javascript
/* 改变主题色变量 */
$--color-primary: teal;
/* 改变 icon 字体路径变量，必需 */
$--font-path: '~element-plus/lib/theme-chalk/fonts';
@import "~element-plus/packages/theme-chalk/src/index";
```

之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 Element Plus 编译好的 CSS 文件）：

```javascript
import Vue from 'vue'
import ElementPlus from 'element-plus'
import './element-variables.scss'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
```

**需要注意的是，覆盖字体路径变量是必需的，将其赋值为 Element Plus 中 icon 图标所在的相对路径即可。**

#### element-plus 报错

```javascript
Error: Can't find stylesheet to import.
  ╷
7 │ @import "~element-plus/packages/theme-chalk/src/index";
  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ╵
  src\element-variables.scss 7:9  root stylesheet
    at Object._newRenderError (E:\CMS-vite\node_modules\sass\sass.dart.js:13494:19)
    at Object._wrapException (E:\CMS-vite\node_modules\sass\sass.dart.js:13337:16)
    at StaticClosure._renderSync (E:\CMS-vite\node_modules\sass\sass.dart.js:13312:18)
    at Object.Primitives_applyFunction (E:\CMS-vite\node_modules\sass\sass.dart.js:1085:30)
    at Object.Function_apply (E:\CMS-vite\node_modules\sass\sass.dart.js:6003:16)
    at _callDartFunctionFast (E:\CMS-vite\node_modules\sass\sass.dart.js:7672:16)
    at Object.renderSync (E:\CMS-vite\node_modules\sass\sass.dart.js:7650:18)
    at scss (E:\CMS-vite\node_modules\@vue\compiler-sfc\dist\compiler-sfc.cjs.js:960:33)
    at preprocess$1 (E:\CMS-vite\node_modules\@vue\compiler-sfc\dist\compiler-sfc.cjs.js:1155:12)
    at doCompileStyle (E:\CMS-vite\node_modules\@vue\compiler-sfc\dist\compiler-sfc.cjs.js:1058:48) {
  formatted: "Error: Can't find stylesheet to import.\n" +
```

#### 解决方案

**~改成 node_modules/，安装 scss --dev**

```javascript
  $--color-primary: #fc9153;

	$--font-path: 'node_modules/element-plus/lib/theme-chalk/fonts';

	@import "node_modules/element-plus/packages/theme-chalk/src/index";

	@import 'node_modules/element-plus/lib/theme-chalk/display';

```
