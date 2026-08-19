/* const user = {
  name: "John",
  age: 20,
  city: "New York",
};
console.log(user);

//destructuring
const { name, age, city } = user;
console.log(name);
console.log(age);
console.log(city);

//destructuring with renaming
const { name: firstName, age: userAge, city: userCity } = user;
console.log(firstName);
console.log(userAge);
console.log(userCity);

//destructuring with default values
const { country = "USA" } = user;
console.log(country); */

const data = {
  user: {
    name: "John",
    address: {
      city: "New York",
      state: "NY",
      country: "USA",
    },
  },
};

//console.log(data.user.address.city);
const { user } = data;
console.log(user);
const { address } = user;
console.log(address);
const { city } = address;
console.log(city);
