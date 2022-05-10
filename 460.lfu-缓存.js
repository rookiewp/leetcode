/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity
  this.key2Val = new Map()
  this.key2Freq = new Map()
  this.freq2Keys = new Map()
  this.minFreq = 0
}

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (!this.key2Val.has(key) || this.capacity === 0) {
    return -1
  }
  this.addFreq(key)
  return this.key2Val.get(key)
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) return
  if (this.key2Val.has(key)) {
    this.key2Val.set(key, value)
    this.addFreq(key)
    return
  }
  this.key2Val.set(key, value)
  this.key2Freq.set(key, 1)

  if (this.key2Val.size > this.capacity) {
    const keys = this.freq2Keys.get(this.minFreq)
    const firstKey = keys.keys().next().value
    keys.delete(firstKey)
    if (keys.size === 0) {
      this.freq2Keys.delete(this.minFreq)
    }
    this.key2Val.delete(firstKey)
    this.key2Freq.delete(firstKey)
  }
  const keys = this.freq2Keys.get(1) || new Set()
  keys.add(key)
  this.freq2Keys.set(1, keys)
  this.minFreq = 1
}

LFUCache.prototype.addFreq = function (key) {
  const freq = this.key2Freq.get(key)
  const newFreq = freq + 1
  this.key2Freq.set(key, newFreq)
  this.freq2Keys.get(freq).delete(key)
  if (this.freq2Keys.get(freq).size === 0) {
    this.freq2Keys.delete(freq)
  }
  const keys = this.freq2Keys.get(newFreq) || new Set()
  keys.add(key)
  this.freq2Keys.set(newFreq, keys)
  if (!this.freq2Keys.has(this.minFreq)) {
    this.minFreq++
  }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
