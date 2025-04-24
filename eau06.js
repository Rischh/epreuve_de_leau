const getAlterningCapitalize = (string) => {
  let result = ""
  let isIndexEven = true

  const FIRST_LETTER_CHAR_CODE = 65
  const LAST_LETTER_CHAR_CODE = 122

  for (let i = 0; i < string.length; i++) {
    const charCode = string[i].charCodeAt()

    if (
      charCode >= FIRST_LETTER_CHAR_CODE &&
      charCode <= LAST_LETTER_CHAR_CODE
    ) {
      if (charCode >= 65 && charCode <= 90 && isIndexEven) {
        result += string[i]
        isIndexEven = false
        continue
      }

      if (isIndexEven) {
        result += String.fromCharCode(charCode - 32)
        isIndexEven = false
        continue
      }
    }

    result += string[i]
    isIndexEven = true
  }

  return result
}

const isValidArgsLength = (args, wantedLength) => {
  if (args.length !== wantedLength)
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
  const args = isValidArgsLength(getArgs(), 1)
  if (!args) return

  const string = isValidString(args[0])
  if (!string) return

  return getAlterningCapitalize(string)
}

console.log(resolveAlerningCapitalize())
