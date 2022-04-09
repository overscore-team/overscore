const { debounce, throttle } = require('../../src/modules/fn/index')
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

describe('测试节流函数', (done) => {
  jest.useFakeTimers()

  test('测试节流优化后的指定次数和最终值', () => {
    const test = jest.fn()
    const throttleFn = throttle(test, 10)

    throttleFn(1)
    throttleFn(2)

    setTimeout(() => {
      const calls = test.mock.calls
      expect(calls.length).toBe(1)
      expect(calls[0][0]).toBe(1)
      done()
    }, 50)
  })
})
