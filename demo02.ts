// 二, 接口

// 普通写法
function printLabel_base(labelledObj: {label: string}) {
  console.log(labelledObj.label)
}

let myObj_base = {size: 10, label: 'size 10 object'}

printLabel_base(myObj_base)


// 接口写法
interface LabellledValue {
  label: string;
  color?: string;  // 可选属性
}

function printLabel(labelledObj: LabellledValue) {
  console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'size 10 object', color: 'white'}
let myObj2 = {size: 10, label: 'size 10 object'}
printLabel(myObj)
printLabel(myObj2)

// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = {x: 10, y: 20} 
// p1.x = 5  // error 只读属性

let a: number[] = [1,2,3,4]
let ro: ReadonlyArray<number> = a  // 只读数组
// let abs: number[] = ro   // 不能赋值
let ab: number[] = ro as number[]  // 使用类型断言可以重写
console.log(ab)

// (接口)函数类型
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function(src, sub) {   // 参数可以指定类型 （src: string, sub: string）
  let result = src.search(sub)
  return result > 1
}

// (接口)可索引类型
interface StringArray {
  readonly [index: number]: string   // 只读索引，防止了给索引赋值
}

let myArray: StringArray
myArray = ['Bob', 'Fred']

let myStr: string = myArray[0]
console.log(myStr)
// myArray[1] = 'jeke'  // error
 
// (接口)类类型
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
} 

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {

  }
}
