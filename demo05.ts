// 五，泛型

// function identity(arg: number): number {
//   return arg;
// }

function identity(arg: any): any {   // any返回泛型
  return arg;
}

// 传递类型变量（方法使返回值的类型与传入参数的类型是相同的）
function identitys<T>(arg: T): T {
  return arg;
}

let output = identitys<string>('myString')
