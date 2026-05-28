let x = "Sham";

if (true) {
  //console.log(x); reference error: Cannot access 'x' before initialization
  //TDZ for block scoped variable starts here
  let x = "Ram";
  console.log(x);
}

console.log(x);
