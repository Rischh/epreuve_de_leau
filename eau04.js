const getNextPrimeNumber = (n) => {
  let nextPrimeNumber

  let isComposite = true
  for (let i = n + 1; isComposite; i++) {
    for (let j = 2; j <= i; j++) {
      if (j === i) {
        isComposite = false
        nextPrimeNumber = i
      }
      if (i % j === 0) break
    }
  }
  return nextPrimeNumber
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

  return getNextPrimeNumber(number)
}

console.log(resolveNextPrimeNumber())
