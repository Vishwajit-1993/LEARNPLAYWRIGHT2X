// Pyramid of Doom (a.k.a. Callback Hell)
// When async tasks depend on each other and each one is handled with a nested
// callback, the code drifts further and further to the right - forming a
// triangle/pyramid shape that is hard to read, debug, and maintain.

// Example: making a cup of tea step-by-step, where every step is async and
// must finish before the next one starts.

function boilWater(callback) {
  setTimeout(function () {
    console.log("Step 1: Water is boiled");
    callback();
  }, 1000);
}

function addTeaLeaves(callback) {
  setTimeout(function () {
    console.log("Step 2: Tea leaves added");
    callback();
  }, 1000);
}

function addMilk(callback) {
  setTimeout(function () {
    console.log("Step 3: Milk added");
    callback();
  }, 1000);
}

function addSugar(callback) {
  setTimeout(function () {
    console.log("Step 4: Sugar added");
    callback();
  }, 1000);
}

function serveTea(callback) {
  setTimeout(function () {
    console.log("Step 5: Tea is served");
    callback();
  }, 1000);
}

// Notice how each callback is nested inside the previous one. This rightward
// "staircase" is the Pyramid of Doom.
boilWater(function () {
  addTeaLeaves(function () {
    addMilk(function () {
      addSugar(function () {
        serveTea(function () {
          console.log("Done: Enjoy your tea!");
        });
      });
    });
  });
});

// How this works (step-by-step):
// 1. boilWater() is called first. It starts a 1s timer and does NOT run the
//    next step immediately - it waits.
// 2. After 1s, boilWater prints "Step 1" and calls its callback. That callback
//    is the function that calls addTeaLeaves().
// 3. addTeaLeaves() starts its own 1s timer; after it finishes it prints
//    "Step 2" and calls ITS callback, which triggers addMilk().
// 4. The same chain continues: addMilk -> addSugar -> serveTea, each waiting
//    for the previous one to finish before starting (sequential, not parallel).
// 5. Finally, serveTea's callback prints "Done: Enjoy your tea!".
//
// Each function only knows "run my work, then call whatever callback I was
// given." We control the ORDER by nesting: the callback of one step is the
// call to the next step. Because every step is async (setTimeout), we MUST
// nest them to guarantee order - and that nesting is exactly what creates the
// rightward Pyramid of Doom.

// The deeper the nesting, the harder it becomes to:
//   - read the order of execution
//   - handle errors for each step
//   - add or remove steps
// This is why Promises and async/await were introduced - to flatten this
// pyramid into clean, sequential code (see 150_AsyncAwait_Callback.js).
