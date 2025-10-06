# Space Complexity

## What is Space Complexity?

Space Complexity measures the **amount of memory** an algorithm uses as the size of the input increases.  
It includes both the **input space** (memory taken by inputs) and the **auxiliary space** (extra memory used for computation).

**Formula:**

```
Space Complexity = Auxiliary Space + Input Space
```

- **Auxiliary Space:** Extra or temporary space used by the algorithm (e.g., for variables, recursion, data structures).
- **Input Space:** Space required to store the input data itself.

---

## Why is Space Complexity Important?

Just like time complexity helps us measure efficiency in terms of speed,  
**space complexity** measures how much memory our algorithm consumes.  
This is critical for large data processing or memory-limited systems (like embedded systems or mobile devices).

Efficient algorithms balance both **time** and **space** — sometimes, faster algorithms need more memory.

---

## Example 1: Constant Space — O(1)

```js
function printFirstElement(arr) {
  console.log(arr[0]);
}
```

- Here, no extra space is used apart from one variable reference.
- The memory does **not** depend on input size → **O(1)**.

---

## Example 2: Linear Space — O(n)

```js
function copyArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }
  return newArr;
}
```

- Here, a **new array** of size `n` is created.
- As input grows, memory usage increases linearly → **O(n)**.

---

## Example 3: Recursive Function — O(n)

```js
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
```

- Each recursive call adds a new function frame to the call stack.
- Total recursive depth = `n` → **O(n)** space complexity.

---

## Example 4: Quadratic Space — O(n²)

```js
function createMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n).fill(0);
  }
  return matrix;
}
```

- Creates a 2D array → n × n elements.
- Space grows quadratically with input size → **O(n²)**.

---

## Common Space Complexities

| Space Complexity | Meaning            | Example                                 |
| ---------------- | ------------------ | --------------------------------------- |
| O(1)             | Constant space     | Simple variables                        |
| O(log n)         | Logarithmic space  | Recursive binary search                 |
| O(n)             | Linear space       | Copying an array                        |
| O(n log n)       | Linearithmic space | Merge sort (due to recursion + merging) |
| O(n²)            | Quadratic space    | 2D arrays or matrices                   |

---

## Tips to Reduce Space Complexity

1. **Reuse variables** instead of creating new ones.
2. **Use in-place algorithms** (modify existing data instead of copying).
3. **Avoid unnecessary data structures.**
4. **Use iteration instead of recursion** when possible.
5. **Understand trade-offs:** Sometimes using more memory gives faster results (time-space tradeoff).

---

## Summary

- **Space Complexity** measures how much memory an algorithm needs as input grows.
- It’s determined by:
  - Variables
  - Data structures
  - Function calls (recursion stack)
  - Input data
- Notation is written using **Big O**, e.g., O(1), O(n), O(n²).
- Good developers aim for an optimal balance between **time** and **space**.

---

### Quick Comparison: Time vs Space

| Factor       | Time Complexity      | Space Complexity    |
| ------------ | -------------------- | ------------------- | --- |
| Measures     | Execution time       | Memory usage        |
| Unit         | Operations           | Bytes/Memory        |
| Example      | Linear search (O(n)) | Copy array (O(n))   |
| Optimization | Reduce steps         | Reduce memory usage | d   |
