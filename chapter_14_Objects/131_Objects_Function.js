//we can defin an function in object, in below example greet is a function in user object

//simple object
let user = {
  name: "John",
  age: 20,
  city: "New York",
  greet() {
    console.log("Hello, I'm " + this.name);
  },
};
console.log(user);
user.greet();
