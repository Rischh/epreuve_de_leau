const isSubstringPresent = (text, substring) => {
  for (let i = 0; i < text.length; i++) {
    const portion = getTextSlice(text, substring, i)
    if (portion.length !== substring.length) break

    if (portion === substring) return true
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

const validateArgsCount = (args) => {
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

const getArgs = () => process.argv.slice(2)

const searchSubstring = () => {
  const args = validateArgsCount(getArgs())
  if (!args) return

  const strings = validateStringArgs(args)
  if (!strings) return

  const [sourceString, searchString] = strings
  return isSubstringPresent(sourceString, searchString)
}

console.log(searchSubstring())
