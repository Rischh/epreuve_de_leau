const isValidNumber = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (!+string[i]) return false
  }
  return true
}

const isValidArgsLength = (args, wantedLength) => {
  if (args.length !== wantedLength)
    return console.error(
      "Le programme à besoin d'un unique argument pour fonctionner."
    )
  return args
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const getIsValidNumber = () => {
  const args = isValidArgsLength(getArgs(), 1)
  if (!args) return

  return isValidNumber(args[0])
}

console.log(getIsValidNumber())
