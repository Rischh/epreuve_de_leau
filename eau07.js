const getCapitalizeFirstLetters = (string) => {
  const SPACE_CHAR_CODE = 32
  const NEW_LINE_CHAR_CODE = 10

  let result = ""

  result += string[0].toUpperCase()

  for (let i = 1; i < string.length; i++) {
    if (
      string[i - 1].charCodeAt() === SPACE_CHAR_CODE ||
      string[i - 1].charCodeAt() === NEW_LINE_CHAR_CODE
    ) {
      result += string[i].toUpperCase()
      continue
    }
    result += string[i]
  }

  return result
}

const validateArgCount = (args) => {
  if (args.length !== 1)
    return console.error(
      "Le programme à besoin d'un unique argument pour fonctionner."
    )
  return args[0]
}

const validateStringArg = (arg) => {
  if (!isNaN(arg))
    return console.error("Le programme à besoin d'un texte pour fonctionner.")
  return arg
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveCapitalizeFirstLetters = () => {
  const arg = validateArgCount(getArgs())
  if (!arg) return

  const string = validateStringArg(arg)
  if (!string) return

  return getCapitalizeFirstLetters(string)
}

console.log(resolveCapitalizeFirstLetters())
