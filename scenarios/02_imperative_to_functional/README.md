## Objectives

1. Try refactoring the code in [./index.mjs](./index.mjs) to be more in a more functional style.

### Tips for adding comments

<details>
  <summary>Tip 0</summary>

- Comment out the imperative code in the `doX` function of the functions.
- See what new code Copilot suggests after the commented out code.
</details>

<details>
  <summary>Tip 1</summary>

- If no useful suggestions are made, try giving Copilot additional context, e.g. start typing:
  - `const doubled =` and see what suggestions are made.
</details>

<details>
  <summary>Tip 2</summary>

- If you are still not getting useful suggestions, try giving Copilot even more context, e.g. start typing:
  - `const doubled = numbers.map(` and see what suggestions are made.
</details>

<details>
  <summary>Tip 3</summary>

- repeat the process in tips0-2 for the `doY` function and the `doZ` function.
- Try to identify the functional high-order function which matches the imperative code.  
</details>

<details>
  <summary>Tip 4</summary>

- Try to compute new transformations on the data (`numbers`), e.g.:
  - `const even = `
  - `const quadrupled = `
  - ...
</details>

### Best Practices learned & demonstrated in this exercise

<details>
<summary>Hidden</summary>

1. Use functional high-order functions to transform data, not imperative loops.
2. Provide Copilot better context data by using meaningful variable names e.g.: (`const even = `).
</details>
