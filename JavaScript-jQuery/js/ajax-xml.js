const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.getElementById("facts");
const btn = document.getElementById("getFact");

let j = 0;
const getFact = async () => {
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

btn.addEventListener("click", getFact)