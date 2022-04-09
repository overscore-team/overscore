const debounce = require('../../src/modules/fn/debounce')
const { jest } = require('@jest/globals')

describe('测试防抖函数', () => {
  jest.useFakeTimers()

  test('测试防抖优化后的指定次数和最终值', () => {
    const test = jest.fn()
    const debounceFn = debounce(test, 10)

    debounceFn(1)
    debounceFn(2)

    setTimeout(() => {
      const calls = test.mock.calls
      expect(calls.length).toBe(1)
      expect(calls[0][0]).toBe(2)
    }, 50)
  })
})
