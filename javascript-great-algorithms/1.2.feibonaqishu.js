/*
斐波那契数：
斐波那契数列指的是这样一个数列1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...每一项都等于前两项之和
 */

// 迭代写法
function fibonacci1(n) {
  var res1 = 1;
  var res2 = 1;
  var sum = res2;
  for (var i = 2; i < n; i++) {
    sum = res1 + res2;
    res1 = res2;
    res2 = sum;
  }
  return sum;
}

// 递归写法，参数n变大时，会出现浏览器假死现象
function fibonacci2(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci2(n - 1) + fibonacci2(n - 2);
  }
}

// 尾调用优化
function fibonacci3(n, res1 = 1, res2 = 1) {
  if (n <= 2) {
    return res2;
  } else {
    return fibonacci3(n - 1, res2, res1 + res2);
  }
}

// 闭包写法，实现记忆功能，避免了重复计算，提高性能
const fibonacci4 = function() {
  var mem = [0, 1];
  var f = function (n) {
    var res = mem[n];
    if (typeof res !== 'number') {
      mem[n] = f(n - 1) + f(n - 2);
      res = mem[n];
    }
    return res;
  }
  return f;
}();

// 更多资料
// https://blog.csdn.net/qq_39300332/article/details/80000837
// https://www.cnblogs.com/iriszhang/p/6093175.html
// https://segmentfault.com/a/1190000018473729