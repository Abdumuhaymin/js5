console.log("Hello Jamshidbek bro");
let a = +prompt();
function v(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count = count + 1;
    }
  }
  if (count == 2) {
    return "tub";
  }
  return "tub emas";
}
console.log(v(a));
