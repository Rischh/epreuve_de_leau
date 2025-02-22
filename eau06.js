const alternateCapitalization = (text) => {
  let result = ""
  let letterCount = 0

  const FIRST_LETTER_CHAR_CODE = 65
  const LAST_LETTER_CHAR_CODE = 122

  for (let i = 0; i < text.length; i++) {
    if (
      text[i].charCodeAt() >= FIRST_LETTER_CHAR_CODE &&
      text[i].charCodeAt() <= LAST_LETTER_CHAR_CODE
    ) {
      letterCount++
      if (letterCount % 2 === 1) {
        result += text[i].toUpperCase()
        continue
      }
    }
    result += text[i]
  }

  return result
}

const validateArgsCount = (args) => {
  if (args.length !== 1)
    return console.error("Le programme a besoin d'un unique argument pour fonctionner.")
  return args[0]
}

const validateStringArg = (arg) => {
  if (!isNaN(+arg)) return console.error("Le programme a besoin d'un texte pour fonctionner.")
  return arg
}

const getArgs = () => process.argv.slice(2)

const capitalizeUserInput = () => {
  const arg = validateArgsCount(getArgs())
  if (!arg) return

  const text = validateStringArg(arg)
  if (!text) return

  return alternateCapitalization(text)
}

console.log(capitalizeUserInput())
