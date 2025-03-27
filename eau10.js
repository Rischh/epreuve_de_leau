const getIndexOf = (array, searchElement) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement) return i
  }
  return -1
}

const isValidArgsLength = (args) => {
  if (args.length < 2)
    return console.error(
      "Le programme a besoin d'au moins 2 arguments pour fonctionner."
    )
  return args
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveIndexOf = () => {
  const args = isValidArgsLength(getArgs())
  if (!args) return

  const values = [...args]
  searchValue = values[values.length - 1]
  values.pop()

  return getIndexOf(values, searchValue)
}

console.log(resolveIndexOf())
