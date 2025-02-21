const getSortedAsciiCodes = (args) => {
  const asciiCodes = []

  for (let i = 0; i < args.length; i++) {
    asciiCodes.push(args[i].charCodeAt())
  }

  return asciiCodes.sort()
}

const sortArgsByAscii = (args, sortedAsciiCodes) => {
  let sortedArgs = ""

  for (let i = 0; i < sortedAsciiCodes.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if (sortedAsciiCodes[i] === args[j].charCodeAt()) {
        sortedArgs += `${args[j]} `
        break
      }
    }
  }

  return sortedArgs
}

const validateArgsCount = (args) => {
  if (args.length < 2)
    return console.error("Le programme a besoin d'au moins 2 arguments pour fonctionner.")
  return args
}

const getArgs = () => process.argv.slice(2)

const runSortingProcess = () => {
  const args = validateArgsCount(getArgs())
  if (!args) return

  const sortedAsciiCodes = getSortedAsciiCodes(args)
  return sortArgsByAscii(args, sortedAsciiCodes)
}

console.log(runSortingProcess())
