let retry = 0;

do {
  console.log("execute code!");
  console.log("retry: " + retry);
  retry++;
} while (retry < 3);
