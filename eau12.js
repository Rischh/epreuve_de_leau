const myBubbleSort = (numbers) => {
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

const validateArgsCount = (args) => {
  if (args.length < 2)
    return console.error(
      "Le programme a besoin d'au moins 2 arguments pour fonctionner."
    )
  return args
}

const validateNumericArg = (n) => {
  if (isNaN(n))
    return console.error(
      "Le programme a besoin d'une liste de nombres entiers pour fonctionner."
    )
  return true
}

const getArguments = () => process.argv.slice(2)

const displayBubbleSort = () => {
  const args = validateArgsCount(getArguments())
  if (!args) return

  const numbers = [...args]

  for (let i = 0; i < numbers.length; i++) {
    if (!validateNumericArg(numbers[i])) return
    numbers[i] = +numbers[i]
  }

  return myBubbleSort(numbers).join(" ")
}

console.log(displayBubbleSort())
