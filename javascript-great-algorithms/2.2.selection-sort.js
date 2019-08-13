/*
选择排序：
初始时在序列中找到最小（大）元素，放到序列的起始位置作为已排序序列。
再从剩余未排序元素中继续寻找最小（大）元素，放到已排序序列的末尾。
依次类推，直到所有元素均排序完毕。
 */

function selectionSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let maxIndex = i;

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    if (i !== maxIndex) {
      let temp = arr[i];
      arr[i] = arr[maxIndex];
      arr[maxIndex] = temp;
    }
  }

  return arr;
}

// test
const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(selectionSort(arr));

// 更多资料
// https://segmentfault.com/a/1190000009366805
// https://blog.csdn.net/bangbanggangan/article/details/81016902
// https://segmentfault.com/a/1190000016006676
// https://www.jianshu.com/p/15799f4c7992