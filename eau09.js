const getBetweenMinMax = (min, max) => {
  const result = []

  for (let i = min; i < max; i++) {
    result.push(i)
  }

  return result
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
  if (args.length !== wantedLength)
    return console.error(
      "Le programme a besoin de 2 arguments pour fonctionner."
    )
  return args
}

const isValidNumber = (stringNumber) => {
  if (isNaN(stringNumber))
    return console.error("Le programme a besoin de 2 nombres pour fonctionner.")
  return stringNumber
}

const isEqual = (a, b) => {
  if (a === b)
    return console.error("Le programme a besoin de 2 arguments non égaux.")
  return true
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveBetweenMinMax = () => {
  const args = isValidArgsLength(getArgs(), 2)
  if (!args) return

  const numbers = []
  for (const arg of args) {
    if (!isValidNumber(arg)) return
    numbers.push(+arg)
  }

  const [fisrtNumber, secondNumber] = numbers

  if (!isEqual(fisrtNumber, secondNumber)) return

  const [min, max] = setMinMax(fisrtNumber, secondNumber)

  return getBetweenMinMax(min, max).join(" ")
}

console.log(resolveBetweenMinMax())
