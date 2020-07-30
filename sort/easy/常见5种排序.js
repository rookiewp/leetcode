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
