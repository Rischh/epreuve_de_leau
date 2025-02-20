const capitalizeFirstLetters = (text) => {
  const SPACE_CHAR_CODE = 32
  const NEW_LINE_CHAR_CODE = 10

  let result = ""

  result += text[0].toUpperCase()

  for (let i = 1; i < text.length; i++) {
    if (
      text[i - 1].charCodeAt() === SPACE_CHAR_CODE ||
      text[i - 1].charCodeAt() === NEW_LINE_CHAR_CODE
    ) {
      result += text[i].toUpperCase()
      continue
    }
    result += text[i]
  }

  return result
}

const validateArgsCount = (args) => {
  if (args.length !== 1)
    return console.error("Le programme à besoin d'un unique argument pour fonctionner.")
  return args[0]
}

const validateStringArg = (arg) => {
  if (!isNaN(+arg)) return console.error("Le programme à besoin d'un texte pour fonctionner.")
  return arg
}

const getArgs = () => process.argv.slice(2)

const capitalizeUserInput = () => {
  const arg = validateArgsCount(getArgs())
  if (!arg) return

  const text = validateStringArg(arg)
  if (!text) return

  return capitalizeFirstLetters(text)
}

console.log(capitalizeUserInput())
