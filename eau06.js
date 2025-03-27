const getAlterningCapitalize = (string) => {
  let result = ""
  let letterCount = 0

  const FIRST_LETTER_CHAR_CODE = 65
  const LAST_LETTER_CHAR_CODE = 122

  for (let i = 0; i < string.length; i++) {
    if (
      string[i].charCodeAt() >= FIRST_LETTER_CHAR_CODE &&
      string[i].charCodeAt() <= LAST_LETTER_CHAR_CODE
    ) {
      letterCount++
      if (letterCount % 2 === 1) {
        result += string[i].toUpperCase()
        continue
      }
    }
    result += string[i]
  }

  return result
}

const isValidArgsLength = (args) => {
  if (args.length !== 1)
    return console.error(
      "Le programme a besoin d'un unique argument pour fonctionner."
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

const resolveAlerningCapitalize = () => {
  const args = isValidArgsLength(getArgs())
  if (!args) return

  const string = isValidString(args[0])
  if (!string) return

  return getAlterningCapitalize(string)
}

console.log(resolveAlerningCapitalize())
