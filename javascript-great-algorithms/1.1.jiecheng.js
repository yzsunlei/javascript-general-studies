/*
阶乘：
代表着所有小于或等于n的整数的乘积，数学上通常简写成 n!
 */

// 循环写法
function factorial1(num) {
  var result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

// 递归写法
function factorial2(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial2(n - 1);
  }
}

// 更多资料
// https://segmentfault.com/q/1010000000672936
// https://blog.csdn.net/qq_37120738/article/details/79982652
// https://www.jianshu.com/p/bd73e0475a75
