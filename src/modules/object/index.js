const _typeof = (target) => Object.prototype.toString.call(target).match(/\[object\s(\w+)\]/)[1]
const isArray = (target) => _typeof(target) === 'Array'
const isObject = (target) => _typeof(target) === 'Object'

// 深拷贝
function deepClone(target) {
  if (!isObject(target) && !isArray(target)) {
    return target
  }

  if (isObject(target)) {
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

// 合并两个对象（深合并），遇到相同的属性，后面的会覆盖前面的
function mergeObject(targetObj, mergeObj, newResult = true) {
  if (!isObject(targetObj) || !isObject(mergeObj)) {
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
    if (isObject(targetValue) && isObject(mergeValue)) {
      targetObj[key] = mergeObject(targetValue, mergeValue, newResult)

      // 如果都是数组，递归合并
    } else if (isArray(targetValue) && isArray(mergeValue)) {
      targetObj[key] = mergeArray(targetValue, mergeValue, newResult)

      // 其他情况， mergeValue 直接覆盖 targetValue
    } else {
      targetObj[key] = mergeValue
    }
  })

  return targetObj
}

// 合并两个数组（深合并），遇到相同的属性，后面的会覆盖前面的
function mergeArray(targetArray, mergeArray, newResult = true) {
  if (!isArray(targetArray) || !isArray(mergeArray)) {
    throw new Error('参数必须是数组')
  }

  if (newResult) {
    targetArray = deepClone(targetArray)
    mergeArray = deepClone(mergeArray)
  }

  mergeArray.forEach((mergeValue, index) => {
    const targetValue = targetArray[index]

    // 如果都是对象，递归合并
    if (isObject(targetValue) && isObject(mergeValue)) {
      targetArray[index] = mergeObject(targetValue, mergeValue, newResult)

      // 如果都是数组，递归合并
    } else if (isArray(targetValue) && isArray(mergeValue)) {
      targetArray[index] = mergeArray(targetValue, mergeValue, newResult)

      // 其他情况， mergeValue 直接覆盖 targetValue
    } else {
      targetArray[index] = mergeValue
    }
  })

  return targetArray
}

module.exports = {
  deepClone,
  mergeObject,
  mergeArray
}
