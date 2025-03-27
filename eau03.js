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

const isValidArgsLength = (args) => {
  if (args.length !== 1)
    return console.error(
      "Le programme a besoin d'un unique argument pour fonctionner."
    )
  return args
}

const isValidNumber = (n) => {
  if (isNaN(n))
    return console.error("Le programme a besoin d'un nombre entier.")
  return parseInt(n)
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveFibonacciNumber = () => {
  const args = isValidArgsLength(getArgs())
  if (!args) return

  const number = isValidNumber(args[0])
  if (number === undefined) return

  return getFibonacciNumber(number)
}

console.log(resolveFibonacciNumber())
