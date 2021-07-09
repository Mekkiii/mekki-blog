---
title: vite + vue3 + ts + element-plus 踩坑记录
date: "2021-06-16"
author:
  name: Mekki
---

###

&nbsp &nbsp &nbsp &nbsp 最近因工作需要，要搭建一个后台管理系统，正好想试一试新技术，决定用`vite + vue3 + ts`来试一试。

### 直接用`vite`脚手架搭一个项目

### 为什么用 vite

**vite 是一个基于 Vue3 单文件组件的非打包开发服务器**，它做到了本地快速开发启动：

- 快速的冷启动，不需要等待打包操作；
- 即时的热模块更新（hmr），替换性能和模块数量的解耦让更新飞起；
- 真正的按需编译，不再等待整个应用编译完成，这是一个巨大的改变。

### 创建一个 vite 项目

> 兼容性注意<br>
> Vite 需要 Node.js 版本 >= 12.0.0。

```javascript
# npm
npm init vite-app <project-name>
cd <project-name>
npm install
npm run dev

# yarn
yarn create vite-app <project-name>
cd <project-name>
yarn
yarn dev
```

### 配置

### vite.config.ts

```
import path from "path";

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
}

const config = {
  base: './',//在生产中服务时的基本公共路径。@default '/'
  alias: {
    '/@/': pathResolve('./src'),
  },
  outDir: 'vite-init',//构建输出将放在其中。会在构建之前删除旧目录。@default 'dist'
  minify: 'esbuild',//构建时的压缩方式
  hostname: 'localhost',//本地启动的服务地址
  port: '8800',//服务端口号
  open: false,//启动服务时是否在浏览器打开
  https: false,//是否开启https
  ssr: false,//是否服务端渲染
  optimizeDeps: {// 引入第三方的配置
    include: ['axios']
  },
  // proxy: {//代理配置
  //   '/api': {
  //     target: 'http://xx.xx.xx.xx:xxxx',
  //     changeOrigin: true,
  //     ws: true,
  //     rewrite: (path: string) => { path.replace(/^\/api/, '') }
  //   }
  // }
}
module.exports = config;
```

### vue3 知识

**setup**

vue3 中用 setup 函数整合了所有的 api；只执行一次，在生命周期函数前执行，所以在 setup 函数中拿不到当前实例 this，不能用 this 来调用 vue2 写法中定义的方法

它将接受两个参数：props、context

```
// props - 组件接受到的属性 context - 上下文
setup(props, context) {
  return {
    // 要绑定的数据和方法
  }
}
```

**props**

setup 函数中的 props 是响应式的，当传入新的 prop 时，它将被更新
但是，因为 props 是响应式的，不能使用 ES6 解构，因为它会消除 prop 的响应性

如果需要解构 prop，可以通过使用 setup 函数中的 toRefs 来安全地完成此操作

```
import { toRefs } from 'vue'

setup(props) {
  const { title } = toRefs(props)
  console.log(title.value)
}
```

**context**

context 暴露三个组件的 property：{ attrs, slots, emit }
它是一个普通的 JavaScript 对象，不是响应式的，这意味着你可以安全地对 context 使用 ES6 解构

**生命周期**

通过在生命周期钩子前面加上 “on” 来访问组件的生命周期钩子

因为 setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，所以不需要显式地定义它们
换句话说，在这两个钩子中编写的任何代码都应该直接在 setup 函数中编写

```
setup() {
  onMounted(() => {
    console.log('组件挂载')
  })

  onUnmounted(() => {
    console.log('组件卸载')
  })

  onUpdated(() => {
    console.log('组件更新')
  })

  onBeforeUpdate(() => {
    console.log('组件将要更新')
  })

  onActivated(() => {
    console.log('keepAlive 组件 激活')
  })

  onDeactivated(() => {
    console.log('keepAlive 组件 非激活')
  })

  return {}
}
```

**ref、reactive**

ref 可以将某个普通值包装成响应式数据，仅限于简单值，内部是将值包装成对象，再通过 defineProperty 来处理的
通过 ref 包装的值，取值和设置值的时候，需用通过 .value 来进行设置
可以用 ref 来获取组件的引用，替代 this.$refs 的写法

