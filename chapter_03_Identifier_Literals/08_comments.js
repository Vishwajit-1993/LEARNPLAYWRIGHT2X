// Single line comment

// Multi line comment

/*
 *
 * Multi line comment
 *
 */

/**
 *
 * Multi line comment
 *
 **/

test = 10;
// ============================================================
// KEYBOARD SHORTCUTS TO ADD / TOGGLE COMMENTS
// ============================================================
// Cursor IDE is built on top of VS Code, so most VS Code
// keyboard shortcuts work the same way in Cursor.
// ============================================================

// ------------------------------------------------------------
// SHORTCUTS TABLE (WINDOWS / CURSOR / VS CODE)
// ------------------------------------------------------------
// | Action                          | Windows Shortcut       | Mac Shortcut           |
// |---------------------------------|------------------------|------------------------|
// | Toggle Single Line Comment      | Ctrl + /               | Cmd + /                |
// | Toggle Block Comment            | Shift + Alt + A        | Shift + Option + A     |
// | Add Line Comment                | Ctrl + K, Ctrl + C     | Cmd + K, Cmd + C       |
// | Remove Line Comment             | Ctrl + K, Ctrl + U     | Cmd + K, Cmd + U       |
// | Add JSDoc Comment (above fn)    | Type /** then Enter    | Type /** then Enter    |
// | Comment Selected Lines          | Ctrl + /               | Cmd + /                |
// | Comment Multiple Lines (block)  | Shift + Alt + A        | Shift + Option + A     |
// ------------------------------------------------------------

// ------------------------------------------------------------
// HOW TO USE
// ------------------------------------------------------------

// 1. Toggle Single Line Comment  ->  Ctrl + /
//    Place cursor on a line (or select multiple lines), then
//    press Ctrl + / to comment / uncomment them.

// 2. Toggle Block Comment  ->  Shift + Alt + A
//    Select code and press Shift + Alt + A to wrap it inside
//    /* ... */ block comment.

// 3. Add Line Comment  ->  Ctrl + K, Ctrl + C
//    Press and HOLD Ctrl, then press K, then press C.
//    This ONLY adds a comment (does not remove).

// 4. Remove Line Comment  ->  Ctrl + K, Ctrl + U
//    Press and HOLD Ctrl, then press K, then press U.
//    This ONLY removes the comment.

// 5. JSDoc Comment  ->  Type /** then press Enter
//    Above a function, type /** and press Enter to auto-generate
//    a JSDoc comment block with parameters and return type.

// ------------------------------------------------------------
// EXAMPLES
// ------------------------------------------------------------

// Example 1: Single line comment (Ctrl + /)
let userName = "John"; // Ctrl + / toggles this line

// Example 2: Block comment (Shift + Alt + A)
/* let userAge = 25;
   let userCity = "Mumbai"; */

// Example 3: JSDoc comment (type /** + Enter)
/**
 * Adds two numbers and returns the result.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function addNumbers(a, b) {
  return a + b;
}
