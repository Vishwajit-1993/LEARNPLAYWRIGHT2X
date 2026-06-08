let g_x = 10;

// Why NOTHING prints — three reasons:
// 1. outer() is NEVER called → nothing runs at all
// 2. Even if outer() runs, inner() is NEVER called from outer → console.log never reached
// 3. Even if inner() runs once, inner() calls itself (line 9) with NO stop → infinite recursion / crash
function outer() {
  let x = 20;
  function inner() {
    let y = 30;
    console.log(x); // 20 (only if inner() is actually called)

    inner(); // calls itself forever — never reaches console.log(y) below
    console.log(y); // 30 (never reached due to infinite recursion)
  }
  // inner(); // uncomment + call outer() to test (will crash on infinite recursion)
}
// outer(); // must call this to start — still need inner() call inside outer
