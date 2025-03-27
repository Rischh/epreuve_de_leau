const getCapitalizeFirstLetters = (string) => {
  const spaces = [" ", "\t", "\n"]

  let result = ""

  const firstCharCode = string[0].charCodeAt()

  if (firstCharCode >= 97 && firstCharCode <= 122) {
    result += String.fromCharCode(firstCharCode - 32)
  }

  if (firstCharCode >= 65 && firstCharCode <= 90) {
    result += string[0]
  }

  for (let i = 1; i < string.length; i++) {
    const charCode = string[i].charCodeAt()

    if (charCode >= 65 && charCode <= 90) {
      result += string[i]
      continue
    }

    if (spaces.includes(string[i - 1])) {
      result += String.fromCharCode(charCode - 32)
      continue
    }

    result += string[i]
  }

  return result
}

const isValidArgsLength = (args) => {
  if (args.length !== 1)
    return console.error(
      "Le programme à besoin d'un unique argument pour fonctionner."
    )
  return args
}

const isValidString = (string) => {
  if (!isNaN(string))
    return console.error("Le programme à besoin d'un texte pour fonctionner.")
  return string
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveCapitalizeFirstLetters = () => {
  const args = isValidArgsLength(getArgs())
  if (!args) return

  const string = isValidString(args[0])
  if (!string) return

  return getCapitalizeFirstLetters(string)
}

console.log(resolveCapitalizeFirstLetters())
