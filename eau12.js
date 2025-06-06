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

const isValidArgsLength = (args, wantedLength) => {
  if (args.length < wantedLength)
    return console.error(
      "Le programme a besoin d'au moins 2 arguments pour fonctionner."
    )
  return args
}

const isValidNumber = (stringNumber) => {
  if (isNaN(stringNumber))
    return console.error(
      "Le programme a besoin d'une liste de nombres entiers pour fonctionner."
    )
  return stringNumber
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveBubbleSort = () => {
  const args = isValidArgsLength(getArgs(), 2)
  if (!args) return

  const numbers = []
  for (const arg of args) {
    if (!isValidNumber(arg)) return
    numbers.push(+arg)
  }

  return myBubbleSort(numbers).join(" ")
}

console.log(resolveBubbleSort())
