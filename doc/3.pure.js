/**
 * 纯函数有两个特点
 * 1、不能改变入参
 * 2、不能影响作用域之外的任何变量
 */


// 纯函数，并没有改变入参 a b 的数值
function sum (a, b) {
  return a + b;
}

// 不是纯函数，改变了入参 account.balance的值
function withDrawl (account, amount) {
  account.balance = account.balance - amount;
}

let account = { name: 'zhangsan', balance: 100 };
withDrawl(account, 10);

// 不是纯函数，改变了作用域之外的变量
let obj = { name: 'tjwang', age: 10 };
function ajax (params) {
  obj.age = 20;
}
ajax()