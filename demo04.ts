// 四，函数

function add(x: number, y: number): number {
  return x + y
}

function adds({x, y}: {x: number, y: number}): number {  // 参数为对象写法
  return x + y
}

let add2 = (a?: string) => {
  console.log('则是' + a +  '吗')
}
add2('xlb')

// let myAdd = function(x: number, y: number): number { return x + y; };

// 函数完整的写法
let myAdds: (x: number, y: number) => number = function (x:number, y: number): number {
  return x + y
}

// 参数类型是匹配的,那么就认为它是有效的函数类型，而不在乎参数名是否正确. 
// (x: number, y: number) => number  参数部分
// function (x:number, y: number): number ... 结果部分


let myAdd: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };



// 你会发现如果你在赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型：
let myAdd2 = function (x: number, y: number): number {
   return x + y
}