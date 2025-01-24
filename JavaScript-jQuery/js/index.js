// console.log( 'Hello, world!' );
// console.log( null > 0 );  // (1) false
// console.log( null == 0 ); // (2) false
// console.log( null >= 0 ); // (3) true
// ---------------------- loop----------------------
// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//   console.log( i );
//   i++;
// }
// let sum = 0;
// while (true) {
//   let value = +prompt("Enter a number", '');
//   if (!value) break; // (*)
//   sum += value;
// }
// alert( 'Sum: ' + sum );
// let i = 0
// label: for (;i<10;i++)
//     {
//         if(i>3)
//             break label; // jump to the label below (doesn't work)
//         console.log(i);
// }
//switch-case
// let a = Number(prompt('number between 1-5'));
// switch (a) {
//     case 3:
//         alert('Too small');
//         break;
//     case 4:
//         alert('Exactly!');
//         break;
//     case 5:
//         alert('Too big');
//         break;
//     default:
//         alert("I don't know such values");
//         break;
// }
// ------------------------functions ----------------
// default parameter
// function showMessage(from, text = "no text given") {
//     alert( from + ": " + text );
//   }
//   showMessage("Ann"); // Ann: no text given
// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('Do you have permission from your parents?');
//     }
// }
// let age = prompt('How old are you?', 18);
// if (checkAge(age)) {
//     alert('Access granted');
// } else {
//     alert('Access denied');
// }
// function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;
  
//       console.log(i);  // a prime
//     }
//   }
  
//   function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if ( n % i == 0) return false;
//     }
//     return true;
// }
// let n = Number( prompt('number'));
// showPrimes(n);