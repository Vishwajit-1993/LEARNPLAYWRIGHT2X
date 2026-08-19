let apiCall = new Promise(function (resolve, reject) {
  reject({ 500: "Internal Server Error" });
  //resolve({ 200: "Success" });
});

apiCall
  .then(function (resolve) {
    console.log(resolve);
  })
  .catch(function (reject) {
    console.log(reject);
  });

//catch() runs only when the promise is rejected
//.then() runs only when the promise is resolved
//Here  .then() will not run because the promise is rejected
