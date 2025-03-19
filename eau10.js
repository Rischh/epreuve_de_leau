const getIndexOf = (values, searchValue) => {
  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] === searchValue) return i
  }
  return -1
}

const validateArgsCount = (args) => {
  if (args.length < 2)
    return console.error(
      "Le programme a besoin d'au moins 2 arguments pour fonctionner."
    )
  return args
}

const getArgs = () => process.argv.slice(2)

const displaySearchValueIndex = () => {
  const values = validateArgsCount(getArgs())
  if (!values) return

  return getIndexOf(values, values[values.length - 1])
}

console.log(displaySearchValueIndex())
