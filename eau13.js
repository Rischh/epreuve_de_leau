const mySelectSort = (numbers) => {
  const sortedNumbers = [...numbers]

  for (let i = 0; i < sortedNumbers.length; i++) {
    let isSorted = true
    let min = sortedNumbers[i]
    let minIndex

    for (let j = i + 1; j < sortedNumbers.length; j++) {
      if (sortedNumbers[j] < min) {
        min = sortedNumbers[j]
        minIndex = j
        isSorted = false
      }

      if (!isSorted && j === sortedNumbers.length - 1) {
        ;[sortedNumbers[i], sortedNumbers[minIndex]] = [min, sortedNumbers[i]]
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

const getArgs = () => process.argv.slice(2)

const displaySelectSort = () => {
  const args = validateArgsCount(getArgs())
  if (!args) return

  const numbers = [...args]

  for (let i = 0; i < numbers.length; i++) {
    if (!validateNumericArg(numbers[i])) return
    numbers[i] = +numbers[i]
  }

  return mySelectSort(numbers).join(" ")
}

console.log(displaySelectSort())
