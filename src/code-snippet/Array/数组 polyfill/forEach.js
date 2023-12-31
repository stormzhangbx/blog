/**
 * 重写forEach, 提高兼容性
 * @param {array} arr
 * @param {function} fn
 */
const forEach = (arr, fn) => {
  if (!arr.length || !fn) return
  let i = -1
  let len = arr.length
  while (++i < len) {
    let item = arr[i]
    fn(item, i, arr)
  }
}
