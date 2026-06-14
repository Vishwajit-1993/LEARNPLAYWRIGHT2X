//How to return all the keys of an object?

const user = { name: "John", age: 20, city: "New York" };
console.log(Object.keys(user));

//How to return all the values of an object?
console.log(Object.values(user));

//How to return all the entries of an object?
console.log(Object.entries(user));

//How to check if an object has a property?
console.log(user.hasOwnProperty("name"));

//iterate over an object
for (const key in user) {
  console.log(key, user[key]);
}

//Objet.key/values/entries are used to iterate over an object
Object.keys(user).forEach((key) => {
  console.log(key, user[key]);
});
Object.values(user).forEach((value) => {
  console.log(value);
});
Object.entries(user).forEach(([key, value]) => {
  console.log(key, value);
});
