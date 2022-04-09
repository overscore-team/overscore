function debounce(fn, delay) {
  let timer = null
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function throttle(fn, delay) {
  let lastTime = 0
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    const self = this
    const args = arguments
    const now = +new Date()

    const remain = delay - (now - lastTime)

    if (remain <= 0) {
      fn.apply(self, args)
      lastTime = now
    } else {
      timer = setTimeout(function () {
        lastTime = +new Date()
        fn.apply(self, args)
        timer = null
      }, remain)
    }
  }
}

module.exports = {
  debounce,
  throttle
}
