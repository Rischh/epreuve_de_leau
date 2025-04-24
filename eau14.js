const getSortedByAscii = (arr) => {
  const copyArr = [...arr]

  let count = 0

  const places = []

  for (let i = 0; i < arr.length; i++) {
    let place = arr.length - 1

    for (let j = 1; j < copyArr.length; j++) {
      if (copyArr[0].charCodeAt(0) === copyArr[j].charCodeAt(0)) {
        let index = 0
        while (copyArr[0].charCodeAt(index) === copyArr[j].charCodeAt(index)) {
          index++
        }

        if (copyArr[0].charCodeAt(index) < copyArr[j].charCodeAt(index)) {
          place--
        }
      }

      if (copyArr[0].charCodeAt(0) < copyArr[j].charCodeAt(0)) {
        place--
      }
    }

    places.push(place)
    count++
    ;[copyArr[0], copyArr[count]] = [copyArr[count], copyArr[0]]
  }

  const result = [...arr]

  for (let i = 0; i < places.length; i++) {
    result[places[i]] = arr[i]
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
