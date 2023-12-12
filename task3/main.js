let a = +prompt();
function v(num) {
  num + 5;
  let count = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        count += 1;
      }
    }
  }
  if (count == 2) {
    return i;
  }
}
console.log(v(a));
