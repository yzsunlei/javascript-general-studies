/*
插入排序：
将未排序数据，对已排序数据序列从后向前扫描，找到对应的位置并插入
 */

function insertionSort(arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    const temp = arr[i];
    let j = i - 1;

    while (arr[j] > temp) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = temp;
  }

  return arr;
}

// test
const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(insertionSort(arr));

// 更多资料
// https://www.cnblogs.com/kongxianghai/p/3998020.html
// https://blog.csdn.net/bangbanggangan/article/details/80986501
// https://segmentfault.com/a/1190000019147630