/*
最大公约数：
几个整数中公有的约数，叫做这几个数的公约数；其中最大的一个，叫做这几个数的最大公约数
 */

// 普通循环版
function gcd(a, b) {
  var min = Math.min(a, b);
  for (var i = min; i > 0; i--) {
    if (a % i == 0 && b % i == 0) {
      return i;
    }
  }
}

// 简洁递归版
function gcd2(a, b) {
  return b != 0 ? gcd2(b, a % b) : a;
}

// 更多资料
// https://www.cnblogs.com/zhao12354/p/5721542.html
// https://cobain-li.iteye.com/blog/2296959
// https://segmentfault.com/q/1010000019130268/a-1020000019131550