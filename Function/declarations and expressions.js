foo();
function foo(){
  console.log('hello');
} //hello
// 上面的方法会在执行前被 解析(hoisted)

foo; //undefined
var foo = function(){
  console.log('匿名函数')
}
// 赋值语句只在运行时执行，因此在相应代码执行之前， foo 的值缺省为 undefined。

var foo = function bar() {
  bar(); // 正常运行
}
bar(); // 出错：ReferenceError
// bar 函数声明外是不可见的，这是因为我们已经把函数赋值给了 foo； 然而在 bar 内部依然可见。

