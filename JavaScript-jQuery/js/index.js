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
// // }
// let y =10;
// let x = (y <= 10 ) ? 10 : 15;
// console.log(x);
// function User1(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }

//   let user = new User1("Jack");

//   console.log(user.name); // Jack
//   console.log(user.isAdmin); //
// function User(name) {
//     console.log("fcoll")
//     if (!new.target) { // if you run me without new
//       return new User(name); // ...I will add new for you
//     }

//     this.name = name;
//   }

//   let john =  User("John"); 
//   console.log(john.name); // John

// function BigUser() {
//     if (new.target) {
//         // this.name = "John";
//         return { name: "with new" };  // <-- returns this object

//     }
//     return { name: "without new" };  // <-- returns this object

//   }
//   let x =  BigUser()
//   alert( x.name );  // Godzill
// let a;
// let b;
// alert( a ?? b );
// let firstName = null;
// let lastName = null;
// let nickName = 0;
// alert(firstName ?? lastName ?? nickName ?? "Anonymous"); 
// ------------------- class -------------------------
// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         if (value.length < 4) {
//             alert("Name is too short.");
//             return;
//         }
//         this._name = value;
//     }
// }
// let user = new User('john');
// user.name = "Kri"; 
// alert(user.name);
// class Button {
//   constructor(value) {
//     this.valu = value;
//   }
//   click() {
//     alert(this.valu);
//   }
// }
// let button = new Button("hello");
// setTimeout(() => button.click(), 1000)
// function Clock({ template }) {
//   let timer;
//   function render() {
//     let date = new Date();
//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;
//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;
//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;
//     let output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);
//     console.log(output);
//   }
//   this.stop = function() {
//     clearInterval(timer);
//   };
//   this.start = function() {
//     render();
//     timer = setInterval(render, 1000);
//   };
// }
// let clock = new Clock({template: 'h:m:s'});
// clock.start();
// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start(){
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);

//   }
// }


// let clock = new Clock({template: 'h:m:s'});
// clock.start();
// setTimeout(()=>clock.stop(),3000);
// setTimeout(()=>setInterval(()=>clock.start(), 8000), 0); 
// setTimeout(()=>setInterval(()=>clock.stop(), 8000), 4000); 

// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.speed = 0;
//     }
//     run(speed) {
//         this.speed = speed;
//         alert(`${this.name} runs with speed ${this.speed}.`);
//     }
//     stop(){
//         this.speed = 0;
//         alert(`${this.name} stand still.`)
//     }
// }

// class Rabbit extends Animal{
//     constructor(name,earlength)
//     {
//         super(name);
//         this.earlength = earlength;
//     }
//     hide()
//     {
//         alert(`${this.name} hides!`);
//     }
//     stop(){
//         super.stop();
//         this.hide();
//     }
// }

// let rabbit = new Rabbit ("wr",10);
// rabbit.run(5);
// rabbit.stop();
// class Left {
//     foo() {
//       console.log('Left foo');
//     }
//   }

//   class Right {
//     foo() {
//       console.log('Right foo');
//     }
//   }

//   class Bottom {
//     constructor() {
//       // Composition: mix in Left and Right
//       this.left = new Left();
//       this.right = new Right();
//     }

//     foo() {
//       // Explicitly call the foo methods from both Left and Right
//       this.left.foo(); // calls Left's foo
//       this.right.foo(); // calls Right's foo
//     }
//   }

//   // Usage:
//   const b = new Bottom();
//   b.foo();  // Calls Left foo and Right foo

