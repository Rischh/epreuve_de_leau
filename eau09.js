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

const displayNumberRange = (min, max) => {
  let sequence = ""

  for (let i = min; i < max; i++) {
    sequence += `${i} `
  }

  console.log(sequence)
}

const validateArgsCount = (args) => {
  if (args.length !== 2)
    return console.error(
      "Le programme a besoin de 2 arguments pour fonctionner."
    )
  return args
}

const validateNumericArg = (arg) => {
  if (isNaN(arg))
    return console.error("Le programme a besoin de 2 nombres pour fonctionner.")
  return true
}

const checkEquality = (a, b) => {
  if (a === b)
    return console.error("Le programme a besoin de 2 arguments non égaux.")
  return true
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveNumberRange = () => {
  const args = validateArgsCount(getArgs())
  if (!args) return

  for (let i = 0; i < args.length; i++) {
    if (!validateNumericArg(args[i])) return
    args[i] = +args[i]
  }

  const [fisrtNumber, secondNumber] = args

  if (!checkEquality(fisrtNumber, secondNumber)) return

  const [min, max] = setMinMax(fisrtNumber, secondNumber)

  return displayNumberRange(min, max)
}

resolveNumberRange()
