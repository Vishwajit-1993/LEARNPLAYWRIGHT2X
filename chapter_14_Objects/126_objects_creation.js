let c = { status: "pass" };
let d = { status: "pass" };

/* let e = c;
console.log(c.status);

e.status = "fail";
console.log(e.status);
console.log(c.status);
console.log(d.status); */

if (c === d) {
  console.log("c and d are the same object");
} else {
  console.log("c and d are not the same object");
}
//here values are not ompared references are compared
