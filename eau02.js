const displayBackwardsArguments = (programArguments) => {
  for (let i = programArguments.length - 1; i >= 0; i--) {
    console.log(programArguments[i])
  }
}

const validateArgumentCount = (programArguments) => {
  if (programArguments.length === 0)
    return console.error("Le programme à besoin au moins d'un argument pour fonctionner.")
  return programArguments
}

const getArguments = () => process.argv.slice(2)

const getBackwardsArguments = () => {
  const programArguments = validateArgumentCount(getArguments())
  if (!programArguments) return

  displayBackwardsArguments(programArguments)
}

getBackwardsArguments()
