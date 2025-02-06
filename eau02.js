const displayBackwardsArguments = (arguments) => {
  for (let i = arguments.length - 1; i >= 0; i--) {
    console.log(arguments[i])
  }
}

const isValidArguments = (arguments) => {
  if (arguments.length === 0) {
    return console.error("Le programme à besoin au moins d'un arugment pour fonctionner.")
  }
  return arguments
}

const getArguments = () => {
  const arguments = process.argv.slice(2)
  return arguments
}

const getBackwardsArguments = () => {
  const arguments = isValidArguments(getArguments())
  if (!arguments) return
  displayBackwardsArguments(arguments)
}

getBackwardsArguments()
