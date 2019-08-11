/**
 * Created by lei.sun on 2017/8/13.
 */
// 栈
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function peek() {
    return this.dataStore[this.top - 1];
}

function pop() {
    return this.dataStore[--this.top];
}

function clear() {
    this.top = 0;
}

function length() {
    return this.top;
}

// 测试
var s = new Stack();
s.push("Cynthia");
s.push("Raymond");
s.push("Barbara");
console.log("length:" + s.length());
console.log(s.peek());
var poped = s.pop();
console.log("The poped element is: " + poped);
console.log(s.peek());
s.clear();
console.log("length:" + s.length());

// 实例
// 进制间相互转换
// 回文判断
// 递归演示

// 堆和栈不一样