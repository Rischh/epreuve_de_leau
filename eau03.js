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

const validateArgCount = (args) => {
  if (args.length !== 1)
    return console.error(
  "Le programme a besoin d'un unique argument pour fonctionner."
)
return args[0]
}

const validateNumericArg = (arg) => {
  if (isNaN(arg))
    return console.error("Le programme a besoin d'un nombre entier.")
  return parseInt(arg)
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveFibonacciNumber = () => {
  const arg = validateArgCount(getArgs())
  if (!arg) return

  const number = validateNumericArg(arg)
  if (number === undefined) return

  return getFibonacciNumber(number)
}

console.log(resolveFibonacciNumber())
