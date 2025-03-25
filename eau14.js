const getSortedByAscii = (values) => {
  const sortedValues = [...values]

  for (let i = 0; i < sortedValues.length; i++) {
    let isSorted = true
    for (let j = 0; j < sortedValues.length - 1; j++) {
      if (sortedValues[j].charCodeAt() > sortedValues[j + 1].charCodeAt()) {
        ;[sortedValues[j], sortedValues[j + 1]] = [
          sortedValues[j + 1],
          sortedValues[j],
        ]
        isSorted = false
      }
    }
    if (isSorted) return sortedValues
  }

  return sortedValues
}

const validateArgsCount = (args) => {
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

const resolveSortedByAscii = () => {
  const args = validateArgsCount(getArgs())
  if (!args) return

  return getSortedByAscii(args).join(" ")
}

console.log(resolveSortedByAscii())
