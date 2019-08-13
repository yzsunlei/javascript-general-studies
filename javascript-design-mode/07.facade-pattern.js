/*
外观模式：
为一组复杂的子系统接口提供一个更高级的统一接口，通过这个接口使得对子系统接口的访问更容易。
*/

function addEvent(dom, type, fn) {
    // 对于支持DOM2级事件处理程序addEventListener方法的浏览器
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false);
    } else if (dom.attachEvent) {
        // 对于不支持addEventListener方法但支持attchEvent方法的浏览器
        dom.attachEvent("on" + type, fn);
    } else {
        // 对于不支持addEventListener方法，也不支持attchEvent方法，但支持“on”+事件名的浏览器
        dom["on" + type] = fn;
    }
}
