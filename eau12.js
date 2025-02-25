const myBubbleSort = (numbers) => {
  const sortedNumbers = [...numbers]

  for (let i = 0; i < sortedNumbers.length; i++) {
    let isSorted = true
    for (let j = 0; j < sortedNumbers.length - i; j++) {
      if (sortedNumbers[j] > sortedNumbers[j + 1]) {
        const temp = sortedNumbers[j]
        sortedNumbers[j] = sortedNumbers[j + 1]
        sortedNumbers[j + 1] = temp
        isSorted = false
      }
    }
    if (isSorted) return sortedNumbers
  }
  return sortedNumbers
}

const validateArgsCount = (args) => {
  if (args.length < 2)
    return console.error("Le programme a besoin d'au moins 2 arguments pour fonctionner.")
  return args
}

const validateNumericArgs = (args) => {
  for (let i = 0; i < args.length; i++) {
    if (isNaN(+args[i]))
      return console.error(
        "Le programme a besoin d'une liste composée uniquement de nombres pour fonctionner."
      )
    args[i] = Number(args[i])
  }
  return args
}

const getArguments = () => process.argv.slice(2)

const resolveBubbleSort = () => {
  const args = validateArgsCount(getArguments())
  if (!args) return

  const numbers = validateNumericArgs(args)
  if (!numbers) return

  return myBubbleSort(numbers)
}

console.log(resolveBubbleSort())
