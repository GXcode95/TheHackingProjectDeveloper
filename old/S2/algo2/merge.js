function merge(start, end) {
  let sortedArr = []
  while (start.length && end.length)
    start[0] > end[0]  ? sortedArr.push(end.shift()) : sortedArr.push(start.shift())
  return [...sortedArr, ...start, ...end]
}
function mergeSort(array) {
  if (array.length <= 1) return array 
  const half = array.length / 2
  return merge(mergeSort(array.splice(0,half)), mergeSort(array));
}


// const array = [10,15,3,34, 6,15,132,456,8,1,67,1,987,31,84,61,-548684,156,86,-45, 64]
// console.table( mergeSort(array) )


const array = [1,1,2,2,3,3]
let set = new Set(array)
console.log(set)
