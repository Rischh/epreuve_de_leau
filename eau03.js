const getFibonacciNumber = (index) => {
  if (index < 2) return index

  let previousNumberOne = 0
  let previousNumberTwo = 1

  let fibonacciNumber

  for (let i = 0; i < index - 1; i++) {
    const sum = previousNumberOne + previousNumberTwo
    fibonacciNumber = sum

    previousNumberOne = previousNumberTwo
    previousNumberTwo = sum
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
