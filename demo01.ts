// 一, 基础类型

// 布尔值
let isDone: boolean = false

// 数字
let decLiteral: number = 1

// 字符串
let userName: string = 'jack'

// 数组
let list: number[] = [1,2,3]
let list2: Array<number> = [11,2,3.4]

// 元组
let x: [string, number]
// x = ['hello', 10]   ok
// x = [10, 'hello']   error

// 枚举(赋予指定类型)
enum Color {Red, Green = 4, Blue}
let c: Color = Color.Green

console.log(c)    // 4

enum Colors {Red=1, Green, Blue}
let b: string = Colors[2]

console.log(b)  // Green

enum Colorss {Red=1, Green=2, Blue=5}
let a1: string = Colorss[2]
let a2: string = Colorss[3]

console.log(a1)  // Green
console.log(a2)  // undefined

// Any(可以任何值)
let notSure: any = 4
notSure = 'myybe a string instead'
notSure = false


// Void
function warnUser(): void {
  console.log("This i my warning message")
}

let unusable: void = undefined     // 只能为它赋予undefined和null

// Null和Undefined
let u: undefined = undefined;
let n: null = null;


// Never
// never类型表示的是那些永不存在的值的类型。 
// 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 
// 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

// Object
let obc: object = {
  name: 'jaky'
}

console.log(obc)

// 类型断言
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

