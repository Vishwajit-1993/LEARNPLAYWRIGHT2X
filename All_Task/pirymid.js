function printReversePattern(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += "*";
      console.log(`value of i is ${i} and value of j is ${j}`);
    }

    console.log(row);
  }
}

// Call function
printReversePattern(3);
