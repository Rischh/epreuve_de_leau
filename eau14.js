const getSortedByAscii = (array) => {
  const charCodes = getCharCodes(array)
  const sortedArray = getBubbleSort(charCodes)

  const result = []
  const arrayClone = [...array]

  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < arrayClone.length; j++) {
      if (arrayClone[j].charCodeAt() === sortedArray[i]) {
        result.push(arrayClone[j])
        arrayClone.splice(j, 1)
        break
      }
    }
  }

  return result
}

const getCharCodes = (array) => {
  const charCodes = []

  for (let i = 0; i < array.length; i++) {
    charCodes.push(array[i].charCodeAt(0))
  }

  return charCodes
}

const getBubbleSort = (numbers) => {
  const sortedNumbers = [...numbers]

  for (let i = 0; i < sortedNumbers.length; i++) {
    let isSorted = true
    for (let j = 0; j < sortedNumbers.length - i; j++) {
      if (sortedNumbers[j] > sortedNumbers[j + 1]) {
        ;[sortedNumbers[j], sortedNumbers[j + 1]] = [
          sortedNumbers[j + 1],
          sortedNumbers[j],
        ]
        isSorted = false
      }
    }

    if (isSorted) return sortedNumbers
  }

  return sortedNumbers
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

const resolveSortedByAscii = () => {
  const args = isValidArgsLength(getArgs())
  if (!args) return

  return getSortedByAscii(args)
}

console.log(resolveSortedByAscii())
