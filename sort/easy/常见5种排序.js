// 冒泡排序 O(n2)
function bubbleSort(arr) {
  if (arr.length < 1) return;
  let hasChange = false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let n = 0; n < arr.length - 1; n++) {
      if (arr[n] > arr[n + 1]) {
        const temp = arr[n];
        arr[n] = arr[n + 1];
        arr[n + 1] = temp;
        hasChange = true;
      }
    }
    if (!hasChange) return;
  }
}

// 插入排序 O(n2)
function insertSort(arr) {
  if (arr.length < 1) return arr;
  for (let i = 1; i < arr.length; i++) {
    let n = i;
    while (n > 0) {
      if (arr[n - 1] > arr[n]) {
        const temp = arr[n - 1];
        arr[n - 1] = arr[n];
        arr[n] = temp;
        n--;
      } else {
        break;
      }
    }
  }
}

// 选择排序 O(n2)
function selectSort(arr) {
  if (arr.length < 1) return arr;
  for (let i = 0; i < arr.length - 1; i++) {
    let index = i;
    let min = arr[index];
    for (let n = i; n < arr.length - 1; n++) {
      if (min > arr[n + 1]) {
        index = n + 1;
        min = arr[index];
      }
    }
    const temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }
}

// 快排 O(nlogn)
function quickSort(arr) {
  function sort(arr, head, tail) {
    if (tail <= head) return;
    let j = head;
    let point = tail;
    for (let i = head; i <= tail; i++) {
      if (arr[i] <= arr[point]) {
        if (i === point) point = j;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
      }
    }
    sort(arr, head, point - 1);
    sort(arr, point + 1, tail);
  }
  sort(arr, 0, arr.length - 1);
}

// 归并排序 O(nlogn)
function mergeSort(arr) {
  function merge(arr1, arr2) {
    const result = [];
    let j = 0;
    let i = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    return result;
  }
  function sort(arr) {
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);
    return merge(sort(arr.slice(0, middle)), sort(arr.slice(middle)));
  }
  return sort(arr);
}
