/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.map = new Map()
  this.doubleLink = new DoubleLink()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.map.get(key)
  if (!node) {
    return -1
  }
  this.doubleLink.remove(node)
  this.doubleLink.add(node)
  return node.value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = new LinkNode(key, value)
  this.map.set(key, node)
  if (this.doubleLink.size >= this.capacity) {
    const first = this.doubleLink.removeFirst()
    this.map.delete(first.key)
  }
  this.doubleLink.add(node)
}

var LinkNode = function (key, value) {
  this.value = value
  this.key = key
  this.prev = null
  this.next = null
}

var DoubleLink = function () {
  this.head = new LinkNode(null, null)
  this.tail = new LinkNode(null, null)
  this.size = 0
  this.head.next = this.tail
  this.tail.prev = this.head
}

DoubleLink.prototype.add = function (node) {
  node.next = this.tail
  node.prev = this.tail.prev
  this.tail.prev.next = node
  this.tail.prev = node
  this.size++
}

DoubleLink.prototype.remove = function (node) {
  node.next.prev = node.prev
  node.prev.next = node.next
  node.next = null
  node.prev = null
  this.size--
}

DoubleLink.prototype.removeFirst = function () {
  if (this.head.next === this.tail) return null
  const first = this.head.next
  this.remove(first)
  return first
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
