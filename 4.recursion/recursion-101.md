### Recursion

**Function calls itself** to solve smaller version of the same problem

Two parts of the Recursion:

1. Base case - stop condition (when to stop calling itself)
2. Recursive case - part where function calls itself

```js

function fun(num) {
    console.log(num)
    num -= 1;
    fun(num)
}
fun(5)

// This is an endless recursion. We need to write a base case to stop recursion

funtion fun(num) {
    if (num === 0) return;
    console.log(num)
    num -= 1;
    fun(num)
}

// always write base case in the top.

// lets see what will happen in the call stack
// at first it calls fun(5)
fun(5)

// this function call the the function again

fun(4)
fun(5)

fun(3)
fun(4)
fun(5)

fun(2)
fun(3)
fun(4)
fun(5)

// at last

fun(1)
fun(2)
fun(3)
fun(4)
fun(5)


// In infinite recursion this would go infinitely and lead to stack overflow
```

print 1 to n using recursion

```js
function fun(n, limit) {
  if (n < 1) return;
  console.log(limit + 1 - n);
  fun(--n, limit);
}
fun(10, 10);
```

The time complexity will be O(n)
