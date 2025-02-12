let factPara = document.getElementById("facts");
let btn = document.getElementById("getFact");
btn.addEventListener('click',btnClickHandler);

async function btnClickHandler(){
    console.log("btn clicked");
    const xhr = new XMLHttpRequest();
    await xhr.open('GET', '../resourses/mytxt.txt',true);
    xhr.onprogress = function (){
        console.log('on Progress');
    }
    xhr.onreadystatechange = await function(){
        console.log('ready state changed',xhr.readyState);
    }
    xhr.onload =await function(){
        if (this.status==200) {
            console.log(this.responseText);
        }
        else{
            console.error("some error occured")
        }
    }
    await xhr.send();
}
