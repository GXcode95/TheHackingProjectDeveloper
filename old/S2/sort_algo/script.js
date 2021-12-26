function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
    let isSort = true
      for (let j = 0; j < array.length; j++) {
  
      bubble ++
      if ( array[j] > array[j + 1] ) {
			  isSort = false
        swap(array, j, j+1) 
			}
		}
    if (isSort == true){ 
       return array
    }
	}
	return array;
}

function selectSort(array) {
  for (let j = 0; j < array.length; j++) {
    let indexMin = j;
    
    for (let i = j+1; i < array.length; i++ ){
      select++
      if ( array[indexMin] > array[i]) swap(array, j,i )
    }
  }

  return array
}

function insertionSort(array) {
      for (let i = 1; i < array.length; i++) {

        let current = array[i];

        let j = i-1; 

        while ((j > -1) && (current < array[j])) {
          insert++

          array[j+1] = array[j];
          j--;
        }
        array[j+1] = current;
      }
  return array;
}

function insertionSortV2(array) {
  for (let i = 1; i < array.length; i++) {

    let current = array[i];
    // On part de la valeur précédente du tableau
    let j = i-1; 

    while ((j > -1) && (current < array[j])) {
      // On descend jusqu'a trouver l'index plus petit que current
      insert2++
      j--;
    }

    // [1,2,5,8,3,9]
    array.splice(j+1, 0, current)
    // [1,2,3,5,8,3,9]
    array.splice(i+1, 1) // on fait i+1 car l'index de current a bouger quand on a insérer dans le tableau
    // [1,2,3,5,8,9]
  }
return array;
}

function quickSort(array, left, right){
  left = left || 0
  right = right || array.length - 1
  
  const pivot = partition(array, left, right)

  if(left < pivot - 1) {// trié du pivot jusqu'a right , qui par de la fin du tableau
    quickSort(array, left, pivot - 1)
  }
  
  if(right > pivot){ // trié du pivot jusqu'a right , qui par de la fin du tableau
    quickSort(array, pivot, right)
  }

  return array
}

function partition(array, left, right) {
  
  // Je place mon pivot au milieu du tableau
  const pivot = Math.floor((left + right) / 2)
  // tant que left et right ne ce sont pas croisé
  while ( left <= right){
    //je positione left sur le plus petit index du tableau contenant un chiffre supérieur au pivot
    while (array[left] < array[pivot]) {
      left++
    }
    //je positione rigth sur le plus grand index du tableau contenant un chiffre inférieur au pivot
    while (array[right] > array[pivot]) {
      right--
    }
    // Si left et right ne se sont pas croisé
    // je les swap, et je continue de les (in/dé)crémentés
    if (left <= right) {
      swap(array,left,right)
      left++
      right--
    }
  }
  // je renvoie left, qui est égal ou supérieur de 1 a mon pivot
  return left 
}

function swap(array, index1, index2 ) {
  let tmp = array[index1]
  array[index1] = array[index2]
  array[index2] = tmp
}



//* fs is requiered to read argument on node
//const fs = require('fs');
//const fileName = process.argv[2];



let select = 0
let bubble = 0
let insert = 0
let insert2 = 0
let quick0 = 0
let quick01 = 0
let quick02 = 0
let quick03 = 0
let quick04 = 0
let quick05 = 0
  //const data2 = [8763, -133, 246, -714, 42, 42, 2339, -42, 1506, 651, -321, 8763, -133, 246, -714, 42, 42, 2339, -42, 1506, 651, -321, 8763, -133, 246, -714, 42, 42, 2339, -42, 1506, 651, -321, 8763, -133, 246, -714, 42, 42, 2339, -42, 1506, 651, -321, 8763, -133, 246, -714, 42, 42, 2339, -42, 1506, 651, -321, 8763, -133, 246, -714, 42, 42, 2339, -42, 1506, 651, -321, 8763, -133, 246, -714, 42, 42, 2339, -42, 1506, 651, -321, 8763, -133, 246, -714, 42, 42, 2339, -42, 1506, 651, -321]
  //const data3 = [48, -2, 6, 12, 0, -4]
  const data1 = [8763, -133, 246, -714, 42, 42, 2339, -42, 1506, 651, -321]
  const data2 = [8763, -133, 246, -714, 42, 42, 2339, -42, 1506, 651, -321]
  const data3 = [8763, -133, 246, -714, 42, 42, 2339, -42, 1506, 651, -321]
  const data4 = [8763, -133, 246, -714, 42, 42, 2339, -42, 1506, 651, -321]
  console.table(insertionSort(data1))
  console.table(insertionSortV2(data2))
// Méthode asynchrone
// try {
//   //const data = fs.readFileSync(fileName, 'utf8')

//   let testData = data1
//   console.table(testData)
//   console.log("///////////////////////////////////")

//   console.table(bubbleSort(testData))
//   console.log("bubble =>", bubble )
//   testData = data2
  
//   console.log("-----------------------------------")
  
//   console.table(selectSort(testData))
//   console.log("select =>", select )
//   testData = data3
  
//   console.log("-----------------------------------")

//   console.table(insertionSort(testData))
console.log("insert =>", insert )
console.log("insert =>", insert2 )
//   testData = data4
  
//   console.log("-----------------------------------")
//   console.table(quickSort(testData))
//   console.log("quick0 =>", quick0 )
//   console.log("quick01 =>", quick01 )
//   console.log("quick02 =>", quick02 )
//   console.log("quick03 =>", quick03 )
//   console.log("quick04 =>", quick04 )
//   console.log("quick05 =>", quick05 )

// } catch (error) {
// 	console.error(error.message)
// }

// Méthode synchrone
//fs.readFile(fileName, 'utf8', (error,data) => {
//	if (error) {
//		console.log(error.message)
//		return
//	}
//	console.log(data)
//})


// function quickSort(array, left, right){
//   left = left || 0
//   right = right || array.length - 1
//   quick0++
//   const pivot = partition(array, left, right)
  
//   if(left < pivot - 1) {
//     quick01++
//     quickSort(array, left, pivot - 1)
//   }

//   if(right > pivot){
//     quick02++
//     quickSort(array, pivot, right)
//   }

//   return array
// }

let a = [1,4,5]
a.splice(2,0,5)
console.log(a)