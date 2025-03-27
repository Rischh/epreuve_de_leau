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

const isValidString = (string) => {
  if (!isNaN(string))
    return console.error(
      "Le programme a besoin d'une chaine de caracteres pour fonctionner."
    )
  return string
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const hasSearchString = () => {
  const args = isValidArgsLength(getArgs())
  if (!args) return

  for (const arg of args) {
    if (!isValidString(arg)) return
  }

  const [string, searchString] = args
  return isIncluded(string, searchString)
}

console.log(hasSearchString())
