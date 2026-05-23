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

---

## How to Run the Examples

Each `.js` file can be run directly with Node.js:

```bash
node chapter_01_Basics/01_Basics.js
node chapter_01_Basics/03_js_commands.js
node chapter_02_Javascript_Concepts/05_JS_Basics.js
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
- [ ] Chapter 04 — Data Types and Type Conversion
- [ ] Chapter 05 — Operators and Expressions
- [ ] Chapter 06 — Control Flow (if/else, switch, loops)
- [ ] Chapter 07 — Functions and Scope
- [ ] Chapter 08 — Arrays and Objects
- [ ] Chapter 09 — ES6+ Features (arrow functions, destructuring, spread/rest)
- [ ] Chapter 10 — Async JavaScript (Promises, async/await)
- [ ] Chapter 11 — Playwright Setup and First Test
- [ ] Chapter 12 — Locators and Actions
- [ ] Chapter 13 — Assertions and Test Hooks
- [ ] Chapter 14 — Page Object Model (POM)
- [ ] Chapter 15 — CI/CD Integration

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
