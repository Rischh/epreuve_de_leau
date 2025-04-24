const getIndexOf = (arr, searchElement) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) return i
  }
  return -1
}

const isValidArgsLength = (args, wantedLength) => {
  if (args.length < wantedLength)
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
  const args = isValidArgsLength(getArgs(), 2)
  if (!args) return

  const values = args.slice(0, args.length - 1)
  const searchValue = args[args.length - 1]

  return getIndexOf(values, searchValue)
}

console.log(resolveIndexOf())
