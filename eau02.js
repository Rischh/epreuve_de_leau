const getReverseArray = (arr) => {
  const reverseArray = []

  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i])
  }

  return reverseArray
}

const isValidArgsLength = (args, wantedLength) => {
  if (args.length < wantedLength)
    return console.error(
      `Le programme a besoin d'au moins ${wantedLength} arguments pour fonctionner.`
    )
  return args
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const displayReverseArgs = () => {
  const args = isValidArgsLength(getArgs(), 2)
  if (!args) return

  const reverseArgs = getReverseArray(args)

  for (const arg of reverseArgs) console.log(arg)
}

displayReverseArgs()
