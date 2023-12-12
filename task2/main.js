console.log("Hello Jamshidbek bro");
let a = +prompt();
function v(num) {
  for (let i = 1; i <= num; i++) {
    let count = 0;
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
