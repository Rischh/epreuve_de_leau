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

const isValidArgsLength = (args) => {
  if (args.length < 2)
    return console.error(
      "Le programme a besoin d'au moins 2 arguments pour fonctionner."
    )
  return args
}

const isValidNumber = (n) => {
  if (isNaN(n))
    return console.error(
      "Le programme a besoin d'une liste de nombres entiers pour fonctionner."
    )
  return n
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const displaySelectSort = () => {
  const args = isValidArgsLength(getArgs())
  if (!args) return

  const numbers = []
  for (const arg of args) {
    if (!isValidNumber(arg)) return
    numbers.push(+arg)
  }

  return mySelectSort(numbers).join(" ")
}

console.log(displaySelectSort())
