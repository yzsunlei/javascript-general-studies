/*
杨辉三角形：
1) 每一行设为m行, 每行上面的某个元素, 设为第n个元素
2) 每一行上面, 第一个元素为1, 最后一个元素为1
3) 第m行上面, 有m个元素
4) 第m行上面的第n个元素的值, 等于第m-1行上面第n个元素与第m-1行上面第n-1个元素的值的和
用排列组合公式表示为：C(m, n) = C(m-1, n) + C(m -1, n -1)
 */

function combine (m, n) {
  if (n == 0) {        // 每行第0个元素为1
    return 1;
  } else if (m == n) {    // 每行最后一个元素为1
    return 1;
  } else {          // 其他情况用公式实现
    return combine(m - 1, n) + combine(m - 1, n - 1);
  }
}

function put (len) {
  for (let i = 0; i < len; i++) {      // 遍历每一行
    for (let j = 0; j <= i; j++) {     // 遍历每行上面每个元素
      document.write(combine(i, j) + ' ');
    }
    document.write('<br/>');
  }
}

// 更多资料
// https://blog.csdn.net/qq_28534081/article/details/80952856
// https://www.cnblogs.com/zhangzhiyong/archive/2018/09/15/9651965.html
// https://segmentfault.com/a/1190000017758987