//   // You can also directly call methods from Left and Right on an instance of Bottom
//   b.left.foo();  // Calls Left's foo
//   b.right.foo(); 
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Rabbit extends Animal {
//     constructor(name, speed) {
//         super(name);
//         this.speed = speed;
//         this.showName(); // instead of alert(this.name);
//     }
//     showName() {
//         alert(this.name + this.speed);
//     }
// }

// let animal = new Animal("Elephent"); // animal
// alert(animal.name)
// new Rabbit("wr", 100); // ra
// class Animal {
//     showName() {  // instead of this.name = 'animal'
//       alert('animal');
//     }

//     constructor() {
//       this.showName(); // instead of alert(this.name);
//     }
//   }

//   class Rabbit extends Animal {
//     constructor(){
//         super();
//     }
//     showName() {
//       alert('rabbit');
//     }
//   }

//   new Animal(); 
// //   new Rabbit(); 
// class Article {
//     constructor(title, date) {
//       this.title = title;
//       this.date = date;
//     }

//     static compare(articleA, articleB) {
//       return articleA.date - articleB.date;
//     }
//   }

//   // usage
//   let articles = [
//     new Article("HTML", new Date(2019, 1, 1)),
//     new Article("CSS", new Date(2019, 0, 1)),
//     new Article("JavaScript", new Date(2019, 11, 1))
//   ];

//   articles.sort(Article.compare);

// //   alert( articles[0].title ); // CSS
// class Animal {
//     static planet = "Earth";
//     constructor(name, speed) {
//         this.speed = speed;
//         this.name = name;
//     }
//     run(speed = 0) {
//         this.speed += speed;
//         alert(`${this.name} runs with speed ${this.speed}.`);
//     }
//     static compare(animalA, animalB) {

//         return animalA.speed - animalB.speed;

//     }
// }
// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} hides!`);
//     }
// }
// let rabbits = [
//     new Rabbit("Blue Rabbit", 13),
//     new Rabbit("Black Rabbit", 10),
//     new Rabbit("grey Rabbit", 11),
//     new Rabbit("White Rabbit", 15)
// ];
// alert(Rabbit.planet); 
// rabbits.sort(Rabbit.compare);
// console.log(rabbits[0].name,rabbits[1].name,rabbits[2].name,rabbits[3].name);
// class CoffeeMachine {

//     #waterAmount = 0;

//     get waterAmount() {
//         return this.#waterAmount;
//     }

//     set waterAmount(value) {
//         if (value < 0) value = 0;
//         this.#waterAmount = value;
//     }
// }
// class MegaCoffeeMachine extends CoffeeMachine {
//     method() {
//       alert( this.#waterAmount ); // Error: can only access from CoffeeMachine
//     }
//   }

// let machine = new CoffeeMachine();

// machine.waterAmount = 100;
// alert(machine.waterAmount); // Error
// class PowerArray extends Array {
//     isEmpty() {
//         return this.length === 0;
//     }

//     // built-in methods will use this as the constructor
//     static get [Symbol.species]() {
//         return Array;
//     }
// }

// let arr = new PowerArray(1, 2, 5, 10, 50);
// alert(arr.isEmpty()); // false

// // filter creates new array using arr.constructor[Symbol.species] as constructor
// let filteredArr = arr.filter(item => item >= 10);

// // filteredArr is not PowerArray, but Array
// alert(filteredArr.isEmpty());
// add one more method to it (can do more)
// class PowerArray extends Array {
//     isEmpty() {
//         return this.length === 0;
//     }
//     static get [Symbol.species]() {
//         return Array;
//     }
// }

// let arr = new PowerArray(1, 2, 5, 10, 50);
// alert(arr.isEmpty()); // false

// let filteredArr = arr.filter(item => item >= 10);
// alert(filteredArr); // 10, 50
// alert(filteredArr.isEmpty()); // false
// class Animal {
//     static [Symbol.hasInstance](obj) {
//       if (obj.canEat) {return true;}
//       else{
//         return 0;
//       }
//     }
//   }
//   let obj = { canEat: false };
//   alert(obj instanceof Animal);
// for (let prop2 of document.body.childNodes) console.log(prop2);
//   alert( Array.from(document.body.childNodes).filter );
// get td with "two" (first row, second column)
// let flag1 = true;
// function btnClickHandler()
// {
//     let td = table.rows[0].cells[1];
//     if(flag1)
//     {
//         td.style.backgroundColor = "red"; 
//         flag1 = false;
//     }
//     else{
//         td.style.backgroundColor = "orange"; 
//         flag1 = true;

//     }

// }
// let div = document.getElementsByTagName('div');
// // let field = div[0].getAttribute('order-state');
// // div[0].setAttribute('order-state', 'pending')
// order.dataset.orderState = "new"; // (*)
// // alert(order.dataset.orderState); // new
// setTimeout(()=>{
//     order.dataset.orderState = "canceled"; // (*)

// },2000);

function btnClick(){
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
    
    document.body.prepend(div);
}

