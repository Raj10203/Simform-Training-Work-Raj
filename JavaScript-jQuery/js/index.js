// console.log( 'Hello, world!' );
// console.log( null > 0 );  // (1) false
// console.log( null == 0 ); // (2) false
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
// funcrion as referance of argument
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// function showOk() {
//     alert("You agreed.");
// }
// function showCancel() {
//     alert("You canceled the execution.");
// }
// // usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);
// let sayHi = function(name) {  // (*) no magic any more
//   alert( `Hello, ${name}` );
// };
// // sayHi("John"); // error!
// let num = 10;
// function sayHi(name) {
//     name = "john";
//     num++;
//     console.log(`Hello, ${name}`, num);
// }
// sayHi("John"); // Hello, John // make break point here and check value of num :); 
// sayHi("John"); // Hello, John

//-------------Objects---------------
// function makeUser(name, age) {
//     let user = {
//         name,  // same as name:name
//         age: 30
//       };
//       return user
//   }

//   let user = makeUser("John", 30);
//   alert(user.name); // John
// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     // ..,
//     "1": "USA"
//   };

//   for (let code in codes) {
//       // console.log(codes[code]) // 1, 41, 44, 49
//       console.log(codes[code]);
//     }
//     console.log(codes);
// before the call
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// let red = {};
// // let red = menu;
// if (menu == red)
//     console.log(menu , "menu")
// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };
// let clone = user;
// alert(user.sizes === clone.sizes);
// clone.sizes.width = 60;
// alert(user.sizes.width); 
    // let x;
    // y = x??5;
// console.log(y)
// pattern 
//  let x=1;

// let n = 10;
// for (let i = 0; i < n; i++) {
//     let sum = '';
//     for (let j = 0; j <= i; j++) {
//         sum = sum + String(x) + ' ';
//         x++;
//     }
//     console.log(sum);
// }
let y =10;
let x = (y <= 10 ) ? 10 : 15;
console.log(x);