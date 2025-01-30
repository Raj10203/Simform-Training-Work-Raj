let Ans;

class Calculator {
    constructor() {
        this.radian = 0;
        this.num = "";
        this.evalString = "";
        this.dummy = "";
        this.defaultDegree = true;
        this.shift = false;

    }


    number(result) {

        this.num += String(result);
        console.log('string' + this.num);


        this.dummy += String(result);
        displayInput(this.dummy);
        console.log('num :' + this.num);
        console.log('dummy :' + this.dummy);
    }
    depOper(value) {
        console.log(value);
        this.dummy += String(value);
        displayInput(this.dummy);
        this.evalString += this.num;
        this.num = "";
        this.evalString += value;
        console.log('evalSring :' + this.evalString);
    }
    equal() {

        this.evalString += this.num;
        this.num = "";

        try {
            this.dummy = eval(this.evalString);
            Ans = Number(this.dummy);
            console.log('dummy :' + this.dummy);
            console.log('num :' + this.num);
            console.log('evalSring : ' + this.evalString);
            this.evalString = eval(this.evalString);
            this.evalString = "";
            displayAns(this.dummy);
            this.dummy = "";

        } catch (error) {
            console.log(error)
        }
    }
    ans() {
        this.dummy += Ans;
        this.num = Ans;
        displayInput(this.dummy);
        console.log('dummy :' + this.dummy);
        console.log('num :' + this.num);
        console.log('evalSring : ' + this.evalString);
    }
    clear() {
        this.dummy = ""
        this.num = "";
        this.evalString = "";
        displayInput(0);

    }
    sin() {
        this.dummy = this.evalString + `sin(${this.num})`;
        displayInput(this.dummy);
        this.radian = this.defaultDegree ? this.num * Math.PI / 180 : this.num;
        this.num = Math.sin(this.radian);
        console.log('dummy :' + this.dummy);
        console.log('num :' + this.num);
        console.log('evalSring : ' + this.evalString);
    }
    sinInv() {
        this.dummy = this.evalString + `sinInv(${this.num})`;
        displayInput(this.dummy);
        this.num = Math.asin(this.num);
        this.num = this.defaultDegree ? this.num * 180 / Math.PI : this.num;
        console.log('dummy :' + this.dummy);
        console.log('num :' + this.num);
        console.log('evalSring : ' + this.evalString)
    }
    cos() {
        this.dummy = this.evalString + `cos(${this.num})`;
        displayInput(this.dummy);
        this.radian = this.defaultDegree ? this.num * Math.PI / 180 : this.num;
        this.num = Math.cos(this.radian);
        console.log('dummy :' + this.dummy);
        console.log('num :' + this.num);
        console.log('evalSring : ' + this.evalString);
    }
    cosInv() {
        this.dummy = this.evalString + `cosInv(${this.num})`;
        displayInput(this.dummy);
        this.num = Math.acos(this.num);
        this.num = this.defaultDegree ? this.num * 180 / Math.PI : this.num;
        console.log('dummy :' + this.dummy);
        console.log('num :' + this.num);
        console.log('evalSring : ' + this.evalString);
    }
    tan() {
        this.dummy = this.evalString + `tan(${this.num})`;
        displayInput(this.dummy);
        this.radian = this.defaultDegree ? this.num * Math.PI / 180 : this.num;
        this.num = Math.tan(this.radian);
        console.log('dummy :' + this.dummy);
        console.log('num :' + this.num);
        console.log('evalSring : ' + this.evalString);
    }
    tanInv() {
        this.dummy = this.evalString + `tanInv(${this.num})`;
        displayInput(this.dummy);
        this.num = Math.atan(this.num);
        this.num = this.defaultDegree ? this.num * 180 / Math.PI : this.num;
        console.log('dummy :' + this.dummy);
        console.log('num :' + this.num);
        console.log('evalSring : ' + this.evalString);
    }
    log10() {
        this.dummy = this.evalString + `log10(${this.num})`;
        displayInput(this.dummy);
        this.num = Math.log10(this.num);
        console.log('dummy :' + this.dummy);
        console.log('num :' + this.num);
        console.log('evalSring : ' + this.evalString);
    }
    log() {
        this.dummy = this.evalString + `log10(${this.num})`;
        displayInput(this.dummy);
        this.num = Math.log(this.num);
        console.log('dummy :' + this.dummy);
        console.log('num :' + this.num);
        console.log('evalSring : ' + this.evalString);
    }

