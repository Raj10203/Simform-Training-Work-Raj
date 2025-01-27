





// function asyncfun1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("some data 1");
//             resolve("success")
//         }, 4000)
//     });
// }

// function asyncfun2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("some data 2");
//             resolve("success")
//         }, 4000)
//     });
// }

// console.log("geting data1");

// asyncfun1().then((result)=>{
//     console.log(result);
    
//     console.log("geting data2");
//     let p2 = asyncfun2().then((result)=>{
//         console.log(result);
        
//     })
// })
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am Promis");
//         // resolve();
//         reject("some err")
//     });
// }
// let promise = getPromise();
// promise.then(() => {
//     console.log("Promise fulfilled");
    
// })
// promise.catch(()=>{
//     console.log("Error occured");
    
// })
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a Promise");
//     // resolve(123);
//     reject("sum error occured");

// });

// console.log(promise);

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data" + dataId);
//             if (getNextData) {
//                 getNextData();
//             }
//             resolve("Success");
//         }, 2000);
//     });
// };
// // getData();
// let result = getData(1, () => { getData(2) });
// console.log(result);






// function getData(dataId, getNextData) {
// setTimeout(() => {
//     console.log("data" + dataId);
//     if (getNextData) {
//         getNextData();
//     }
// }, 2000);

// }

// //callback hell
// getData(1, () => {
//     console.log("getting Data 2")
//     getData(2,() => {
//         console.log("getting Data 3")
//         getData(3, ()=>{
//             console.log("getting Data 4")
//             getData(4);
//         });
//     });
// });

// function sum(a, b) {
//     console.log(a+b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// }

// calculator(1, 2, sum);