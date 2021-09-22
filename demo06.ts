// 类型推论
// ?: 类型是在哪里如何被推断的

// 类型兼容性
interface Named {
  name: string;
}

class Person {
  name: string;
  constructor () {   // 解决运行编译错误（简写方法 constructor(public name:string)）
    this.name = 'test'
  }
}

// 简写方法(这种写法就相当于你定义了一个name,然后在构造函数里进行了赋值)
class Person2 {
  constructor (public name: string) {  
  }
}


let p: Named;

// OK, because of structural typing
p = new Person();


// 高级类型
// 1.交叉类型（Intersection Types） 
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  return result
}

// 2.联合类型
function padLeft(value: string, padding: string | number) {
  // ...
}

let indentedString = padLeft("Hello world", 1);

// 3.类型保护与区分类型
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function getSmallPet(): Fish | Bird {
  // ...
  return {
    fly(): void {

    },
    swim(): void {

    },
    layEggs(): void {

    }
  }
}

let pet = getSmallPet();
pet.layEggs(); // okay
// pet.swim();    // errors

let pet2 = getSmallPet();

// 每一个成员访问都会报错（为了让这段代码工作，我们要使用类型断言：）
// if (pet2.swim) {
//     pet2.swim();
// }
// else if (pet2.fly) {
//     pet2.fly();
// }


let pet3 = getSmallPet();

if ((<Fish>pet3).swim) {
    (<Fish>pet3).swim();
}
else {
    (<Bird>pet3).fly();
}


// symbols
let sym1 = Symbol()
let sym2 = Symbol("key")
let sym3 = Symbol("key")

// 赋予对象
let obj = {
  [sym1]: "value"
};

// Symbols是不可改变且唯一的。 
sym2 === sym3; // false, symbols是唯一的



// 迭代器和生成器
let someArray = [1, "string", false]
for (const entry of someArray) {
  console.log(entry)
}

// for..of vs. for..in 语句 (for..of和for..in均可迭代一个列表；但是用于迭代的值却不同，for..in迭代的是对象的 键 的列表，而for..of则迭代对象的键对应的值。)


// 一.模块

// 1.1导出声明
export interface StringValidator {
  isAcceptable(s: string): boolean;
}
export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
  }
}

// 1.2导出语句
class ZipCodeValidator2 implements StringValidator {
  isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
  }
}
export { ZipCodeValidator2 };
export { ZipCodeValidator2 as mainValidator };

// 1.3重新导出
export class ParseIntBasedZipCodeValidator {
  isAcceptable(s: string) {
      return s.length === 5 && parseInt(s).toString() === s;
  }
}

// 1.4导出原先的验证器但做了重命名
// export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";

// 1.5一个模块可以包裹多个模块，并把他们导出的内容联合在一起通过语法：export * from "module"
// export * from "./StringValidator"; // exports interface StringValidator
// export * from "./LettersOnlyValidator"; // exports class LettersOnlyValidator
// export * from "./ZipCodeValidator";  // exports class ZipCodeValidator

// 2.1导入
// import { ZipCodeValidator } from "./ZipCodeValidator";
// let myValidator = new ZipCodeValidator();

// 2.2可以对导入内容重命名
// import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
// let myValidator = new ZCV();

// 2.3将整个模块导入到一个变量，并通过它来访问模块的导出部分
// import * as validator from "./ZipCodeValidator";
// let myValidator = new validator.ZipCodeValidator();

// 2.4具有副作用的导入模块(尽管不推荐这么做，一些模块会设置一些全局状态供其它模块使用)
// import "./my-module.js";


// 命名空间
// desc: 随着更多验证器的加入，我们需要一种手段来组织代码，以便于在记录它们类型的同时还不用担心与其它对象产生命名冲突。 因此，我们把验证器包裹到一个命名空间内，而不是把它们放在全局命名空间下。

// 声明合并
interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}

let box: Box = {height: 5, width: 6, scale: 10}
