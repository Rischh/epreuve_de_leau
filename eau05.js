const isIncluded = (string, searchString) => {
  for (let i = 0; i < string.length; i++) {
    let portion = ""
    for (let j = i; j < searchString.length + i; j++) {
      portion += string[j]
    }
    if (portion.length !== searchString.length) break

    if (portion === searchString) return true
  }
  return false
}

const isValidArgsLength = (args, wantedLength) => {
  if (args.length !== wantedLength)
    return console.error(
      `Le programme a besoin de ${wantedLength} arguments pour fonctionner.`
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
  const args = isValidArgsLength(getArgs(), 2)
  if (!args) return

  for (const arg of args) {
    if (!isValidString(arg)) return
  }

  const [string, searchString] = args
  return isIncluded(string, searchString)
}

console.log(hasSearchString())
