/*
最大公共子串：
给定两个字符串,求出它们的最长公共字串
 */

function findSubStr(str1, str2) {
  if (str1.length > str2.length) {
    var temp = str1;
    str1 = str2;
    str2 = temp;
  }
  var len1 = str1.length,
    len2 = str2.length;
  for (var j = len1; j > 0; j--) {
    for (var i = 0; i < len1 - j; i++) {
      var current = str1.substr(i, j);
      if (str2.indexOf(current) >= 0) {
        return current;
      }
    }
  }
  return "";
}

// 更多资料
// https://segmentfault.com/a/1190000007963594
// https://www.cnblogs.com/iyangyuan/p/4470957.html
// https://blog.csdn.net/weixin_33714884/article/details/86446418