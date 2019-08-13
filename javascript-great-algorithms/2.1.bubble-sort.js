/*
冒泡排序：
比较每相邻两个数，如果前者大于后者，就把两个数交换位置；这样一来，第一轮就可以选出一个最大的数放在最后面；
那么经过 n-1（数组的 length - 1） 轮，就完成了所有数的排序。
 */

// 普通冒泡
function bubbleSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let changeOccur = false; //用于标记某次外循环中，是否方式内循环交换事件
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        changeOccur = true;
      }
    }

    if (!changeOccur) { //如果一次外循环中，没有发生一次内循环交换，那么可以直接结束排序比较
      break;
    }
  }
}

// 双向冒泡
function bubbleSort2(arr) {
  const length = arr.length;
  let low = 0;
  let high = length - 1;

  while (low < high) {
    let changeOccur = false;
    for (let j = low; j < high; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // 改用es6的写法
        changeOccur = true;
      }
    }
    if (!changeOccur) {
      break; // 如果一次交换也没有发生，那直接就可以跳出，结束排序
    }
    high--;
    changeOccur = false;
    for (let j = high; j > low; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        changeOccur = true;
      }
    }
    if (!changeOccur) {
      break;
    }
    low++;
  }
}

// test
const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(bubbleSort(arr));
console.log(bubbleSort2(arr));

// 更多资料
// https://segmentfault.com/a/1190000014175918
// http://www.imooc.com/article/268142?block_id=tuijian_wz
// https://www.cnblogs.com/Bonnie3449/p/9574421.html