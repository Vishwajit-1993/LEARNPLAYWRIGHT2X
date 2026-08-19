async function testapi() {
  try {
    let result = await Promise.reject("503 reject");
    console.log("Result:", result);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Clean up");
  }
}
testapi();
