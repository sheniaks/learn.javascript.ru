// class User {
//     static staticMethod() {
//       console.log((this === User));
//     }
//   }
//   User.staticMethod();

class Rabbit extends Object {
  constructor(name) {
    super(name);
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log(rabbit.hasOwnProperty("name"));
