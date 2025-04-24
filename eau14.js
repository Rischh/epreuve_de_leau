const getSortedByAscii = (strings) => {
  const copy = [...strings]

  let count = 0

  const indexes = []

  for (let i = 0; i < strings.length; i++) {
    let index = strings.length - 1

    for (let j = 1; j < copy.length; j++) {
      if (copy[0].charCodeAt(0) === copy[j].charCodeAt(0)) {
        let char = 0
        while (copy[0].charCodeAt(char) === copy[j].charCodeAt(char)) {
          char++
        }

        if (copy[0].charCodeAt(char) < copy[j].charCodeAt(char)) {
          index--
        }
      }

      if (copy[0].charCodeAt(0) < copy[j].charCodeAt(0)) {
        index--
      }
    }

    indexes.push(index)
    count++
    ;[copy[0], copy[count]] = [copy[count], copy[0]]
  }

  const result = [...strings]

  for (let i = 0; i < indexes.length; i++) {
    result[indexes[i]] = strings[i]
  }

  return result
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

const resolveSortedByAscii = () => {
  const args = isValidArgsLength(getArgs(), 2)
  if (!args) return

  return getSortedByAscii(args).join(" ")
}

console.log(resolveSortedByAscii())
