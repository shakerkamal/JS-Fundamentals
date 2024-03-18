var employee = {
  id: 1,
  greet: function () {
    setTimeout(() => {
      console.log("Greetings!: ", this.id);
    }, 1000);
  },
};

employee.greet();
console.log(employee.id)