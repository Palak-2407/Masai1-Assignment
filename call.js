function personInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
  
  let person = {
    name: "John",
    age: 30
  };
  
  personInfo.call(person);