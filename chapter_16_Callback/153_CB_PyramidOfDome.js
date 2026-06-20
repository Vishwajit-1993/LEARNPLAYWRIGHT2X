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

// The deeper the nesting, the harder it becomes to:
//   - read the order of execution
//   - handle errors for each step
//   - add or remove steps
// This is why Promises and async/await were introduced - to flatten this
// pyramid into clean, sequential code (see 150_AsyncAwait_Callback.js).
