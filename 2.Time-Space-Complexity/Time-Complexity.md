### Time Complexity

- It is used to measure efficieny of algorithm in terms of **speed as the input size grows**

Time Complexity !== Time Taken

To understand the Time Complexity lets take the example of linear search and binary search

```js
let arr = [2, 5, 7, 10, 9, 4, 6];
```

suppose we have to search the number 9 in the array

In the Linear Search, what we will do in the sense
we will iterate through the array and check whether each element is equal to 9 and if it founds the search is stopped

In Binary search the array must be sorted, so

```js
let arr = [2, 4, 6, 5, 7, 9, 10];
```

In Binary Search the algorithm is first it will find the middle element. then it will check whether the middle element is equal to search element. If not then it divides the array in to two parts. Then it will check whether the search element is greater than or less than the middle element. If its greater then it finds the middle element of 2nd part of array and repeats the procedure. If its lesser then checks in first part of array

lets see in this case how search works

here first it finds the middle element ie, 5.
5 is not equal to 9 and 9 is greater than 5 so it then checks 9 from 2nd part of array ie, [7, 9, 10]
then find the middle element ie, 9. and we found 9.

comparing Linear Search and Binary Search in terms of time complexity.

Linear Search

- n the worst case, we may have to check every element in the array.
- If the array has n elements, we may perform up to n comparisons.
- Therefore, time complexity = O(n).

Binary Search

- Binary Search works only on a sorted array.
- At each step, it:
  1.  Finds the middle element.
  2.  Compares it with the target.
  3.  Decides whether to search the left half or right half.

Each step cuts the array size in half.

Let’s assume the array size is n.

- After 1st step → array size becomes n/2.
- After 2nd step → array size becomes n/4.
- 3rd step → array size becomes n/8.
- … and so on.

After x steps, the size of the remaining search space =
$\frac{n}{2^x}$

We stop when only 1 element is left:
$\frac{n}{2^x} = 1$

Multiply both sides by $2^x$:
$n = 2^x$

Take log (base 2):
$x = \log_2(n)$

So, Binary Search takes at most $log_2(n) $steps.
That’s why time complexity = O(log n).

Suppose we have 100 elements:

- In Linear Search, we may need to check all 100 elements in the worst case.
- In Binary Search, the array size keeps getting divided by 2 at each step:

100 → 50 → 25 → 12 → 6 → 3 → 1

This means it only takes around 7 steps.
$log_2(100)$ = 6.6 ~ 7

so using Binary search algoritm we reduced 100 to 7
So we can clearly say that binary alogorithm is very efficient as input grows

suppose we have 1000 elements then in Linear it requires 1000 times but in Binary its $log_2(1000)$ = 9.9 ~ 10

### Big O notation

So to represent the time complexity we will use the **Big O notation**
Big O notation describes an algorithm's efficiency and performance as the input size grows by providing an upper bound on its worst-case time or space complexity.

so lets see what is the best case and the worst case

The best case for linear search will be the first element and the complexity will be O(1)
The best case for Binary search will be the middle element and the complexity will be O(1)

The worst case will be a number that does not exist in that array
so in that case the complexities are
Linear: x = n => O(n)
Binary: $\frac{n}{2^x} = 1 \implies x = \log_2 n$ => O(log n)

<table>
  <thead>
    <tr>
      <th>n</th>
      <th>10</th>
      <th>100</th>
      <th>1000</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Linear x =  O(n)</td>
      <td>10</td>
      <td>100</td>
      <td>1000</td>
    </tr>
    <tr>
      <td>Binary x =  O(log n)</td>
      <td>4</td>
      <td>7</td>
      <td>10</td>
    </tr>
  </tbody>
</table>

now if we plot a graph for linear and binary

![Binary Search Time Complexity](https://www.w3schools.com/dsa/img_binarysearch_timecomplexity.png)

in efficieny
Binary search >>> Linear Search

### Common Time Complexities Explained

**1. O(1) — Constant Time Complexity**

- Execution time does **not depend** on input size.
- Example:
  ```js
  console.log(arr[5]); // Accessing the 5th index
  ```
- Whether the array has 3 or 3000 elements, the time remains the same.

**2. O(log n) — Logarithmic Time Complexity**

- Grows very slowly even for large inputs.
- Seen in algorithms that divide input into halves (like Binary Search).
- Example:
  ```js
  // Binary search halves the array each step
  ```
- If n = 1000, only about 10 steps are needed.

**3. O(n) — Linear Time Complexity**

- Time increases proportionally with the size of input.
- Example:
  ```js
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  ```
- If n = 10 → 10 operations; n = 100 → 100 operations.

**4. O(n log n) — Linearithmic Time Complexity**

- Occurs in divide and conquer algorithms like Merge Sort or Quick Sort.
- A loop runs n times, and each iteration performs a log n operation.
- Example: Merge Sort
- Very efficient for large datasets compared to O(n²).

**5. O(n²) — Quadratic Time Complexity**

- Has nested loops, performance drops rapidly as n increases.
- Example:
  ```js
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  ```
- If n = 10 → 100 ops; n = 100 → 10,000 ops.

**6. O(n³) — Cubic Time Complexity**

- Triple nested loops, even slower than quadratic.
- Example:
  ```js
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }
  ```

**7. O(2ⁿ) — Exponential Time Complexity**

- Runtime doubles with each additional input.
- Example:
  ```js
  function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  }
  ```
- Becomes extremely slow for large n.

**8. O(n!) — Factorial Time Complexity**

- The worst possible — grows faster than exponential.
- Example: Generating all permutations (e.g., Traveling Salesman Problem brute force).
- For n = 10 → 3,628,800 possibilities!

---

**Efficiency Ranking (Best → Worst):**

O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)

![complexity graph](https://miro.medium.com/0*6GoWc_9OSKIkxNLC.jpg)

### Multiple independent loops

When we write O(2n), it means two separate loops running one after another, each of size n.  
The total number of operations = n + n = 2n.

However, **Big O ignores constant coefficients** because they do not change the rate of growth.  
So, O(2n) simplifies to **O(n)** — both grow linearly as n increases.

#### Example:

```js
for (let i = 0; i < n; i++) {
  console.log(i);
}

for (let j = 0; j < n; j++) {
  console.log(j);
}
```

→ Total = n + n = 2n operations → O(2n) → **O(n)**

#### General Rule:

- When multiple terms exist, keep the one that grows the fastest as n increases.
- O(n² + n) → O(n²)
- O(n³ + n + n²) → O(n³)
- O(n² + n log n + 2n) → O(n²)

The **dominant term** always decides the final time complexity.
