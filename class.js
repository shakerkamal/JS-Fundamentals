//initialize the class

class Person{
    constructor(name) {
        this.name = name
        console.log(this.name + ' constructor')
    }
    //static method
    static staticMethod(){
        console.log("Static method")
    }
    greet(){
        console.log("Hello, " + this.name)
    }
}

let p = new Person("Chandler")

//static method can only be called with class not object
Person.staticMethod()

//general method can be called by object
p.greet()

console.log(typeof Person)

console.log(p.greet === Person.prototype.greet)


