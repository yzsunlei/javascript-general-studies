// 线性查找
function linearSearch(arr, data) {
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data) {
      return i;
    }
  }
  return -1;
}