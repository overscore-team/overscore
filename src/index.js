const overscore = {}

// 调用 webpack 内部的 require 函数，实现自动导入
const modulesFiles = require.context('./modules', true, /^\.\/.+\/.+\.js$/)

modulesFiles.keys().forEach((key) => {
  const moduleName = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
  overscore[moduleName] = modulesFiles(key)
})

module.exports = overscore
