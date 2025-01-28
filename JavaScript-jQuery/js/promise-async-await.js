 function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("weather data",dataId);
            resolve("success");
        },2000);
    });
    
}

(async function getWeatherData() {
    console.log("getting data 1");

    await getData(1); // 1
    console.log("getting data 2");
    await getData(2); // 2
    console.log("getting data 3 async");
    getData(3); // 3
    console.log("getting data 4");
    await getData(4); // 4
    console.log("getting data 5");
    await getData(5); // 4
    
})();

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//         }, 1000)
//     });
// }
// getData(1)
// .then((result)=>
// {
//     console.log(result);
//     return getData(2)
// })
// .then((res)=>{
//     console.log(res);
//     return getData(3);
// })
// .then((resu)=>{
//     console.log(resu);

// })

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