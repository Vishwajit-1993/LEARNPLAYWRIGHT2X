let apiCall = new Promise(function (resolve, reject) {
  resolve({
    statusCode: 200,
    body: {
      message: "Success",
    },
  });
});

apiCall.then(function (resolve) {
  console.log(resolve);
});

//.then() runs only when the promise is resolved
