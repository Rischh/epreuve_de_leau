const getFibonacciNumber = (index) => {
  const seedValues = [0, 1]

  if (seedValues.includes(index)) return index

  let fibonacciNumber

  for (let i = 0; i < index - 1; i++) {
    const sum = seedValues[0] + seedValues[1]
    fibonacciNumber = sum

    seedValues[0] = seedValues[1]
    seedValues[1] = sum
  }

  return fibonacciNumber
}

const isValidArgsLength = (args, wantedLength) => {
  if (args.length !== wantedLength)
    return console.error(
      `Le programme a besoin de ${wantedLength} argument pour fonctionner.`
    )
  return args
}

const isValidNumber = (stringNumber) => {
  if (isNaN(stringNumber))
    return console.error("Le programme a besoin d'un nombre.")
  return parseInt(stringNumber)
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveFibonacciNumber = () => {
  const args = isValidArgsLength(getArgs(), 1)
  if (!args) return

  const number = isValidNumber(args[0])
  if (number === undefined) return

  return getFibonacciNumber(number)
}

console.log(resolveFibonacciNumber())
