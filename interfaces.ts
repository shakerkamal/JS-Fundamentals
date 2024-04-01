interface Person{
    fname: string;
    lname: string;
    age?: number //optional
}


let employee: Person = {
    fname: "Mehedi",
    lname: "Hasan",
    age: 34
}

//it will show error because age property is
//not assigned
//when the prop is optional then no need to assign that
let emp: Person ={
    fname: "Sabbir",
    lname: "Ahmed"
}