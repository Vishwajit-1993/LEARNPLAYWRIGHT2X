# LearnPlaywright2X

A structured learning repository for mastering **JavaScript fundamentals** and **Playwright** end-to-end test automation. This repo follows a chapter-based approach with practical, well-commented examples for hands-on learning.

---

## Table of Contents

- [About](#about)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Chapters Overview](#chapters-overview)
- [Practice Tasks (All_Task)](#practice-tasks-all_task)
- [How to Run the Examples](#how-to-run-the-examples)
- [Git Workflow](#git-workflow)
- [Useful Shortcuts](#useful-shortcuts)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## About

This repository is a personal learning journey to become proficient in:

- Core JavaScript concepts (variables, identifiers, literals, operators, control flow, loops, arrays)
- Modern ES6+ features (`map`, `filter`, `reduce`, template literals, arrow functions)
- Playwright automation framework for end-to-end testing of web applications

Each chapter is organized into its own folder with progressively numbered files for easy navigation.

---

## Repository Structure

```
LearnPlaywright2X/
│
├── chapter_01_Basics/
│   ├── 01_Basics.js
│   ├── 02_js.js
│   └── 03_js_commands.js
│
├── chapter_02_Javascript_Concepts/
│   └── 05_JS_Basics.js
│
├── chapter_03_Identifier_Literals/
│   ├── 06_Identifier_Rules.js
│   ├── 07_Identifier_Rules_2.js
│   └── 08_comments.js
│
├── chapter_04_javascript_concepts/
│   ├── 09_javascript_variables.js … 21_jr_QA.js
│
├── chapter_05_Literal/
│   ├── 22_Literal.js … 29_backtick_single_double_quote.js
│
├── chapter_06_Operator/
│   ├── 30_Operator.js … 46_advinc.js
│
├── chapter_07_Statement/
│   ├── 48_If_Else.js … 58_LeapYear.js
│
├── chapter_08_SwitchStatement/
│   ├── 59_switch.js … 66_IQ4.js
│
├── chapter_09_UserInput/
│   ├── 68_UserInput.js
│   ├── 69_Node_UserNnput.js
│   └── 70_PromptSync.js
│
├── chapter_10_Loops/
│   ├── 71_Loop.js
│   ├── 72_ForLoop1.js
│   ├── 73_IQ.js
│   ├── 74_For_Of_IN_Each.js
│   ├── 76_whileloop.js
│   ├── 77_dowhileloop.js
│   ├── 78_dowhile1.js
│   ├── 79_IQ.js
│   ├── 80_IQ1.js
│   ├── 81_IQ.js
│   └── 82_IQ.js
│
├── chapter_11_Arrays/
│   ├── 83_Arrays.js
│   ├── 84_Array.js
│   ├── 85_Access_Array.js
│   ├── 86_Add_Remove.js
│   ├── 87_Add_Remove_2.js
│   ├── 88_realex1.js
│   ├── 89_searchInArray.js
│   ├── 90_IterateArray.js
│   └── 91_IQ.js
│
├── All_Task/
│   ├── BugSeverityClassifier.js
│   ├── BuildHealthReporter.js
│   ├── FizzBuzz Test.js
│   ├── HTTP Status Code Categorizer.js
│   ├── Login Lockout.js
│   ├── Test Case Pass/Fail Verdict.js
│   └── Triangle _Classifier.js
│
├── git.md
└── README.md
```

---

## Prerequisites

| Tool             | Version       | Download Link |
|------------------|---------------|---------------|
| Node.js          | v18 or higher | [nodejs.org](https://nodejs.org/) |
| npm              | v9 or higher  | Comes bundled with Node.js |
| Git              | Latest        | [git-scm.com](https://git-scm.com/) |
| VS Code / Cursor | Latest        | [cursor.com](https://www.cursor.com/) |

Verify installation:

```bash
node --version
npm --version
git --version
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Vishwajit-1993/LEARNPLAYWRIGHT2X.git
cd LEARNPLAYWRIGHT2X
```

### 2. (Optional) Install dependencies for user input chapter

```bash
npm init -y
npm install prompt-sync
```

### 3. (Optional) Install Playwright (for upcoming chapters)

```bash
npm install -D @playwright/test
npx playwright install
```

---

## Chapters Overview

### Chapter 01 — JavaScript Basics

- **`01_Basics.js`** — Hello World, `console.log`, `let`
- **`02_js.js`** — Template literals
- **`03_js_commands.js`** — Node.js `process` (`platform`, `arch`, `version`, `cwd`, `env`)

### Chapter 02 — JavaScript Concepts

- **`05_JS_Basics.js`** — Keywords, identifiers, literals, operators, variables

### Chapter 03 — Identifier Rules & Comments

- **`06_Identifier_Rules.js`** — Naming rules for identifiers
- **`07_Identifier_Rules_2.js`** — `camelCase`, `PascalCase`, `snake_case`, etc.
- **`08_comments.js`** — Single-line, multi-line, JSDoc comments + IDE shortcuts

### Chapter 04 — Variables, Functions, Scope & Hoisting

- **`09_javascript_variables.js`** — `var`, `let`, `const`; redeclaration vs reassignment
- **`10_function.js`** — Function definition, calling, and benefits
- **`11_var.js`** — `var` global and function scope
- **`12_let.js`** — `let` reassignment and block scope
- **`13_const.js`** — `const` immutability
- **`14_var_functionscope.js`** — `var` is function-scoped
- **`15_let_blockscope.js`** — `let` is block-scoped
- **`16_hoisting.js`** — `var` hoisting
- **`17_hoisting_fn.js`** — Function declaration hoisting
- **`18_let_hoisting.js`** — `let` TDZ (Temporal Dead Zone)
- **`19_let_hoisting_block.js`** — Outer variable visible inside blocks
- **`20_const_hoisting.js`** — `const` hoisting behavior
- **`21_jr_QA.js`** — Practice Q&A

### Chapter 05 — Literals

- **`22_Literal.js`** — All literal types overview
- **`23_null_undefined.js`** — `null` vs `undefined`
- **`24_null.js`** — `null` in real examples
- **`25_Literal_All.js`** — Literal summary
- **`26_All_Numbers.js`** — Decimal, binary, octal, hex, float, BigInt, `NaN`, `Infinity`
- **`27_string.js`** — Single and double quotes
- **`28_Template_Literal.js`** — Backticks and `${}` interpolation
- **`29_backtick_single_double_quote.js`** — `'`, `"`, and `` ` `` compared

### Chapter 06 — Operators

- **`30_Operator.js`** — Operators introduction
- **`31_ArithmaticOperator.js`** — `+`, `-`, `*`, `/`
- **`32_ModulusOper.js`** — `%` modulus
- **`33_ExponentialOper.js`** — `**` exponentiation
- **`34_IQ.js`** — Compound assignment (`+=`, `-=`, `**=`, etc.)
- **`35_ComparisonOperator.js`** — `==`, `===`, `>`, `<`, etc.
- **`36_ComparisonOpr.js`** — More comparison examples
- **`37_loose_strict.js`** — Loose vs strict equality edge cases
- **`38_confusing_comparison.js`** — Tricky `==` vs `===` comparisons
- **`39_LogialOper.js`** — Logical operators (`&&`, `||`, `!`)
- **`40_string_concat.js`** — String concatenation
- **`41_TerneryOpr.js`** — Ternary operator (`? :`)
- **`42_TypeOf.js`** — `typeof` operator
- **`43_Inc_Dec_Op.js`** — Increment/decrement (`++`, `--`)
- **`44_Assignment_onternary.js`** — Assignment + ternary practice
- **`45_null.js`** — `null` and nullish coalescing (`??`, `??=`)
- **`46_advinc.js`** — Advanced increment expressions

### Chapter 07 — Statements (if / else)

- **`48_If_Else.js`** — Basic `if` / `else`
- **`49_If_Else_ElseIf.js`** — `else if` chains
- **`50_Real_IFElse.js`** — Real-world if/else scenarios
- **`51_API_If_Else.js`** — API status code checks
- **`52_IQ.js`** — Practice questions
- **`53_Real1_If_Else.js`** — Login validation (username, password, account lock)
- **`54_IQ.js`** — Practice questions
- **`55_IfElse.js`** — Additional if/else examples
- **`56_EvenOdd.js`** — Even or odd number check
- **`57_GradeCalculator.js`** — Grade calculator (A–D)
- **`58_LeapYear.js`** — Leap year logic (`%` operator)

### Chapter 08 — Switch Statement

- **`59_switch.js`** — Basic `switch` statement
- **`60_NoBreak.js`** — Fall-through without `break`
- **`61_real_time_example.js`** — Real-world switch example
- **`62_switch_group.js`** — Grouped `case` labels
- **`63_IQ1.js`** — Practice (IQ 1)
- **`64_IQ2.js`** — Practice (IQ 2)
- **`65_IQ3.js`** — Practice (IQ 3)
- **`66_IQ4.js`** — Practice (IQ 4)

### Chapter 09 — User Input

- **`68_UserInput.js`** — Browser `prompt()` (runs in browser only)
- **`69_Node_UserNnput.js`** — Node.js `readline` (built-in, no install)
- **`70_PromptSync.js`** — `prompt-sync` package (requires `npm install prompt-sync`)

### Chapter 10 — Loops

- **`71_Loop.js`** — Loops introduction (`for`, `while`, `do-while`)
- **`72_ForLoop1.js`** — Basic `for` loop
- **`73_IQ.js`** — Loop practice questions
- **`74_For_Of_IN_Each.js`** — `for...of` / `for...in` (with arrays & objects)
- **`76_whileloop.js`** — `while` loop
- **`77_dowhileloop.js`** — `while` vs `do-while` difference
- **`78_dowhile1.js`** — Additional do-while examples
- **`79_IQ.js`** — Loop IQ questions
- **`80_IQ1.js`** — Loop IQ practice
- **`81_IQ.js`** — `for` loop + `continue` keyword
- **`82_IQ.js`** — Infinite loop trap (missing `n++`)

### Chapter 11 — Arrays

- **`83_Arrays.js`** — Array creation, length, zero-based index
- **`84_Array.js`** — Array constructor, mixed types, nested arrays
- **`85_Access_Array.js`** — Access and update elements by index
- **`86_Add_Remove.js`** — `push`, `pop`, `shift`, `unshift`, `splice`
- **`87_Add_Remove_2.js`** — More add/remove examples
- **`88_realex1.js`** — Real-world array example
- **`89_searchInArray.js`** — `indexOf`, `includes`, search in arrays
- **`90_IterateArray.js`** — `for`, `for...of`, `forEach` iteration
- **`91_IQ.js`** — `map`, `filter`, `reduce` on arrays

---

## Practice Tasks (All_Task)

Real-world mini programs combining if/else, loops, and operators:

| File | Topic |
|------|-------|
| **`BugSeverityClassifier.js`** | Classify bug severity by impact score (1–10) |
| **`BuildHealthReporter.js`** | CI build health from test pass rate % |
| **`FizzBuzz Test.js`** | Classic FizzBuzz (multiples of 3, 5, both) |
| **`HTTP Status Code Categorizer.js`** | Categorize HTTP status codes (2xx, 3xx, 4xx, 5xx) |
| **`Login Lockout.js`** | Login attempt / account lock logic |
| **`Test Case Pass/Fail Verdict.js`** | Pass/fail verdict from expected vs actual |
| **`Triangle _Classifier.js`** | Classify triangle type by sides |

---

## How to Run the Examples

Most files run with Node.js:

```bash
node chapter_06_Operator/38_confusing_comparison.js
node chapter_07_Statement/58_LeapYear.js
node chapter_08_SwitchStatement/59_switch.js
node chapter_10_Loops/77_dowhileloop.js
node chapter_11_Arrays/91_IQ.js
```

**User input with prompt-sync:**

```bash
npm install prompt-sync
node chapter_09_UserInput/70_PromptSync.js
```

**Practice tasks:**

```bash
node "All_Task/FizzBuzz Test.js"
node "All_Task/BuildHealthReporter.js"
node "All_Task/HTTP Status Code Categorizer.js"
```

**Browser-only:**

- `68_UserInput.js` — open in browser or use DevTools console (`prompt()`)

---

## Git Workflow

This repo uses a **branch → commit → push → merge** workflow. See **[git.md](git.md)** for step-by-step commands.

Quick summary:

```bash
git checkout main
git pull origin main
git checkout -b feature/your-branch-name
git add .
git commit -m "Your message"
git push -u origin feature/your-branch-name
# merge via GitHub PR or locally into main
```

---

## Useful Shortcuts

| Action                     | Windows Shortcut     | Mac Shortcut           |
|----------------------------|----------------------|------------------------|
| Toggle Single Line Comment | `Ctrl + /`           | `Cmd + /`              |
| Toggle Block Comment       | `Shift + Alt + A`    | `Shift + Option + A`   |
| Format Document            | `Shift + Alt + F`    | `Shift + Option + F`   |
| Quick Open File            | `Ctrl + P`           | `Cmd + P`              |
| Open Terminal              | `` Ctrl + ` ``       | `` Cmd + ` ``          |

---

## Roadmap

- [x] Chapter 01 — JavaScript Basics
- [x] Chapter 02 — JavaScript Concepts (Keywords, Identifiers, Literals)
- [x] Chapter 03 — Identifier Rules, Cases, and Comments
- [x] Chapter 04 — Variables, Functions, Scope & Hoisting
- [x] Chapter 05 — Literals (strings, numbers, null, template literals)
- [x] Chapter 06 — Operators and Expressions
- [x] Chapter 07 — Control Flow (if/else)
- [x] Chapter 08 — Switch Statement
- [x] Chapter 09 — User Input (browser prompt, readline, prompt-sync)
- [x] Chapter 10 — Loops (for, while, do-while, continue, break)
- [x] Chapter 11 — Arrays (access, add/remove, search, map/filter/reduce)
- [x] All_Task — Practice mini programs
- [ ] Chapter 12 — Objects and ES6+ Features
- [ ] Chapter 13 — Async JavaScript (Promises, async/await)
- [ ] Chapter 14 — Playwright Setup and First Test
- [ ] Chapter 15 — Locators and Actions
- [ ] Chapter 16 — Assertions and Test Hooks
- [ ] Chapter 17 — Page Object Model (POM)
- [ ] Chapter 18 — CI/CD Integration

---

## Contributing

This is a personal learning repository. Suggestions, corrections, and improvements are welcome via issues or pull requests.

---

## License

This project is licensed for educational purposes. Feel free to fork and learn.

---

## Author

**Vishwajit Patil**  
[GitHub Profile](https://github.com/Vishwajit-1993)

Happy Learning!
