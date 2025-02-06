const displayBackwardsArguments = (arguments) => {
  for (let i = arguments.length - 1; i >= 0; i--) {
    console.log(arguments[i])
  }
}

const isValidArguments = (arguments) => {
  return arguments.length === 0
}

const getArguments = () => {
  const arguments = process.argv.slice(2)
  return arguments
}

const getBackwardsArguments = (displayBackwardsArguments, isValidArguments) => {
  if (isValidArguments)
    return console.error("Le programme à besoin au moins d'un arugment pour fonctionner.")
  else displayBackwardsArguments
}

getBackwardsArguments(displayBackwardsArguments(getArguments()), isValidArguments(getArguments()))