    nonDepOpe(id, name = '0') {
        switch (id) {
            case 'sin':
                console.log('name' + name);

                if (name == '1') {
                    this.sinInv();
                }
                else {
                    this.sin();
                }
                break;
            case 'cos':
                console.log('name' + name);

                if (name == '1') {
                    this.cosInv();
                }
                else {
                    this.cos();
                }
                break;

            case 'tan':
                console.log('name' + name);

                if (name == '1') {
                    this.tanInv();
                }
                else {
                    this.tan();
                }
                break;

            case 'log':
                this.log10();
                break;

            case 'ln':
                this.log();

                break;

            case 'fac':
                console.log(this.num);
                let res = 1;
                for (let i = 1; i <= this.num; i++) {
                    res *= i;
                }
                this.dummy += "!";
                this.num = res;
                displayInput(this.dummy)
                console.log('dummy :' + this.dummy);
                console.log('num :' + this.num);
                console.log('evalSring : ' + this.evalString);

                break;

            default:
                break;
        }

    }
    radianDegree() {
        this.defaultDegree = (this.defaultDegree) ? false : true;
        console.log(this.defaultDegree);
        document.getElementById('radianDegree').innerText = (this.defaultDegree) ? 'Degree' : 'Redian';
    }
    shiftBtn() {
        console.log(this.shift);

        let sin = document.getElementById('sin');
        let cos = document.getElementById('cos');
        let tan = document.getElementById('tan');
        let x_1 = document.getElementById('xInv');

        if (this.shift) {
            x_1.innerHTML = 'x<sup>-1</sup>'
            sin.innerHTML = 'sin';
            cos.innerHTML = 'cos';
            tan.innerHTML = 'tan';
            x_1.setAttribute('data-type', 'depOpe')
            x_1.setAttribute('data-value', '**-1')
            sin.setAttribute('name', '0')
            cos.setAttribute('name', '0')
            tan.setAttribute('name', '0')
            this.shift = false;
        }
        else {
            x_1.innerHTML = 'x!';
            sin.innerHTML = 'sin<sup>-1</sup>'
            cos.innerHTML = 'cos<sup>-1</sup>';
            tan.innerHTML = 'tan<sup>-1</sup>';
            x_1.setAttribute('data-type', 'nonDepOpe')
            x_1.setAttribute('data-value', 'fac')
            sin.setAttribute('name', '1')
            cos.setAttribute('name', '1')
            tan.setAttribute('name', '1')
            this.shift = true;
        }
    }
    ce()
    {
        if(this.num){
            this.num = this.num.slice(0,-1);
            this.dummy = this.dummy.slice(0,-1);
            displayInput(this.dummy);
            console.log('dummy :' + this.dummy);
            console.log('num :' + this.num);
            console.log('evalSring : ' + this.evalString);

        }
        else{
            console.log('evalSring : ' + this.evalString);
            this.evalString = this.evalString.slice(0,-1);
            this.dummy = this.evalString;
            displayInput(this.evalString); 
            console.log('dummy :' + this.dummy);
            console.log('num :' + this.num);
            console.log('evalSring : ' + this.evalString);
        }
    }
    memory(funcName, obj) {
        switch (funcName) {
            case 'ms':
                console.log("ms");
                obj.ms(Ans);
                console.log(obj.memory);
                break;

            case 'm+':
                console.log("m+");
                obj.memory += Ans;
                // obj.ms(10);   
                console.log(obj.memory);
                break;

            case 'mc':
                console.log("mc");
                obj.memory = 0;
                // obj.ms(10);   
                console.log(obj.memory);
                break;

            case 'm-':
                console.log("m-");
                obj.memory -= Ans;
                // obj.ms(10);   
                console.log(obj.memory);
                break;

            case 'mr':
                console.log("mr");
                Ans = obj.memory;
                displayAns(Ans);
                console.log(obj.memory);
                break;

            default:
                break;
        }
    }
}


