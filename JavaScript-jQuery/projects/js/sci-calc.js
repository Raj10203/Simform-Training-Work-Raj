let numberFlag = true;
let second = 0;
let num = 0;
let evalString = ""
let dummy = ""
let defaultDegree = true;
let Ans;

function radianDegree(){
    defaultDegree = (defaultDegree) ? false : true;
    console.log(defaultDegree);
    document.getElementById('radianDegree').innerText = (defaultDegree) ? 'Degree' : 'Redian';
}
function displayAns(ans) {
    let ch = document.getElementById('ans');
    ch.value = ans;
   
}
function displayChanges(changes) {
    let ch = document.getElementById('changes');
    ch.value = changes;

}
function ansClick() {
    dummy = Ans;
    evalString = Ans;
   
    displayChanges(dummy);
    displayAns("");
}
function numberClickHandler(id) {
    console.log('number clicked : ' + id);
    if (numberFlag) {
        num = num * 10 + Number(id);
    }
    dummy += String(id);
    displayChanges(dummy);
    console.log('num :' + num);
    console.log('evalSring : ' + evalString);
}
function dependentOperator(id) {

    dummy += String(id);
    displayChanges(dummy);
    evalString += num;
    num = 0;
    evalString += id;
    console.log('evalSring :' + evalString);
    // displayChanges(evalString);
}
function equalClickHandler() {
    if (num) {
        evalString += num;
    }
    num = 0;
    try {
        dummy = eval(evalString);
        Ans = Number(dummy);
        evalString = eval(evalString);
        // num = Number(evalString);
        console.log('dummy :' + dummy);
        console.log('num :' + num);
        console.log('evalSring : ' + evalString);
        evalString = "";
        displayAns(dummy);
        dummy = "";

    } catch (error) {
        console.log(error)
    }
}
function clearClickHandler() {
    dummy = ""
    num = 0;
    evalString = "";
    displayChanges(0);
}

let radian = 0;
function nonDepOperator(id) {
    switch (id) {
        case 'sin':
            dummy = evalString + `sin(${num})`;
            displayChanges(dummy);
            radian = defaultDegree ? num * Math.PI / 180 : num;
            num = Math.sin(radian);
            // evalString += num;
            // num = ;
            console.log('dummy :' + dummy);
            console.log('num :' + num);
            console.log('evalSring : ' + evalString);
            // console.log(evalString);
            break;

        default:
            break;
    }
}
