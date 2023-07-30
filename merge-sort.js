debugger

const merge = (arr, firstIndex, mid, lastIndex) => {
  let p = firstIndex;
  let q = mid + 1;
  let newArr = new Array(lastIndex-firstIndex+1);
  let k = 0;

  for (let i = firstIndex; i <= lastIndex; i++) {
    if(p > mid) {
      newArr[k++] = arr[q++];
    } else if(q > lastIndex) {
      newArr[k++] = arr[p++];
    } else if(arr[p] < arr[q]) {
      newArr[k++] = arr[p++];
    } else {
      newArr[k++] = arr[q++];
    }
  }

  for (let j = 0; j < k; j++) {
    arr[firstIndex++] = newArr[j];
  }
}

const mergeSort = (arr, firstIndex, lastIndex) => {
  if (firstIndex < lastIndex) {
    let mid = Math.floor((firstIndex + lastIndex) / 2);
    mergeSort(arr, firstIndex, mid);
    mergeSort(arr, mid+1, lastIndex);

    merge(arr, firstIndex, mid, lastIndex);
    
  }
}

let arr = [4,8,6,2,1,7,5,3];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);

