## Objectives

1. Add Comments to [./semver-is-static.mjs](./semver-is-static.mjs)
2. Implement tests in [./semver-is-static.test.mjs](./semver-is-static.spec.mjs).

### Tips for adding comments

<details>
  <summary>Tip 0</summary>

- consult the [reference](https://github.com/npm/node-semver#ranges) to remind yourself what are static and non-static semver ranges.

</details>

<details>
  <summary>Tip 1</summary>

- Start with a **descriptive** line e.g.: `Will return true if the version is static in other words not a range, e.g.:`

</details>

<details>
  <summary>Tip 2</summary>

- Add multiple examples (one per line) of inputs for which the function returns `true`

</details>

<details>
  <summary>Tip 3</summary>

- Try to reformat the examples to fit one line instead of multiple lines
</details>

<details>
  <summary>Tip 4</summary>

- Add examples of inputs for which the function returns `false`
</details>

### Tips for implementing tests

<details>
  <summary>Tip 0</summary>

- start with a `describe` block for `isSemverStatic`

</details>

<details>
  <summary>Tip 1</summary>

- add an `it` block for a **single** static version e.g.: `1.2.3`

</details>

<details>
  <summary>Tip 2</summary>

- add two nested `describe` blocks for `static` and `non-static` cases.
</details>

<details>
  <summary>Tip 3</summary>

- copy your `it` block from Tip 1 and paste it into the `static` block
- try to use Copilot to suggest additional test cases (`it` blocks) for both the `static` and `non-static` nested `describe` blocks.
</details>

### Best Practices / Workflows learned & demonstrated in this exercise

<details>
<summary>Hidden</summary>

1. Comment your code with:
    1. links to references.
    2. examples both valid and invalid inputs.
2. Use descriptive names for your test cases (it/describe blocks).
3. Nest test cases in `describe` blocks to group them by categories.
4. "Massaging" the Copilot context incrementally to guide it to suggest the test cases you want.
</details>
