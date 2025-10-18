function ShuffleCharacter(str) {
  const shuffles = []
  if (str.length <= 1) {
    return [str]
  }

  for (let i = 0; i < str.length; i++) {
    const item = str[i]
    const temp = str.slice(0, i) + str.slice(i + 1)
    const result = ShuffleCharacter(temp)
    for (let j = 0; j < result.length; j++) {
      shuffles.push(item + result[j])
    }
  }
  return [...new Set(shuffles)]
}
console.log(ShuffleCharacter("abcde"));
