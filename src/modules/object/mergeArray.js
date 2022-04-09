const _isArray = require('../fn/_isArray')
const _isObject = require('../fn/_isObject')
const deepClone = require('./deepClone')
const mergeObject = require('./mergeObject')

// 合并两个数组（深合并），遇到相同的属性，后面的会覆盖前面的
function mergeArray(targetArray, mergeArray, newResult = true) {
  if (!_isArray(targetArray) || !_isArray(mergeArray)) {
    throw new Error('参数必须是数组')
  }

  if (newResult) {
    targetArray = deepClone(targetArray)
    mergeArray = deepClone(mergeArray)
  }

  mergeArray.forEach((mergeValue, index) => {
    const targetValue = targetArray[index]

    // 如果都是对象，递归合并
    if (_isObject(targetValue) && _isObject(mergeValue)) {
      targetArray[index] = mergeObject(targetValue, mergeValue, newResult)

      // 如果都是数组，递归合并
    } else if (_isArray(targetValue) && _isArray(mergeValue)) {
      targetArray[index] = mergeArray(targetValue, mergeValue, newResult)

      // 其他情况， mergeValue 直接覆盖 targetValue
    } else {
      targetArray[index] = mergeValue
    }
  })

  return targetArray
}

module.exports = mergeArray
