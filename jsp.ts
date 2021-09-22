// 定义对象数组
const xiaojiejie: {name: string, age: number}[] = [
  {
    name: '貂蝉',
    age: 18
  },
  {
    name: '西施',
    age: 18
  }
]

// 类型别名
type lady = {name: string, age: number}
const xiaojiejie2: lady[] = [
  {
    name: '貂蝉',
    age: 18
  }
]

// 接口定义函数
interface Girl {
  name: string,
  age: number,
  bust: number,
  say(): string
}

const getRusume = (girl: Girl) => {
  console.log(girl.name)
  console.log(girl.age)
  console.log(girl.age)
}

interface Cc {
  name: string
}

let cc = <Cc>{}
console.log('cc', cc)
cc.name = 'xiaojiejie'
// cc.age = '12' // 只能赋值于约束对象
console.log('cc', cc)


getRusume({name: 'ccw', age: 15, bust: 22, say() {return '欢迎光临'}})


// 类
class yg {
  a: (a: number) => number = function(x: number) : number {
    return x
  }
  sayhellow() {
    console.log('1')
  }
}

class xiaojiejie1 extends yg {
  sayhellow() {
    console.log('2')
  }
}

let hlm = new xiaojiejie1()
hlm.sayhellow()
console.log(hlm.a(20))

// 抽象类
abstract class Department {

  constructor(public name: string) {
  }

  printName(): void {
      console.log('Department name: ' + this.name);
  }

  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

  constructor() {
      super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
      console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
      console.log('Generating accounting reports...');
  }
}


// 初始：tsconfig.json


// 联合类型和类型保护
interface Waiter {
  anjiao: boolean
  say: () => {}
}

interface Teacher {
  anjiao: boolean,
  skill: () => {}
}

function judgeWho(animal: Waiter | Teacher) {  // 联合类型
  if (animal.anjiao) {
    (animal as Teacher).skill();  // 类型保护
  }else{
    (animal as Waiter).say();
  }
}

// emum枚举
enum Status {
  MASSAGE,
  SPA,
  DABAOJIAN
}

function getServe(status: any) {
  if (status = Status.MASSAGE) {
    return "massage";
  } else if (status = Status.SPA){
    return "spa";
  } else if (status = Status.DABAOJIAN) {
    return "dabaojian";
  }
}

const result = getServe(Status.SPA)
const result2 = getServe(1)
console.log(Status.MASSAGE, Status[0])  // 我们这里能打印出枚举的值(也有叫下标的)，那如果我们知道下标后，也可以通过反差的方法，得到枚举的值


// 多泛型定义
function join<T, P>(first: T, second: P) {
  return `${first}${second}}` 
}

// 类中泛型 
class SelectGirl<T> {
  constructor (private girls: T[]) {

  }
  getGirl(index: number): T {
    return this.girls[index]
  }
}
const selectGirl = new SelectGirl(["大脚", "刘英", "晓红"]);
console.log(selectGirl.getGirl(1));

interface Girl2 {
  name: string
}

// 泛型继承
class SelectGirl2<T extends Girl2> {
  constructor (private girls: T[]) {

  }
  getGirl(index: number): string {
    return this.girls[index].name
  }
}
const selectGirl2 = new SelectGirl2([
  { name: "大脚" },
  { name: "刘英" },
  { name: "晓红" },
]);
console.log(selectGirl2.getGirl(1));

// 泛型约束

// <T extends number | string>

// ts中使用import语法
// import { Header, Content, Footer } from "./page/index.js";