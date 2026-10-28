# Repository Guidelines

## Commands
- **Run script:** `node <filename>.js` (e.g., `node bank.js`, `node conta-poupanca.js`, `node script.js`)
- **Tests / Linter:** None configured. Verification is done by executing scripts directly with Node.js.

## Architecture & Codebase Overview
- Personal experimentation and study repo (`Labs`) for modern JavaScript (ES6+).
- **Core files:**
  - `bank.js`: Factory functions, private state, and method chaining.
  - `conta-poupanca.js`: ES6 Classes, private fields (`#`), inheritance (`extends`/`super`).
  - `script.js`: Sandbox for closures, Temporal Dead Zone (TDZ), hoisting, and `this` behavior.
  - `aula-classes-javascript.md`: Theoretical notes on factory functions vs. classes and prototypes.

## Conventions
- Pure Node.js scripts with zero external dependencies (`package.json` is absent).
- No build steps or transpilation required.
