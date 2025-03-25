const getCombinationsTwoNumbers = () => {
  const result = []

  for (let i = 0; i <= 99; i++) {
    for (let j = i + 1; j <= 99; j++) {
      result.push(`${String(i).padStart(2, "0")} ${String(j).padStart(2, 0)}`)
    }
  }

  return result
}

console.log(getCombinationsTwoNumbers().join(", "))
