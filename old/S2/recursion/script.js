const computeFactorialRec = (n) => {
  return n > 1 ? n *= computeFactorialRec(n-1) : n
}

//console.log(computeFactorialRec(5))

//$ ------------------------------------------------------------------------------------------
const computePowerRec = (n, p) => {
  return p > 1 ? n *= computePowerRec(n,p-1) : n 
}
//console.log(computePowerRec(5,3))
//$ ------------------------------------------------------------------------------------------

//? V1
const computeSquareRoot = (n, p=1) => { 
  return p * p == n ? p : computeSquareRoot(n,p+1) 
}

//? V3
const computeSquareRoot = (n, p=n/2.0, i=1,precision=16  ) => {
  if(n<0) return 0 // evite divide 0
  let x = ((n/p) + p ) / 2
  return (p * p == n || i == precision) ? `La racine de ${n} est ${p.toString().slice(0,precision)}` : computeSquareRoot(n, x, i+1)
}
// console.log(
//   computeSquareRoot(23846521548646313516853168496)
// )



//$ ------------------------------------------------------------------------------------------
const findSupPrime = (n, i=2) => {
  if (n < 2 || n % i == 0) return false
  return (i == n - 1) ? true : findSupPrime(n, i+1)
    
}
//console.log( 
//  findSupPrime("7 => " + 7),
//  findSupPrime("25 => " +25)
//)
