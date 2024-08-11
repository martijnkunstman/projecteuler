//https://projecteuler.net/problem=3

// Largest Prime Factor
// Problem 3
function solve() {
  //600851475143
  let solveThis = 600851475143;

  function isPPrime(n) {
    if (n < 2) {
      return false;
    }
    if (n === 2) {
      return true;
    }
    if (n % 2 === 0) {
      return false;
    }
    let factor = Math.round(Math.sqrt(n));
    for (let i = 3; i <= factor; i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  function findLargestPrimeFactor(n) {
    let factor = Math.round(Math.sqrt(n));
    for (let i = factor; i > 0; i--) {
      if (n % i === 0 && isPPrime(i)) {
        return i;
      }
    }
    return 1;
  } 

  showSolution("3:" + findLargestPrimeFactor(solveThis));
}

solve();
