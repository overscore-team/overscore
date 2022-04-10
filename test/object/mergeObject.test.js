const mergeObject = require('../../src/modules/object/mergeObject')

describe('测试 mergeObject', () => {
  const obj1 = {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: 4
    }
  }
  const obj2 = {
    a: 2,
    b: 3,
    c: {
      d: 4,
      f: 5
    }
  }
  test('测试类型校验', () => {
    expect(() => {
      mergeObject(1, 2)
    }).toThrowError('参数必须是对象')
  })
  test('测试合并对象', () => {
    expect(mergeObject(obj1, obj2)).toEqual({
      a: 2,
      b: 3,
      c: {
        d: 4,
        e: 4,
        f: 5
      }
    })
  })
})
