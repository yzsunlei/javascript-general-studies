/*
希尔排序：
希尔排序是按一定的间隔对数列进行分组，然后在每一个分组中做插入排序；
随后逐次缩小间隔，在每一个分组中做插入排序...
直到间隔等于1，做一次插入排序后结束。
 */

function shellSort(arr) {
  const len = arr.length;
  let gap = Math.floor(len / 2);

  while (gap > 0) {
    // 注意下面这段 for 循环和插入排序极为相似
    for (let i = gap; i < len; i++) {
      const temp = arr[i];
      let j = i - gap;

      while (arr[j] > temp) {
        arr[j + gap] = arr[j];
        j -= gap;
      }
      arr[j + gap] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  return arr;
}

// test
const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(shellSort(arr));

// 更多资料
// https://blog.csdn.net/lhjuejiang/article/details/80505127
// https://segmentfault.com/a/1190000015489853
// https://www.jianshu.com/p/7492408acab5