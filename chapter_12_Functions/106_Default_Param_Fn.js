//parameters with default values

function retry(testname, maxtries = 3, delay = 1000) {
  console.log(`Retrying ${testname} upto ${maxtries} times with ${delay}`);
}
retry("Login Test");
//output: Retrying Login Test upto 3times with1000

retry("Registration Test", 5, 2000);
//output: Retrying Registration Test upto 5 times with 2000
//If we don't pass the maxtries and delay, it will use the default values
//If we pass the maxtries and delay, it will use the passed values
