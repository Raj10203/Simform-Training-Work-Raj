let ans;
class Calculator {
    constructor() {
        this.radian = 0;
        this.num = "";
        this.evalString = "";
        this.dummy = "";
        this.defaultDegree = true;
        this.shift = 0;
        this.sign = true;
    }

    number(result) {
        this.num += String(result);
        this.dummy += String(result);
        displayInput(this.dummy);
    }

    depOper(value) {
        this.dummy += String(value);
        displayInput(this.dummy);
        this.evalString += this.num;
        this.num = "";
        this.evalString += value;
    }

    equal() {
        this.evalString += this.num;
        this.num = "";
        try {
            this.dummy = eval(this.evalString);
            ans = Number(this.dummy);
            this.evalString = "";
            displayAns(this.dummy);
            this.dummy = "";
        } catch (error) {
            console.log(error);
        }
    }

    ans() {
        this.dummy += ans;
        this.num = ans;
        displayInput(this.dummy);
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
    }

    sinInv() {
        this.dummy = this.evalString + `sinInv(${this.num})`;
        displayInput(this.dummy);
        this.num = Math.asin(this.num);
        this.num = this.defaultDegree ? this.num * 180 / Math.PI : this.num;
    }

    cos() {
        this.dummy = this.evalString + `cos(${this.num})`;
        displayInput(this.dummy);
        this.radian = this.defaultDegree ? this.num * Math.PI / 180 : this.num;
        this.num = Math.cos(this.radian);
    }

    cosInv() {
        this.dummy = this.evalString + `cosInv(${this.num})`;
        displayInput(this.dummy);
        this.num = Math.acos(this.num);
        this.num = this.defaultDegree ? this.num * 180 / Math.PI : this.num;
    }

    tan() {
        this.dummy = this.evalString + `tan(${this.num})`;
        displayInput(this.dummy);
        this.radian = this.defaultDegree ? this.num * Math.PI / 180 : this.num;
        this.num = Math.tan(this.radian);
    }

    tanInv() {
        this.dummy = this.evalString + `tanInv(${this.num})`;
        displayInput(this.dummy);
        this.num = Math.atan(this.num);
        this.num = this.defaultDegree ? this.num * 180 / Math.PI : this.num;
    }

    log10() {
        this.dummy = this.evalString + `log10(${this.num})`;
        displayInput(this.dummy);
        this.num = Math.log10(this.num);
    }

    log() {
        this.dummy = this.evalString + `log10(${this.num})`;
        displayInput(this.dummy);
        this.num = Math.log(this.num);
    }

    decToBin(radix) {
        ans = Number(this.num).toString(radix);
        displayAns(ans);
    }

    binToDec(radix) {
        ans = parseInt(this.num, radix);
        displayAns(ans);
    }

    bracket(value) {
        this.evalString += this.num;
        this.num = "";
        this.evalString += value;
        this.dummy += value;
        displayInput(this.dummy);
    }

    pm() {
        let position = this.dummy.indexOf(this.num)
        if (this.sign) {
            this.dummy = this.dummy.slice(0, position) + '-' + this.dummy.slice(position);
            this.num = String(Number(this.num) * (-1));
            this.sign = false;
        }
        else {
            this.dummy = this.dummy.slice(0, position) + this.dummy.slice(position + 1);
            this.num = String(Number(this.num) * (-1));
            this.sign = true;
        }
        displayInput(this.dummy);
    }

    e() {
        this.dummy = this.evalString + `e**(${this.num})`;
        displayInput(this.dummy);
        this.num = Math.pow(2.718281828459045, this.num);
    }

    nonDepOpe(id, name = 0) {
        switch (id) {
            case 'sin':
                name == '1' ? this.sinInv() : this.sin();
                break;

            case 'cos':
                name == '1' ? this.cosInv() : this.cos();
                break;

            case 'tan':
                name == '1' ? this.tanInv() : this.tan();
                break;

            case 'hex':
                this.decToBin(16);
                break;

            case 'hex_1':
                this.binToDec(16);
                break;

            case 'bin':
                this.decToBin(2);
                break;

            case 'bin_1':
                this.binToDec(2);
                break;

            case 'oct':
                this.decToBin(8);
                break;

            case 'oct_1':
                this.binToDec(8);
                break;

            case 'log':
                this.log10();
                break;

            case 'ln':
                this.log();
                break;

            case 'e':
                this.e();
                break;

            case 'fac':
                let res = 1;
                for (let i = 1; i <= this.num; i++) {
                    res *= i;
                }
                this.dummy += "!";
                this.num = res;
                displayInput(this.dummy)
                break;

            default:
                break;
        }
    }

    appendString(value) {
        this.dummy += value;
        this.evalString += this.num + value;
        this.num = "";
        displayInput(this.dummy);
    }

    radianDegree() {
        this.defaultDegree = (this.defaultDegree) ? false : true;
        document.getElementById('radianDegree').innerText = (this.defaultDegree) ? 'Degree' : 'Redian';
    }

    shiftBtn() {
        this.shift = this.shift ? 0 : 1;
        console.log(this.shift);
        for (let sign in signs) {
            let s;
            let node = document.getElementById(`${sign}`);
            node.innerHTML = signs[sign][this.shift]['innerHTML'];
            for (let key in s = signs[sign]['attributs']) {
                node.setAttribute(s[key], signs[sign][this.shift]['attributeValue'][key])
            }
        }
    }

    ce() {
        if (this.num) {
            this.num = this.num.slice(0, -1);
            this.dummy = this.dummy.slice(0, -1);
            displayInput(this.dummy)
        }
        else {
            this.evalString = this.evalString.slice(0, -1);
            this.dummy = this.evalString;
            displayInput(this.evalString)
        }
    }

    memory(funcName, obj) {
        switch (funcName) {
            case 'ms':
                obj.ms(ans);
                break;

            case 'm+':
                obj.memory += ans;
                break;

            case 'mc':
                obj.memory = 0;
                break;

            case 'm-':
                obj.memory -= ans;
                break;

            case 'mr':
                ans = obj.memory;
                displayAns(ans);
                break;

            default:
                break;
        }
    }
}