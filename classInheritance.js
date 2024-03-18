class Person {
  constructor() {
    console.log("Person constructor");
  }
  getId(){
    return 10
  }
}

class Employee extends Person {
  constructor() {
    //to call the parent class constructor
    super();
    console.log("Employee constructor");
  }
  getId(){
    return super.getId()
    //return 20
  }
  getName(){
    console.log("Child")
  }
}

let e = new Employee();
console.log(e.getId()) ;
e.getName()
