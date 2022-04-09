const _isArray = require('../fn/_isArray')
const _isObject = require('../fn/_isObject')

// 深拷贝
function deepClone(target) {
  if (!_isObject(target) && !_isArray(target)) {
    return target
  }

  if (_isObject(target)) {
    return Object.keys(target).reduce((newObj, key) => {
      const value = target[key]
      newObj[key] = deepClone(value)
      return newObj
    }, {})
  } else {
    return target.reduce((newArray, item) => {
      newArray.push(deepClone(item))
      return newArray
    }, [])
  }
}

module.exports = deepClone
