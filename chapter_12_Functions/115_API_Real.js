function makeretrytracker(maxRetries) {
  let retries = 0;
  function retry(testName) {
    retries++;
    if (retries > maxRetries) {
      return `${testName} — attempt ${retries} of ${maxRetries}`;
    }
    return `Attempt ${retries}/${maxRetries} of ${testName}`;
  }
  return retry;
}

const retryTracker = makeretrytracker(2);
console.log(retryTracker("Login Test"));
console.log(retryTracker("Login Test"));
console.log(retryTracker("Login Test"));
console.log(retryTracker("Login Test"));
