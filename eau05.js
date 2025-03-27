const isIncluded = (string, searchString) => {
  for (let i = 0; i < string.length; i++) {
    const portion = getTextSlice(string, searchString, i)
    if (portion.length !== searchString.length) break

    if (portion === searchString) return true
  }
  return false
}

const getTextSlice = (text, substring, index) => {
  let portion = ""

  for (let i = index; i < substring.length + index; i++) {
    portion += text[i]
  }

  return portion
}

const isValidArgsLength = (args) => {
  if (args.length !== 2)
    return console.error(
      "Le programme a besoin de 2 arguments pour fonctionner."
    )
  return args
}

const validateStringArgs = (strings) => {
  if (!isNaN(strings[0]) || !isNaN(strings[1]))
    return console.error(
      "Les deux arguments doivent être des chaines de caractères."
    )
  return strings
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const hasSearchString = () => {
  const args = isValidArgsLength(getArgs())
  if (!args) return

  const strings = validateStringArgs(args)
  if (!strings) return

  const [string, searchString] = strings
  return isIncluded(string, searchString)
}

console.log(hasSearchString())
