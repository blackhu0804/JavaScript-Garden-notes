//访问属性
//有两种方式来访问对象的属性，点操作符或者中括号操作符。
var foo = {
  name: 'black',
  1234: 'works'
};
foo.name;   //black
foo['name'];  //black

var get = 'name';
foo[get]; //black

//删除属性
//删除属性的唯一方法是使用 delete 操作符；设置属性为 undefined 或者 null 并不能真正的删除属性， 而仅仅是移除了属性和值的关联。
var obj = {
  bar: 1,
  foo: 2,
  baz: 3
}
for(var i in obj) {
  if(obj.hasOwnProperty(i)){
    console.log(i,': ' + obj[i])
  }
}
// bar : 1
// foo : 2
// baz : 3

obj.bar = undefined;
obj.foo = null;
delete obj.baz;

for(var i in obj) {
  if(obj.hasOwnProperty(i)){
    console.log(i,': ' + obj[i])
  }
}
// bar : undefined
// foo : null
