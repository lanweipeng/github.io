# es5的变量和es6变量的区别

|	|es5	|es6|
|---|---|---|
|定义	|不需要定义，如果没写，会自动定义并赋值为undefined|	需要定义后才能使用|
|作用域|	function|	块|
|重复声明|	可以|	不可以|
# 数据类型
## 基础数据类型和引用数据类型
基础数据类型：number、boolean、string、null、undefined、symble、bigInt（后两个是es6）

引用数据类型：Object、function

Object的类型：普通对象、数组、正则、日期、数学函数

基础数据类型存在栈、引用数据类型存在堆

|	|堆	|栈|
   | ----|---|---|
|有序	|无序|	有序|
|空间	|小	|大，无限|
|速度	|慢|	快|
## 判断数据类型的方式
- typeof 
- instanceof
- Object.prototype.toString.call(xx) 

### typeof
除了`null`，其他基础数据类型都能判断
```js
typeof 1 // number
typeof 'student' // string
typeof true // boolean
typeof undefined // undefined
typeof Symble() //symble
typeof 1111n //bigint
typeof null // object
```

除了`function`,其他引用类型都判断为`object`
```js
typeof [] // object
typeof console.log // function
```

把`null`判断为`object`是一个很久的bug
### 类型转换
#### 转boolean
`''`、`0`、`-0`、`undefined`、`null`、`false`、`NaN`、`''`为false，其他都为true
#### 对象转为基本类型
对象转为基本类型时，先调用`valueOf`，然后再调用`toString`。当然这两个方法是可以重写，也可以重写`Symbol.toPrimitive`，这个优先级最高
```js
var a={
    valueOf(){
        return 0;
    }
    toString(){
        return 1;
    }
    [Symbol.toPremitive](){
        return '2';
    }
}
1 + a //=>3
```
#### 四则运算
加法运算，有一个string，另一个转为string，其他运算，有一个number，另一个转为number。如果有object，会先把object转为基础类型再运算
```js
1 + '2' // 12
2 * '2' //4
[1,2] + [2,1] // 1,22,1
// [1,2] => 1,2
// 1,2 + 2,1 => 1,22,1
```
转为number
```js
+ '1' // =>1
'a' + + 'b' //aNaN
+ 'b' //NaN
```
#### `===`操作符
[ECMAScript2015规范文档](https://262.ecma-international.org/6.0/#sec-abstract-equality-comparison) 7.2.13
#### `==`操作符
[ECMAScript2015规范文档](https://262.ecma-international.org/6.0/#sec-abstract-equality-comparison) 7.2.12

解析题:`[] == ![] // => true`

步骤
```js
//1.![]为false，具体可以看上面其他类型转boolean,转为[] == false进行判断
//2.根据规范7.2.12第九条，转为[]==ToNumber(false)
//3.根据规范7.1.3ToNumber，ToNumber(false)为0，因此[]==0
//4.根据规范7.2.12
//5.根据规范第11条，ToPrimitive([])==0
//6.根据规范7.1.1 [].toString()=>'',转为''==0
//7.根据判断boolean规则返回true
```

3. Object.assign(target,...sources)的理解
把source里面的可枚举值属性添加到target，如果属性重名，会覆盖，如果值是引用类型，那么赋值的其实是地址，会出现共同引用问题。
4. map forEach reduce手写
5. 史蒂夫
6. dsf
7. sdf
8. sdf