// 一个有序的没有重复的数组, 这是最简单的二分查找
function bSearch(arr, value) {
  let head = 0;
  let tail = arr.length - 1;
  while (head <= tail) {
    let mid = Math.floor((head + tail) / 2);
    if (arr[mid] === value) {
      return mid;
    }
    if (arr[mid] > value) {
      tail = mid - 1;
    } else {
      head = mid + 1;
    }
  }
  return -1;
}

// 二分查找变体

// 变体一: 在有序重复数组中查找第一个值等于给定值的元素
function bSearch2(arr, value) {
  let head = 0;
  let tail = arr.length - 1;
  while (head <= tail) {
    let mid = Math.floor((head + tail) / 2);
    if (arr[mid] === value) {
      if (mid === 0 || arr[mid - 1] < value) return mid;
      if (arr[mid - 1] === value) {
        tail = mid - 1;
      }
    }
    if (arr[mid] > value) {
      tail = mid - 1;
    } else {
      head = mid + 1;
    }
  }
  return -1;
}

// 变体二：在有序重复数组中查找 “最后一个值等于” 给定值的元素
function bSearch3(arr, value) {
  let head = 0;
  let tail = arr.length - 1;
  while (head <= tail) {
    let mid = Math.floor((head + tail) / 2);
    if (arr[mid] === value) {
      if (mid === arr.length - 1 || arr[mid + 1] > value) return mid;
      if (arr[mid + 1] === value) {
        head = mid + 1;
      }
    }
    if (arr[mid] > value) {
      tail = mid - 1;
    } else {
      head = mid + 1;
    }
  }
  return -1;
}

// 变体三：在有序重复数组中查找 “第一个大于” 给定值的元素
function bSearch4(arr, value) {
  let head = 0;
  let tail = arr.length - 1;
  while (head <= tail) {
    let mid = Math.floor((head + tail) / 2);
    if (arr[mid] <= value) {
      head = mid + 1;
    } else {
      if (mid === 0 || arr[mid - 1] <= value) return mid;
      if (arr[mid - 1] > value) {
       tail = mid - 1;
      }
    }
  }
  return -1;
}

// 变体四：在有序重复数组中查找 “第一个大于等于” 给定值的元素
function bSearch5(arr, value) {
  let head = 0;
  let tail = arr.length - 1;
  while (head <= tail) {
    let mid = Math.floor((head + tail) / 2);
    if (arr[mid] < value) {
      head = mid + 1;
    } else {
      if (mid === 0 || arr[mid - 1] < value) return mid;
      if (arr[mid - 1] >= value) {
       tail = mid - 1;
      }
    }
  }
  return -1;
}

// 变体五：在有序重复数组中查找 “最后一个小于” 给定值的元素
function bSearch6(arr, value) {
  let head = 0;
  let tail = arr.length - 1;
  while (head <= tail) {
    let mid = Math.floor((head + tail) / 2);
    if (arr[mid] >= value) {
      tail = mid - 1;
    } else {
      if (mid === arr.length - 1 || arr[mid + 1] >= value) return mid;
      if (arr[mid + 1] < value) {
       head = mid + 1;
      }
    }
  }
  return -1;
}

// 变体六：在有序重复数组中查找 “最后一个小于等于” 给定值的元素
function bSearch7(arr, value) {
  let head = 0;
  let tail = arr.length - 1;
  while (head <= tail) {
    let mid = Math.floor((head + tail) / 2);
    if (arr[mid] > value) {
      tail = mid - 1;
    } else {
      if (mid === arr.length - 1 || arr[mid + 1] > value) return mid;
      if (arr[mid + 1] <= value) {
       head = mid + 1;
      }
    }
  }
  return -1;
}
