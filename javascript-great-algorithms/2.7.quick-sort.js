/*
快速排序：
选基准：在数据结构中选择一个元素作为基准(pivot)
划分区：参照基准元素值的大小，划分无序区，所有小于基准元素的数据放入一个区间，所有大于基准元素的数据放入另一区间，
        分区操作结束后，基准元素所处的位置就是最终排序后它应该所处的位置
递归：对初次划分出来的两个无序区间，递归调用第 1步和第 2步的算法，直到所有无序区间都只剩下一个元素为止。
*/

function quickSort(arr) {
  const pivot = arr[0];
  const left = [];
  const right = [];

  if (arr.length < 2) { return arr; }

  for (let i = 1, len = arr.length; i < len; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

// test
const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(quickSort(arr));

// 更多资料
// https://www.cnblogs.com/LIUYANZUO/p/5745306.html
// https://segmentfault.com/a/1190000014406198
// https://blog.csdn.net/neulily2005/article/details/83577403
// https://www.cnblogs.com/hjx-blog/articles/9183453.html
