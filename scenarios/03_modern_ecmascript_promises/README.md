## Objectives

1. Try refactoring the `printEight()` function to use async / await.

### Tips for adding comments

<details>
  <summary>Tip 0</summary>

- Create a **new** `async` function `printEightAsync()`.
- This descriptive name will help Copilot understand what you are trying to do.
- inspect the suggestions offered by Copilot, it should hopefully suggest an equivalent implementation using `async` / `await`.
- Note that Copilot is using the context you are providing, to provide useful suggestions.
  - The `async` keyword.
  - The function name `printEightAsync` 
  Try it out by comparing the suggestions provided for `function handleFoo(...`  

</details>

<details>
  <summary>Tip 1</summary>

- if tip 0 didn't work, try:
  1. Commenting out the implementation of `printEight()` only leaving the function declaration.
  2. Add `async` to the function declaration.
  3. begin typing `try ` and inspect Copilot's suggestions.
</details>

### Best Practices learned & demonstrated in this exercise

<details>
<summary>Hidden</summary>

1. Using descriptive names for functions to provide context to Copilot.
2. Avoid using `.then` and `.catch` instead use `async` / `await` as it is idiomatic and easier to read.

</details>
