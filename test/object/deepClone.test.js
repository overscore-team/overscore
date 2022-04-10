const deepClone = require('../../src/modules/object/deepClone')

describe('测试 deepClone', () => {
  const obj1 = {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: 4
    }
  }
  test('测试类型校验', () => {
    expect(deepClone(1)).toEqual(1)
  })
  test('测试深度克隆', () => {
    expect(deepClone(obj1)).toEqual({
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: 4
      }
    })
  })
})
