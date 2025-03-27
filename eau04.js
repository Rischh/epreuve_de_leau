const getNextPrimeNumber = (n, isPrimeNumber) => {
  let nextPrimeNumber = n + 1

  let isComposite = true

  while (isComposite) {
    if (isPrimeNumber(nextPrimeNumber)) return nextPrimeNumber
    nextPrimeNumber++
  }
}

const isPrimeNumber = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

const isValidArgsLength = (args) => {
  if (args.length !== 1)
    return console.error(
      "Le programme a besoin d'un unique argument pour fonctionner."
    )
  return args[0]
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

const resolveNextPrimeNumber = () => {
  const arg = isValidArgsLength(getArgs())
  if (!arg) return

  const number = isValidNumber(arg)
  if (number === undefined) return

  return getNextPrimeNumber(number, isPrimeNumber)
}

console.log(resolveNextPrimeNumber())
