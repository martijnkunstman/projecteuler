//https://projecteuler.net/problem=2

// Even Fibonacci Numbers
// Problem 2
function solve() {
  let fn1 = 1;
  let fn2 = 1;
  let sum = 0;
  for (let i = 1; fn2 < 4000000; i++) {
    let fn = fn1 + fn2;
    if (fn % 2 === 0) {
      sum += fn;
    }
    fn1 = fn2;
    fn2 = fn;
  }
  showSolution("2:" + sum);
}

solve();
