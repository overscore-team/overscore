const add = require('../../src/modules/count/add')

describe('测试 add', () => {
  it('add(1, 2)', () => {
    expect(add(1, 2)).toBe(3)
  })
})
