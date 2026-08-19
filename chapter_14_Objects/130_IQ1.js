let user = {
  name: "John",
  age: 20,
  city: "New York",
};
console.log(user);
console.log(user.name);
console.log(user["age"]);

//dynamic property access
const key = "age";
console.log(user[key]); //20

//adding and modifying properties
user.email = "john@example.com";
user.age = 21;
console.log(user);

//if you want description of key
//{value: 'John', writable: true, enumerable: true, configurable: true}
console.log(Object.getOwnPropertyDescriptor(user, "name"));
