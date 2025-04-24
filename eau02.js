const getReversedArr = (arr) => {
  const reversedArr = []

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i])
  }

  return reversedArr
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

const displayReversedArgs = () => {
  const args = isValidArgsLength(getArgs(), 2)
  if (!args) return

  const reverseArgs = getReversedArr(args)

  for (const arg of reverseArgs) console.log(arg)
}

displayReversedArgs()
