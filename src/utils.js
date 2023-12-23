// thanks to arrow function you no longer need to use bind here
export const debounce = (fn, delay = 3000) => {
  let timer;

  return (...args) => {
    console.log(`clicked at ${new Date().toLocaleTimeString()}, debounce timer reset`)
    clearTimeout(timer)

    timer = setTimeout(() => fn(args), delay)
  }
}

export const memo = () => {
  // can also put cache in localStorage
  const cache = {}

  return (n) => {
    if (!(n in cache)) {
      console.log('a very long calculation')
      cache[n] = n * n
    }

    return cache[n]
  }
}