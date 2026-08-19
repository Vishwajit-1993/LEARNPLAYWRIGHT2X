// get → reads/computes a value when you access user.fullname (no parentheses needed)
// set → runs when you assign user.fullname = "..." and updates properties inside
const user = {
  firstname: "Vishwajit",
  lastname: "patil",
  get fullname() {
    return this.firstname + " " + this.lastname;
  },
  set fullname(value) {
    this.firstname = value.split(" ")[0];
    this.lastname = value.split(" ")[1];
  },
};

console.log(user.fullname); // get runs → "Vishwajit patil"
user.fullname = "John Doe sHOW"; // set runs → splits and updates firstname/lastname
console.log(user.fullname); // get runs → "John Doe" (only first 2 parts used by split)