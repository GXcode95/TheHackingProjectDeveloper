function singleDigit(n) {
  while (n.toString().split('').length >= 2) {
    n = n.toString().split('')
    n[1]= Number(n[0]) + Number(n[1])
    n.shift()
    n = n.join('')
  }
  return n
}

console.log(singleDigit(6649))
