class Car {
  constructor(name, model, engine) {
    this.name = name;
    this.model = model;
    this.engine = engine;
  }
  static myVariable = 10;
}

// const firstCar=new Car("Civic",2024,"Petrol")
// console.log(firstCar)

// const secondCar=new Car("City",2024,"Gas");
// console.log(secondCar)
``
// console.log(Car.myVariable);

class Civic extends Car {
  constructor(name, model, engine, color, tyres) {
    super(name, model, engine);
    this.color = color;
    this.tyres = tyres;
  }
}

const myVariable_3 = new Civic("Honda", 2024, "Diesel", "Yellow", "BOB");
// console.log(myVariable_3);



const greetings = () => {
  console.log("Hello World");
}
// const print = setInterval(greetings, 1000)
const print_2=setTimeout(greetings,1000)

class MyClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const myObj = new MyClass("Hamza", 24)
console.log(myObj)
