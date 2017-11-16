console.log(this === window); //true
// 当在全部范围内使用 this，它将会指向全局对象。

//函数调用
function foo(){
  return this;
}
f1 === window; //true

function f2(){
  "use strict"; // 这里是严格模式
  return this;
}

// 在严格模式下，不存在全局变量，所以this 是undefined。
f2() === undefined; // true


//方法调用
test.foo(); //this指向test对象

//构造函数
new foo(); //this指向新创建的对象

// call和apply方法
function add(c, d){
  console.log (this.a + this.b + c + d);
}
var o = {a: 1, b: 3};

// 第一个参数是作为‘this’使用的对象
// 后续参数作为参数传递给函数调用
add.call(o, 5, 7);

// 第一个参数也是作为‘this’使用的对象
// 第二个参数是一个数组，数组里的元素用作函数调用中的参数
add.apply(o, [5, 7]);

// bind
function f(){
  return this.a;
}

//this被固定到了传入的对象上
var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var h = g.bind({a:'yoo'}); //bind只生效一次！
console.log(h()); // azerty