/*
最小公倍数：
两个或多个整数公有的倍数叫做它们的公倍数，其中除0以外最小的一个公倍数就叫做这几个整数的最小公倍数
 */

// 普通轮询
function lcm(a, b) {
  var max = Math.max(a, b);
  for (var i = max; i <= a * b; i++) {
    if (i % a == 0 && i % b == 0) {
      return i;
    }
  }
}

// 更多资料
// https://www.cnblogs.com/zhao12354/p/5721542.html
// https://my.oschina.net/flyyourdream/blog/867209
// https://chrunlee.cn/article/js-common-denominators.html