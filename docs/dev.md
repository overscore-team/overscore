# 开发者文档

## 1. 前置资料

[研发团队 GIT 开发流程新人学习指南](https://github.com/mylxsw/growing-up/blob/master/doc/%E7%A0%94%E5%8F%91%E5%9B%A2%E9%98%9FGIT%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B%E6%96%B0%E4%BA%BA%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.md)

[自动化发布 npm 包及生成 github changelog](https://gist.github.com/banyudu/8825139c64a573a10a70ac5c6612f2f1)



## 2. 注意事项

### 1. git 提交信息

- 本项目采用“约定是提交”设置 git commit 提交信息，用于生成 changelog
- 建议使用 `npm run cz` 替代 `git commit -m "xxx: xxx"`

### 2. 模块规范及文件结构

- 本项目的模块采用 commonjs 规范
- 模块命名

```js
├── src
│   ├── index.js
│   └── modules
│       ├── count
│       │   └── add.js
│       ├── fn
│       │   ├── _isArray.js
│       │   ├── _isObject.js
│       │   ├── _typeof.js
│       │   ├── debounce.js
│       │   └── throttle.js
│       └── object
│           ├── deepClone.js
│           ├── mergeArray.js
│           └── mergeObject.js
```

> modules 文件夹下一级文件夹，例如 `count`、`fn`、`object` 表示的是类别；
>
> 一级文件夹下的文件才是真正的模块，模块名即是文件名，也是文件内导出的模块名称，
>
> 下划线开头的模块在打包后无法以 api 的形式访问
>
> 测试用例的文件结构与对应模块的文件结构保持一致



### 3. 发布

- 从 develop 分支创建 release 分支用于上线准备，release 分支上测试、修复完毕后，需要合并该 release 分支到 master 分支和 develop 分支
- 发布时，只需要执行 `npm version (patch | minor | major)`