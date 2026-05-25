# LearnPlaywright2X

A structured learning repository for mastering **JavaScript fundamentals** and **Playwright** end-to-end test automation. This repo follows a chapter-based approach with practical, well-commented examples for hands-on learning.

---

## Table of Contents

- [About](#about)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Chapters Overview](#chapters-overview)
- [How to Run the Examples](#how-to-run-the-examples)
- [Useful Shortcuts](#useful-shortcuts)
- [Contributing](#contributing)
- [License](#license)

---

## About

This repository is a personal learning journey to become proficient in:

- Core JavaScript concepts (variables, identifiers, literals, operators, etc.)
- Modern ES6+ features
- Playwright automation framework for end-to-end testing of web applications

Each chapter is organized into its own folder with progressively numbered files for easy navigation.

---

## Repository Structure

```
LearnPlaywright2X/
│
├── chapter_01_Basics/
│   ├── 01_Basics.js               # Hello World, basic variable declaration
│   ├── 02_js.js                   # Template literals
│   └── 03_js_commands.js          # Node.js process commands (platform, arch, env)
│
├── chapter_02_Javascript_Concepts/
│   └── 05_JS_Basics.js            # Keywords, identifiers, literals, operators, variables
│
├── chapter_03_Identifier_Literals/
│   ├── 06_Identifier_Rules.js     # Rules for naming identifiers in JavaScript
│   ├── 07_Identifier_Rules_2.js   # Valid identifier cases (camelCase, snake_case, etc.)
│   └── 08_comments.js             # Comment styles and IDE shortcuts
│
├── chapter_04_javascript_concepts/
│   ├── 09_javascript_variables.js # var, let, const — redeclaration & reassignment
│   ├── 10_function.js               # Function definition, calling, and benefits
│   ├── 11_var.js                    # var — global and function scope
│   ├── 12_let.js                    # let — reassignment and block scope
│   ├── 13_const.js                  # const — immutability (no reassignment/redeclaration)
│   ├── 14_var_functionscope.js      # var is function-scoped
│   ├── 15_let_blockscope.js         # let is block-scoped
│   ├── 16_hoisting.js               # var declaration hoisting
│   └── 17_hoisting_fn.js            # Function declaration hoisting
│
├── chapter_11_Arrays/
│   └── 83_Arrays.js                 # Array basics — creation, length, and index access
│
└── README.md
```

---

## Prerequisites

Before running the examples in this repo, ensure you have the following installed:

| Tool         | Version        | Download Link                                       |
|--------------|----------------|-----------------------------------------------------|
| Node.js      | v18 or higher  | [nodejs.org](https://nodejs.org/)                   |
| npm          | v9 or higher   | Comes bundled with Node.js                          |
| Git          | Latest         | [git-scm.com](https://git-scm.com/)                 |
| VS Code / Cursor | Latest     | [cursor.com](https://www.cursor.com/) / [code.visualstudio.com](https://code.visualstudio.com/) |

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

### 2. (Optional) Install Playwright (for upcoming chapters)

```bash
npm init -y
npm install -D @playwright/test
npx playwright install
```

---

## Chapters Overview

### Chapter 01 — JavaScript Basics

Learn the foundational building blocks of JavaScript:

- **`01_Basics.js`** — First JS program, `console.log`, variable declaration with `let`
- **`02_js.js`** — Template literals (string interpolation)
- **`03_js_commands.js`** — Node.js global `process` object (`platform`, `arch`, `version`, `cwd`, `env`)

### Chapter 02 — JavaScript Concepts

Core language terminology:

- **`05_JS_Basics.js`** — Keywords, identifiers, literals, operators, variables, line terminators

### Chapter 03 — Identifiers, Literals & Comments

Deep dive into naming and documentation:

- **`06_Identifier_Rules.js`** — Rules for naming identifiers (must start with letter / `_` / `$`, case-sensitive, no reserved keywords, etc.)
- **`07_Identifier_Rules_2.js`** — Valid case styles: `camelCase`, `PascalCase`, `snake_case`, `SCREAMING_SNAKE_CASE`, `_underscorePrefix`, `$prefix`
- **`08_comments.js`** — Single-line, multi-line, JSDoc comments + Cursor/VS Code shortcuts

### Chapter 04 — Variables, Functions, Scope & Hoisting

Deep dive into how JavaScript handles variables and functions:

- **`09_javascript_variables.js`** — `var`, `let`, and `const`; redeclaration vs reassignment; loop counter leakage
- **`10_function.js`** — Function definition and calling; why functions matter (reuse, readability, maintainability)
- **`11_var.js`** — `var` in global and function scope
- **`12_let.js`** — `let` reassignment and block scope
- **`13_const.js`** — `const` immutability (no reassignment or redeclaration)
- **`14_var_functionscope.js`** — `var` is function-scoped (accessible throughout the function)
- **`15_let_blockscope.js`** — `let` is block-scoped (not accessible outside the block)
- **`16_hoisting.js`** — `var` declarations are hoisted with `undefined` value
- **`17_hoisting_fn.js`** — Function declarations are hoisted to the top of their scope

### Chapter 11 — Arrays

Introduction to JavaScript arrays:

- **`83_Arrays.js`** — Creating arrays, array length, and zero-based index access

---

## How to Run the Examples

Each `.js` file can be run directly with Node.js:

```bash
node chapter_01_Basics/01_Basics.js
node chapter_01_Basics/03_js_commands.js
node chapter_02_Javascript_Concepts/05_JS_Basics.js
node chapter_04_javascript_concepts/09_javascript_variables.js
node chapter_04_javascript_concepts/16_hoisting.js
node chapter_11_Arrays/83_Arrays.js
```

---

## Useful Shortcuts

Cursor IDE is built on top of VS Code, so VS Code shortcuts work the same way.

| Action                          | Windows Shortcut       | Mac Shortcut           |
|---------------------------------|------------------------|------------------------|
| Toggle Single Line Comment      | `Ctrl + /`             | `Cmd + /`              |
| Toggle Block Comment            | `Shift + Alt + A`      | `Shift + Option + A`   |
| Add Line Comment                | `Ctrl + K, Ctrl + C`   | `Cmd + K, Cmd + C`     |
| Remove Line Comment             | `Ctrl + K, Ctrl + U`   | `Cmd + K, Cmd + U`     |
| Format Document                 | `Shift + Alt + F`      | `Shift + Option + F`   |
| Quick Open File                 | `Ctrl + P`             | `Cmd + P`              |
| Open Terminal                   | `` Ctrl + ` ``         | `` Cmd + ` ``          |

---

## Roadmap

- [x] Chapter 01 — JavaScript Basics
- [x] Chapter 02 — JavaScript Concepts (Keywords, Identifiers, Literals)
- [x] Chapter 03 — Identifier Rules, Cases, and Comments
- [x] Chapter 04 — Variables (var, let, const), Functions, Scope & Hoisting
- [ ] Chapter 05 — Data Types and Type Conversion
- [ ] Chapter 06 — Operators and Expressions
- [ ] Chapter 07 — Control Flow (if/else, switch, loops)
- [ ] Chapter 08 — Advanced Functions and Closures
- [x] Chapter 11 — Arrays (Basics)
- [ ] Chapter 09 — Objects and ES6+ Features (arrow functions, destructuring, spread/rest)
- [ ] Chapter 10 — Async JavaScript (Promises, async/await)
- [ ] Chapter 12 — Playwright Setup and First Test
- [ ] Chapter 13 — Locators and Actions
- [ ] Chapter 14 — Assertions and Test Hooks
- [ ] Chapter 15 — Page Object Model (POM)
- [ ] Chapter 16 — CI/CD Integration

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
