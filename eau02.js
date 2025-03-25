const getBackwardsArgs = (args) => {
  const backwardsArgs = []

  for (let i = args.length - 1; i >= 0; i--) backwardsArgs.push(args[i])

  return backwardsArgs
}

const validateArgsCount = (args) => {
  if (args.length < 2)
    return console.error(
      "Le programme a besoin d'au moins deux arguments pour fonctionner."
    )
  return args
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveBackwardsArgs = () => {
  const args = validateArgsCount(getArgs())
  if (!args) return

  const backwardsArgs = getBackwardsArgs(args)

  for (const arg of backwardsArgs) console.log(arg)
}

resolveBackwardsArgs()
