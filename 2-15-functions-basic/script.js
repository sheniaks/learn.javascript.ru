// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

// function checkAge(age) {
//   return age > 18 ? true : confirm("Родители разрешили?");
// }

// function checkAge(age) {
//   return age > 18 || confirm("Родители разрешили?");
// }

// function min(a,b) {
//   return a>b ? b : a;
// }

function pow(x,n) {
    return n>=1 ? x**n : `Степень ${n} не поддерживается, используйте натуральное число`;
}
let x = prompt(`Введите число`);
let n = prompt(`Введите степень`);
alert(pow(x,n));