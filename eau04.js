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

const isValidArgsLength = (args, wantedLength) => {
  if (args.length !== wantedLength)
    return console.error(
      `Le programme a besoin de ${wantedLength} argument pour fonctionner.`
    )
  return args
}

const isValidNumber = (n) => {
  if (isNaN(n)) return console.error("Le programme a besoin d'un nombre.")
  return parseInt(n)
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveNextPrimeNumber = () => {
  const args = isValidArgsLength(getArgs(), 2)
  if (!args) return

  const number = isValidNumber(args[0])
  if (number === undefined) return

  return getNextPrimeNumber(number, isPrimeNumber)
}

console.log(resolveNextPrimeNumber())
