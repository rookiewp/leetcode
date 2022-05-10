/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k // 堆的大小为k
  this.nums = nums
  this.count = 0 // 堆中已经存储的数据的个数
  this.heap = [null] // 堆
  // 建堆
  this.buildHeap()
  // 如果nums.length > k, 从上往下堆化
  let i = this.count
  while (i < this.nums.length && this.nums[i] !== undefined) {
    this.heapifyFromTop(this.nums[i])
    i++
  }
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.nums.push(val)
  // this.count < this.k 说明堆还没建完，继续建堆
  if (this.count < this.k) {
    this.buildHeap()
  } else {
    this.heapifyFromTop(val)
  }
  return this.heap[1]
}

// 从上往下堆化，类似与删除堆顶元素
KthLargest.prototype.heapifyFromTop = function (val) {
  if (val > this.heap[1]) {
    this.heap[1] = val
    let i = 1
    while (i <= this.count) {
      let minPos = i
      if (i * 2 <= this.count && this.heap[i] > this.heap[i * 2]) minPos = i * 2
      if (i * 2 + 1 <= this.count && this.heap[minPos] > this.heap[i * 2 + 1]) minPos = i * 2 + 1
      if (i === minPos) break
      this.swap(i, minPos)
      i = minPos
    }
  }
}

// 从下往上堆化
KthLargest.prototype.heapifyFromBottom = function (v) {
  this.heap.push(v)
  this.count += 1
  let i = this.count
  while (Math.floor(i / 2) > 0 && this.heap[i] < this.heap[Math.floor(i / 2)]) {
    this.swap(i, Math.floor(i / 2))
    i = Math.floor(i / 2)
  }
}

// 根据nums构建一个大小为k的小顶堆，可能存在k > nums.length的情况，这时堆没有建完，在add方法中继续建
KthLargest.prototype.buildHeap = function () {
  while (this.count < this.k && this.nums[this.count] !== undefined) {
    // 从下往上堆化
    this.heapifyFromBottom(this.nums[this.count])
  }
}

// 交换堆中2个元素
KthLargest.prototype.swap = function (i, j) {
  const temp = this.heap[i]
  this.heap[i] = this.heap[j]
  this.heap[j] = temp
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
