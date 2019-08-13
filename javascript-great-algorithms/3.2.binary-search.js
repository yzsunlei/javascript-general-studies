/*
二分查找：
前提：数组、有序。逻辑：优先和数组的中间元素比较，如果等于中间元素，则直接返回。如果不等于则取半继续查找。
 */

function binarySearch(arr, value) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] > value) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return -1;
}

// 更多资料
// https://blog.csdn.net/phoebe_16/article/details/54613240
// https://www.jianshu.com/p/eef65b21ace0
// https://www.cnblogs.com/YikaJ/p/4387909.html