reactive 对复杂数据进行响应式处理，它的返回值是一个 proxy 对象，在 setup 函数中返回时，可以用 toRefs 对 proxy 对象进行结构，方便在 template 中使用

使用如下：

```
<template>
  <div>
    <div>
      <ul v-for="ele in eleList" :key="ele.id">
        <li>{{ ele.name }}</li>
      </ul>
      <button @click="addEle">添加</button>
    </div>
    <div>
      <ul v-for="ele in todoList" :key="ele.id">
        <li>{{ ele.name }}</li>
      </ul>
      <button @click="addTodo">添加</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'

export default {
  setup() {
    // ref
    const eleList = ref([])
    function addEle() {
      let len = eleList.value.length
      eleList.value.push({
        id: len,
        name: 'ref 自增' + len
      })
    }

    // reactive
    const dataObj = reactive({
      todoList: []
    })
    function addTodo() {
      let len = dataObj.todoList.length
      dataObj.todoList.push({
        id: len,
        name: 'reactive 自增' + len
      })
    }

    return {
      eleList,
      addEle,
      addTodo,
      ...toRefs(dataObj)
    }
  }
}
</script>
```

**computed、watch**

```
// computed
let sum = computed(() => dataObj.todoList.length + eleList.value.length)
console.log('setup引用computed要.value：' + sum.value)
```

```
// watch
watch(
  eleList,
  (curVal, oldVal) => {
    console.log('监听器：', curVal, oldVal)
  },
  {
    deep: true
  }
)
```

**watchEffect**

响应式地跟踪函数中引用的响应式数据，当响应式数据改变时，会重新执行函数

```
const count = ref(0)
// 当 count 的值被修改时，会执行回调
const stop = watchEffect(() => console.log(count.value))
```

```
// 停止监听
stop()
还可以停止监听，watchEffect 返回一个函数，执行后可以停止监听

与 vue2 一样：

const unwatch = this.$watch('say', curVal => {})
```

```
// 停止监听
unwatch()
useRoute、useRouter
import {useRoute, useRouter} from 'vue-router'

const route = useRoute() // 相当于 vue2 中的 this.$route
const router = useRouter() // 相当于 vue2 中的 this.$router
```

route 用于获取当前路由数据
router 用于路由跳转

**vuex**

使用 useStore 来获取 store 对象 从 vuex 中取值时，要注意必须使用 computed 进行包装，这样 vuex 中状态修改后才能在页面中响应

```
import {useStore} from 'vuex'

setup(){
  const store = useStore() // 相当于 vue2 中的 this.$store
  store.dispatch() // 通过 store 对象来 dispatch 派发异步任务
  store.commit() // commit 修改 store 数据

  let category = computed(() => store.state.home.currentCagegory
  return { category }
}
```

### 怎么修改 Element Plus 的主题颜色

### 参考官网

> Element Plus 的 theme-chalk 使用 SCSS 编写，如果你的项目也使用了 SCSS，那么可以直接在项目中改变 Element Plus 的样式变量。新建一个样式文件，例如 element-variables.scss，写入以下内容：

```javascript
/* 改变主题色变量 */
$--color-primary: teal;
/* 改变 icon 字体路径变量，必需 */
$--font-path: '~element-plus/lib/theme-chalk/fonts';
@import "~element-plus/packages/theme-chalk/src/index";
```

> 之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 Element Plus 编译好的 CSS 文件）：

```javascript
import Vue from "vue";
import ElementPlus from "element-plus";
import "./element-variables.scss";
import App from "./App.vue";

const app = createApp(App);
app.use(ElementPlus);
```

> 需要注意的是，覆盖字体路径变量是必需的，将其赋值为 Element Plus 中 icon 图标所在的相对路径即可。

### 但是 element-plus 报错

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

### 解决方案

> ~改成 node_modules/，安装 scss --dev

```javascript
$--color-primary: #fc9153;
$--font-path: 'node_modules/element-plus/lib/theme-chalk/fonts';
@import "node_modules/element-plus/packages/theme-chalk/src/index";
@import 'node_modules/element-plus/lib/theme-chalk/display';
```
