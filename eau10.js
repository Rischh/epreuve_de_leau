const extractSearchValue = (values, lastIndex) => {
  return values.slice(0, lastIndex)
}

const getIndexOf = (values, searchValue) => {
  for (let i = 0; i < values.length; i++) {
    if (values[i] === searchValue) return i
  }
  return -1
}

const validateArgsCount = (args) => {
  if (args.length < 2)
    return console.error("Le programme a besoin d'au moins 2 arguments pour fonctionner.")
  return args
}

const getArgs = () => process.argv.slice(2)

const displayIndex = () => {
  const args = validateArgsCount(getArgs())
  if (!args) return

  const lastIndex = args.length - 1

  const values = extractSearchValue(args, lastIndex)
  const searchValue = args[lastIndex]

  return getIndexOf(values, searchValue)
}

console.log(displayIndex())
