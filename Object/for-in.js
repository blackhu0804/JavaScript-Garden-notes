//和 in 操作符一样，for in 循环同样在查找对象属性时遍历原型链上的所有属性。
Object.prototype.bar = 1;

var foo = {moo: 2};
for(var i in foo) {
    console.log(i); // 输出两个属性：bar 和 moo
}

//使用hasOwnProperty过滤

for(var i in foo) {
  if(foo.hasOwnProperty(i)){
    console.log(i);
  }
}

//在ES6中可以定义不可枚举的属性Object.defineProperty。