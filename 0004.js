//https://projecteuler.net/problem=4

// Largest Palindrome Product
// Problem 4
function solve() {
  let answer = 0;

  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
      let product = i * j;
      if (isPalindrome(product) && product > answer) {
        answer = product;
      }
    }
  }

  function isPalindrome(n) {
    let str = n.toString();
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  showSolution("4:" + answer);
}

solve();
