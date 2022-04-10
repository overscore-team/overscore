const mergeArray = require('../../src/modules/object/mergeArray')

describe('测试 mergeArray', () => {
  const arr1 = [1, 2, 3]
  const arr2 = [4, 5, 6]
  const arr3 = [7, 8, 9, { a: 1, b: 2 }]
  const arr4 = [7, 8, 9, { a: 1, b: 2, c: 3 }]
  test('测试类型校验', () => {
    expect(() => {
      mergeArray(1, 2)
    }).toThrowError('参数必须是数组')
  })
  test('测试合并数组', () => {
    expect(mergeArray(arr1, arr2)).toEqual([4, 5, 6])
  })
  test('测试合并数组，合并后的数组中的对象', () => {
    expect(mergeArray(arr3, arr4)).toEqual([7, 8, 9, { a: 1, b: 2, c: 3 }])
  })
})
