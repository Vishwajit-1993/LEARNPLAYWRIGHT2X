//ab , bc , ca    if ab===bc and bc===ca and ca===ab then it is an equilateral triangle
//ab , bc , ca    if ab===bc or bc===ca or ca===ab then it is an isosceles triangle
//ab , bc , ca    if ab!==bc and bc!==ca and ca!==ab then it is a scalene triangle

let ab = 10;
let bc = 10;
let ca = 10;

if (ab === bc && bc === ca && ca === ab) {
  console.log("It is an equilateral triangle");
} else if (ab === bc || bc === ca || ca === ab) {
  console.log("It is an isosceles triangle");
} else {
  console.log("It is a scalene triangle");
}
