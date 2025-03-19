const getNextPrime = (n) => {
  let nextPrime

  let isComposite = true
  for (let i = n + 1; isComposite; i++) {
    for (let j = 2; j <= i; j++) {
      if (j === i) {
        isComposite = false
        nextPrime = i
      }
      if (i % j === 0) break
    }
  }
  return nextPrime
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

const getArgs = () => process.argv.slice(2)

const displayNextPrime = () => {
  const arg = validateArgCount(getArgs())
  if (!arg) return

  const number = validateNumericArg(arg)
  if (number === undefined) return

  return getNextPrime(number)
}

console.log(displayNextPrime())
