# overscore



前端工具库

> 以往接触的多个前端项目中，总是重复性的使用各种公共方法，我们可以根据日常业务开发中的这一需求，针对性的将一部分公共业务方法整合成前端工具库，以减少重复开发的成本，提高开发效率。



## 安装使用

1. 因为当前库使用 umd 规范打包构建，可以访问 [unpkg](https://unpkg.com/@overscore-team/overscore) 下载最新版本，直接在 html 文档中引用

```html
<script src="overscore.min.js"></script>
<script>
	var deepClone = overscore.deepClone
</script>
```



2. 使用 npm 安装

```shell
npm i @overscore-team/overscore@latest -S-D
```

在项目中使用

```js
const { deepClone } = require('@overscore-team/overscore')
```





## API

### Object

- deepClone 深拷贝
- mergeObject 合并对象
- mergeArray 合并数组


### fn

- throttle 节流
- debounce 防抖

