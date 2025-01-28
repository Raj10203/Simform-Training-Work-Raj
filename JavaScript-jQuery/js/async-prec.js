const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.getElementById("facts");
const btn = document.getElementById("getFact");

let j = 0;
const getFact = async () => {
    if (j>=5) {
        console.log("max data printed");
        return;
    }
    console.log("getting data ...");
    let response = await fetch(URL);
    console.log(response);
    console.log(typeof (response));
    let data = await response.json();
    console.log(data);
    factPara.innerText += `${j+1} :- `+data[j].text;
    factPara.innerHTML += "<br>";
    j++;
}
// function getFact() {
//     fetch(URL)
//     .then((response) =>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data[0].text);
//     })
// }
btn.addEventListener("click", getFact)