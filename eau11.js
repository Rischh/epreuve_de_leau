const getAbsoluteMinDiff = (numbers, setMinMax) => {
  let absoluteMinDiff = Infinity

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const [min, max] = setMinMax(numbers[i], numbers[j])
      const minDiff = max - min

      if (minDiff < absoluteMinDiff) {
        absoluteMinDiff = minDiff
      }
    }
  }

  return absoluteMinDiff
}

const setMinMax = (a, b) => {
  let min, max

  if (a > b) {
    max = a
    min = b
  } else {
    max = b
    min = a
  }

  return [min, max]
}

const isValidArgsLength = (args, wantedLength) => {
  if (args.length < wantedLength)
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

const resolveAbsoluteMinDiff = () => {
  const args = isValidArgsLength(getArgs(), 3)
  if (!args) return

  const numbers = []
  for (const arg of args) {
    if (!isValidNumber(arg)) return
    numbers.push(+arg)
  }

  return getAbsoluteMinDiff(numbers, setMinMax)
}

console.log(resolveAbsoluteMinDiff())
