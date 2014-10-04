export default {
  download(data, filename) {
    var link = document.createElement('a')
    link.download = filename
    link.href = `data:,${encodeURIComponent(data)}`
    document.body.appendChild(link)
    link.click()
    link.remove()
  },
  add(src, dst) {
    for (var key in src) {
      dst[key] || (dst[key] = 0)
      dst[key] += src[key]
    }
  },
  pad(len, c, s) {
    s = '' + s
    var prefix = c.repeat(len - s.length)
    return prefix + s
  },
  seq(index, end) {
    var arr = []
    while (index >= end)
      arr.push(index--)
    return arr
  },
  flat(arr) {
    return [].concat.apply([], arr)
  },
  group(arr, attr) {
    var groups = {}
    for (var item of arr) {
      var key = item[attr]
      groups[key] || (groups[key] = [])
      groups[key].push(item)
    }
    return groups
  },
  sort(arr, attr) {
    arr.sort((a, b) => {
      if (a[attr] > b[attr])
        return 1
      if (a[attr] < b[attr])
        return -1
      return 0
    })
  },
  values(obj) {
    var vals = []
    for (var key in obj)
      vals.push(obj[key])
    return vals
  },
  uid() {
    return Math.random().toString(36).slice(2)
  }
}
