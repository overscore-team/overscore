const overscore = {}

// 调用 require.context 函数，实现自动导入
const modulesFiles = require.context('./modules', true, /^\.\/.+\/.+\.js$/)

modulesFiles.keys().forEach((key) => {
  const moduleName = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
  overscore[moduleName] = modulesFiles(key)
})

module.exports = overscore
