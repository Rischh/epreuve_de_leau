const isOnlyDigits = (arg) => {
  const ZERO_CHAR_CODE = 48
  const NINE_CHAR_CODE = 57

  for (let i = 0; i < arg.length; i++) {
    if (!(arg[i].charCodeAt() >= ZERO_CHAR_CODE && arg[i].charCodeAt() <= NINE_CHAR_CODE)) {
      return false
    }
  }
  return true
}

const validateArgsCount = (args) => {
  if (args.length !== 1)
    return console.error("Le programme à besoin d'un unique argument pour fonctionner.")
  return args[0]
}

const getArgs = () => process.argv.slice(2)

const checkUserInput = () => {
  const arg = validateArgsCount(getArgs())
  if (!arg) return

  return isOnlyDigits(arg)
}

console.log(checkUserInput())
