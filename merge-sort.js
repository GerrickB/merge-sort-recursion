const mergeSort = arr => {
  // let leftSorted = [];
  // let rightSorted = [];

  if (arr.length < 2) {
    return [];
  } else {
    //return [mergeSort(arr.slice(0, arr.length - 2))] //returns [ [ [ [Array] ] ] ]
    //mergeSort(arr.slice(arr.length - 2, arr.length));
    mergeSort(arr.slice(0, arr.length - 2))
  }
}

console.log(mergeSort([4,8,6,2,1,7,5,3]))
