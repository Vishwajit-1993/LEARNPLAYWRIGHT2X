let x = 10;

switch (x) {
  case 10:
    let b1 = 10;
    console.log(b1);
    break;
  case 10:
    let b2 = 20;
    console.log(b2);

    break;
  default:
    console.log("x is not 10");
    break;
}

//in this code, we are using the same case condition multiple times.
//this is not a good practice.
//we should use different case conditions for different values.
//if we use the same case condition multiple times, the code will execute the first case condition that matches the value of x.
//in this case, the code will execute the first case condition that matches the value of x, which is 10.
//so, the code will execute the first case condition that matches the value of x, which is 10.
//so, the code will execute the first case condition that matches the value of x, which is 10.
