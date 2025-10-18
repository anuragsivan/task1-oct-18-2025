function incert(obj) {
  const inverted = {}
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const value = obj[key]
    inverted[value] = key
  }
  return inverted
}
console.log(incert({ a: 1, b: 2 }))
