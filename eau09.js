const setMinMax = (a, b) => {
  let max, min

  if (a > b) {
    max = a
    min = b
  } else {
    max = b
    min = a
  }

  return [min, max]
}

const displayNumberRange = (min, max) => {
  let sequence = ""

  for (let i = min; i < max; i++) {
    sequence += `${i} `
  }

  console.log(sequence)
}

const validateArgsCount = (args) => {
  if (args.length !== 2)
    return console.error("Le programme a besoin de 2 arguments pour fonctionner.")
  return args
}

const validateNumericArgs = (args) => {
  const fisrtNumber = +args[0]
  const secondNumber = +args[1]

  if (isNaN(fisrtNumber) || isNaN(secondNumber))
    return console.error("Le programme a besoin de nombres pour fonctionner.")
  return [fisrtNumber, secondNumber]
}

const checkEquality = (a, b) => {
  if (a === b) return console.error("Le programme a besoin de 2 arguments non égaux.")
  return [a, b]
}

const getArgs = () => process.argv.slice(2)

const resolveNumberRange = () => {
  const args = validateArgsCount(getArgs())
  if (!args) return

  let numbers = validateNumericArgs(args)
  if (!numbers) return
  const fisrtNumber = +numbers[0]
  const secondNumber = +numbers[1]

  numbers = checkEquality(fisrtNumber, secondNumber)
  if (!numbers) return

  numbers = setMinMax(fisrtNumber, secondNumber)
  const min = numbers[0]
  const max = numbers[1]

  return displayNumberRange(min, max)
}

resolveNumberRange()
