let num = 0;
let evalString = ""
let dummy = ""
let defaultDegree = true;
let Ans;
let shift = false;
class Calculator {
    constructor() {
        this.num = 0;
        this.evalString = "";
        this.dummy = "";
        this.defaultDegree = true;
        this.Ans;
        this.shift = false;
    }
    sinRad(x) {
        return Math.sin(x);
    }
    sinDeg(x) {
        return Math.sin(x * Math.PI / 180);
    }
    number(result) {
        this.num = this.num * 10 + Number(result)
        this.dummy += String(result);
        displayChanges(this.dummy);
        console.log(this.num);
        console.log(this.dummy);
        
    }

}
(function () {
    let calc = new Calculator;
    document.querySelectorAll('.btnd').forEach(button => {
        button.addEventListener('click', () => {
            if (button.getAttribute('data-type')=='number') {
                calc.number(button.getAttribute('data-value'));
            }
            else{
                if(button.getAttribute('data-type')=='depOpe'){

                }
            }
        })
    })

})();

function numberClickHandler(id) {
    calc.number(id);
    console.dir('number clicked : ' + id);
    num = num * 10 + Number(id);
    dummy += String(id);
    displayChanges(dummy);
    console.log('num :' + num);
    console.log('evalSring : ' + evalString);
}

function radianDegree() {
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
    // evalString = Ans;
    num = Ans;
    displayChanges(dummy);
    displayAns("");
    console.log('dummy :' + dummy);
    console.log('num :' + num);
    console.log('evalSring : ' + evalString);
}

function dependentOperator(id) {
    console.dir(id);

    dummy += String(id);
    displayChanges(dummy);
    evalString += num;
    num = 0;
    evalString += id;
    console.log('evalSring :' + evalString);
    // displayChanges(evalString);
}
function equalClickHandler() {

    evalString += num;

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
function nonDepOperator(id, name = '0') {
    switch (id) {
        case 'sin':
            console.log('name' + name);

            if (name == '1') {
                sinInverce(num);
            }
            else {

                dummy = evalString + `sin(${num})`;
                displayChanges(dummy);
                radian = defaultDegree ? num * Math.PI / 180 : num;
                num = Math.sin(radian);
                // evalString += num;
                // num = ;
                console.log('dummy :' + dummy);
                console.log('num :' + num);
                console.log('evalSring : ' + evalString);
            }
            break;

        case 'cos':
            dummy = evalString + `cos(${num})`;
            displayChanges(dummy);
            radian = defaultDegree ? num * Math.PI / 180 : num;
            num = Math.cos(radian);
            // evalString += num;
            // num = ;
            console.log('dummy :' + dummy);
            console.log('num :' + num);
            console.log('evalSring : ' + evalString);
            // console.log(evalString);
            break;

        case 'tan':
            dummy = evalString + `tan(${num})`;
            displayChanges(dummy);
            radian = defaultDegree ? num * Math.PI / 180 : num;
            num = Math.tan(radian);
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

function shiftClicked() {
    let sin = document.getElementById('sin');
    let cos = document.getElementById('cos');
    let tan = document.getElementById('tan');

    if (shift) {
        sin.innerHTML = 'sin';
        cos.innerHTML = 'cos';
        tan.innerHTML = 'tan';
        sin.setAttribute('name', '0')
        cos.setAttribute('name', '0')
        tan.setAttribute('name', '0')
        shift = false;
    }
    else {
        sin.innerHTML = 'sin<sup>-1</sup>'
        cos.innerHTML = 'cos<sup>-1</sup>';
        tan.innerHTML = 'tan<sup>-1</sup>';
        sin.setAttribute('name', '1')
        cos.setAttribute('name', '1')
        tan.setAttribute('name', '1')
        shift = true;

    }
}
function sinInverce() {
    dummy = evalString + `sinInv(${num})`;
    displayChanges(dummy);
    num = Math.asin(num);
    num = defaultDegree ? num * 180 / Math.PI : num;
    console.log('dummy :' + dummy);
    console.log('num :' + num);
    console.log('evalSring : ' + evalString)
}