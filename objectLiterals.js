let firstName = "Harry";
let lastName = "Potter";

let person = {
  firstName, //: "Mahedi",
  lastName, //: "Hasan"
};

let ln = "last Name";
let p1 = {
  "first Name": "Bob",
  [ln]: "Marley",
};

console.log(p1["first Name"]);
console.log(p1["last Name"]);

p1['age'] = 45
p1.farewell = () => {
  console.log("Adios!")
}

console.log(p1['age'])
console.log(p1.farewell())

function createPerson(firstName, lastName, age) {
  let fullName = firstName + " " + lastName;
  //object notation
  return {
    firstName,
    lastName,
    fullName,
    isSenior: function () {
      return age > 55;
    },
  };
}

console.log(person.firstName);
console.log(person.lastName);

let p = createPerson("Ross", "Galler", 30);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());
