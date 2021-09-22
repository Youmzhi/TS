// 三, 类

class Animal {
  public name: string;        // 共有
  // private sex: string;        // 私有（不能在声明它的类的外部访问）
  // protected  sex: string;        // 私有（可以在类中方法，不能在声明它的类的外部访问）
  readonly age: number = 8;   // 只读
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
  // move: function (distanceInMeters: number = 0): void {
  //   console.log(`${this.name} moved ${distanceInMeters}m.`)
  // }
}

class Dog extends Animal {
  constructor(name: string) { 
    super(name); 
  }
  brak () {
    console.log('Woof! Woof!')
  }
}

class Snake extends Animal {
  constructor(name: string) { 
    // super(name); 
    // super('33')
    
    // console.log('这是测试super', this.move(120))
    // this.move(110)
    // console.log('这是测试super', name) 
    console.log(super(name))
    console.log(super.move)
    console.log(this)
    console.log('这是测试super', this.name)


  //  (1)：super作为函数，只能在constructor中使用:代表父类，返回子类的this
  //  (2)：super作为对象，在普通函数中，cuper指向父类的原型对象，可以访问原型对象的属性和方法,注意，父类的实例的属性和方法是访问不了的
  //  (3)：super作为对象，在静态方法中，cuper指向的是父类，不是父类的原型对象

  }
  move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor (name: string) {
    super(name)
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

const dog = new Dog('波妞')
dog.brak()
dog.move(10)
dog.brak()


let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

