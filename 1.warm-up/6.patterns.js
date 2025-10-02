// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row += "* ";
  }
  console.log(row);
}

// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += `${j} `;
  }
  console.log(row);
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += `${i} `;
  }
  console.log(row);
}

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= 6 - i; j++) {
    row += `${j} `;
  }
  console.log(row);
}

//           *
//         * *
//       * * *
//     * * * *
//   * * * * *

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= 4 - i; j++) {
    row += "  ";
  }
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    if (j % 2 === 0) row += "1 ";
    else row += "0 ";
  }
  console.log(row);
}

// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1

let toggle = true;
for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j <= i; j++) {
    if (toggle) {
      row += "1 ";
      toggle = !toggle;
    } else {
      row += "0 ";
      toggle = !toggle;
    }
  }
  console.log(row);
}
