const _isArray = require('../fn/_isArray')
const _isObject = require('../fn/_isObject')
const deepClone = require('./deepClone')
const mergeArray = require('./mergeArray')

// 合并两个对象（深合并），遇到相同的属性，后面的会覆盖前面的
function mergeObject(targetObj, mergeObj, newResult = true) {
  if (!_isObject(targetObj) || !_isObject(mergeObj)) {
    throw new Error('参数必须是对象')
  }

  // 是否返回新的对象
  if (newResult) {
    targetObj = deepClone(targetObj)
    mergeObj = deepClone(mergeObj)
  }

  Object.keys(mergeObj).forEach((key) => {
    const mergeValue = mergeObj[key]
    const targetValue = targetObj[key]

    // 如果都是对象，递归合并
    if (_isObject(targetValue) && _isObject(mergeValue)) {
      targetObj[key] = mergeObject(targetValue, mergeValue, newResult)

      // 如果都是数组，递归合并
    } else if (_isArray(targetValue) && _isArray(mergeValue)) {
      targetObj[key] = mergeArray(targetValue, mergeValue, newResult)

      // 其他情况， mergeValue 直接覆盖 targetValue
    } else {
      targetObj[key] = mergeValue
    }
  })

  return targetObj
}

module.exports = mergeObject
