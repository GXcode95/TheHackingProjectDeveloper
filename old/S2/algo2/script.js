//?----------------
//$ ---- MERGE ----
//?----------------

function merge(start, end) {
  let sortedArr = []

  while (start.length && end.length) {
    // comparer les premier élement de chauqe tableau
    // Insérer le plus petit elem dans la sortedArr
    exoMerge++
    start[0] > end[0] ? sortedArr.push(end.shift()) : sortedArr.push(start.shift())
  }

  // Retourne les 3 array combine (... = Spread operator)
  // si nos tableau était d'une lengt différente
  // ça évite de laisser des valeur dans start ou end 
  return [...sortedArr, ...start, ...end]
}
function mergeSort(array) {
  if (array.length <= 1) return array 
  
  const half = array.length / 2
  // array => [1,2,3,4]
  const start = array.splice(0,half)
  // array => [3,4], soit la moitié droite du tableau
  
  return merge(mergeSort(start), mergeSort(array));
}

//?----------------
//$ ---- EXO 1 ---- 
//?----------------


function sumOfTwo(array, k) {
  
  for(let i = 0; i < array.length; i++ ){
    for(let j = 0; j < array.length; j++){
      exo01++
      if(i != j && array[j] + array[i] == k) return true;
    }
  }
  
  return false
}


//?----------------
//$ ---- EXO 2 et 4 et 6 ----
//?----------------


function realEstate(array) {
  let nbBuilding

  let temp = array[array.length - 1]
  for(let i = array.length - 1 ; i >= 0; i--){
    //exo02++
    if(array[i] > temp) {
      temp = array[i] 
      nbBuilding++
    }
  }
  return nbBuilding
}


//?----------------
//$ ---- EXO 3 ----
//?----------------
//$ [1,2,3,4,5] 10



function sumOfTwoV2(array, k) {

  const set = new Set(array)
  for (let i of set) {
    if (set.has(5)) return true  
  }
  return false
}


//?----------------
//$ ---- EXO 5 ----
//?----------------


function google(array, k) {
  let set = new Set() 

  for (let i = 0; i < array.length;i++) {
    //exo05++
    if (set.has(k-array[i])) return true  
    set.add(array[i])
  }
  return false
}


const array2 = [10,15,3,34, 6,15,132,456,8,1,67,1,987,31,84,61,-548684,156,86,-45, 64]
let array = [48, -2, 6, 12, 0 ,-4]
let exoMerge = 0;
let exo01 = 0;let  exo02 = 0;let  exo03 = 0
let exo04 = 0;let  exo05 = 0;let  exo06 = 0

try {
  console.log( "-----  merge -----")
  console.table( mergeSort(array2) )
  
  console.log( "\n-----  exo 1  -----\n")
  array = [48, -2, 6, 12, 0 ,-4]
  console.log("       ", sumOfTwo(array, 18) )
  
  console.log( "\n-----  exo 2  -----\n")
  array = [48, -2, 6, 12, 0 ,-4]
  console.log("        ", realEstate(array) )

  console.log( "\n-----  exo 3  -----\n")
  array = [48, -2, 6, 12, 0 ,-4]
  console.log("       ", sumOfTwoV2(array, 10) )
  
  console.log( "\n-----  exo 4  -----\n")
  array = [48, -2, 6, 12, 0 ,-4]
  console.log("        ", realEstate(array) )

  console.log( "\n-----  exo 5  -----\n")
  array = [48, -2, 6, 12, 0 ,-4]
  console.log("       ", google(array, 18) )

  console.log( "\n-----  exo 6  -----\n")
  array = [48, -2, 6, 12, 0 ,-4]
  console.log("        ", realEstate(array) )
  
  let perf = {
    "merge" : exoMerge, 
    "sumOfTwo v1" : exo01, 
    "realEstate v1" : exo02, 
    "sumOfTwo v2" : exo03,
    "realEstate v2" : exo02, 
    "google" : exo05,
    "mailChimp" : exo02
  }

  console.table(perf)


} catch (error) {
  console.error(error.message)
}
