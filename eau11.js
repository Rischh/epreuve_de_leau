const getAbsoluteMinDiff = (numbers) => {
  let absoluteMin = 0

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        if (numbers[j] - numbers[i] < absoluteMin || absoluteMin === 0)
          absoluteMin = numbers[j] - numbers[i]
      } else if (numbers[i] - numbers[j] < absoluteMin || absoluteMin === 0)
        absoluteMin = numbers[i] - numbers[j]
    }
  }
  return absoluteMin
}

const isValidArgsLength = (args) => {
  if (args.length < 3)
    return console.error(
      "Le programme a besoin d'au moins 3 arguments pour fonctionner."
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

const displayAbsoluteMinDiff = () => {
  const args = isValidArgsLength(getArgs())
  if (!args) return

  const numbers = []
  for (const arg of args) {
    if (!isValidNumber(arg)) return
    numbers.push(+arg)
  }

  return getAbsoluteMinDiff(numbers)
}

console.log(displayAbsoluteMinDiff())
