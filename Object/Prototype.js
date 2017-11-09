//原型链的继承方式。
function Foo() {
  this.value = 42;
}
Foo.prototype = {
  method: function() {}
};

function Bar() {}

// 设置Bar的prototype属性为Foo的实例对象
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World';

// 修正Bar.prototype.constructor为Bar本身
Bar.prototype.constructor = Bar;

var test = new Bar() // 创建Bar的一个新实例,所有的 Bar 实例都会共享相同的 value 属性。

//属性查找

  // 当查找一个对象的属性时，JavaScript 会向上遍历原型链，直到找到给定名称的属性为止。
  // 到查找到达原型链的顶部 - 也就是 Object.prototype - 但是仍然没有找到指定的属性，就会返回 undefined


// 为了判断一个对象是否包含自定义属性而不是原型链上的属性， 我们需要使用继承自 Object.prototype 的 hasOwnProperty 方法。
Object.prototype.bar = 1;
var foo = {
  goo: undefined
};

foo.bar;

'bar' in foo; //true
foo.hasOwnProperty('bar'); //false
foo.hasOwnProperty('goo'); //true

//如果hasOwnProperty作为属性被非法占用，需要外部的hasOwnProperty函数来获取正确的结果
var foo = {
  hasOwnProperty: function() {
      return false;
  },
  bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // 总是返回 false

// 使用其它对象的 hasOwnProperty，并将其上下文设置为foo
({}).hasOwnProperty.call(foo, 'bar'); // true



