let Ans;
class Calculator {
    constructor() {
        this.radian = 0;
        this.num = "";
        this.evalString = "";
        this.dummy = "";
        this.defaultDegree = true;
        this.shift = false;
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
        Ans = Number(this.dummy);
        this.evalString = "";
        displayAns(this.dummy);
        this.dummy = "";
        } catch (error) {
            console.log(error);
        }
    }

    ans() {
        this.dummy += Ans;
        this.num = Ans;
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
        console.log('evalSring : ' + this.evalString)
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
        console.log('called')
        Ans = Number(this.num).toString(radix);
        console.log(Ans)
        displayAns(Ans);
    }

    binToDec(radix) {
        Ans = parseInt(this.num, radix);
        displayAns(Ans);
    }

    bracket(value) {
        this.evalString += this.num;
        this.num = "";
        this.evalString += value;
        this.dummy += value;
        displayInput(this.dummy);
    }

    pm() {
        if (this.sign) {
            let position = this.dummy.indexOf(this.num)
            this.dummy = this.dummy.slice(0, position) + '-' + this.dummy.slice(position);
            this.num = String(Number(this.num) * (-1));
            console.log(this.dummy);
            displayInput(this.dummy);
            this.sign = false;
        }
        else {
            let position = this.dummy.indexOf(this.num);
            this.dummy = this.dummy.slice(0, position) + this.dummy.slice(position + 1);
            this.num = String(Number(this.num) * (-1));
            this.sign = true;
            console.log(this.dummy);
            displayInput(this.dummy);
        }
    }

    e()
    {   
        this.dummy = this.evalString + `e**(${this.num})`;
        displayInput(this.dummy);
        this.num = Math.pow(2.718281828459045,this.num);
    }
    
    nonDepOpe(id, name = '0') {
        switch (id) {
            case 'sin':
                if (name == '1') {
                    this.sinInv();
                }
                else {
                    this.sin();
                }
                break;

            case 'cos':
                if (name == '1') {
                    this.cosInv();
                }
                else {
                    this.cos();
                }
                break;

            case 'tan':
                if (name == '1') {
                    this.tanInv();
                }
                else {
                    this.tan();
                }
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
                console.log(this.num);
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
        console.log(this.defaultDegree);
        document.getElementById('radianDegree').innerText = (this.defaultDegree) ? 'Degree' : 'Redian';
    }

    shiftBtn() {
        let sin = document.getElementById('sin');
        let cos = document.getElementById('cos');
        let tan = document.getElementById('tan');
        let x_1 = document.getElementById('xInv');
        let bin = document.getElementById('bin');
        let oct = document.getElementById('oct');
        let hex = document.getElementById('hex');
        let pix = document.getElementById('pix');
        if (this.shift) {
            sin.innerHTML = 'sin';
            sin.setAttribute('name', '0');
            cos.innerHTML = 'cos';
            cos.setAttribute('name', '0');
            tan.innerHTML = 'tan';
            tan.setAttribute('name', '0');
            x_1.innerHTML = 'x<sup>-1</sup>';
            x_1.setAttribute('data-type', 'depOpe');
            x_1.setAttribute('data-value', '**-1');
            bin.innerHTML = 'Dec-Bin';
            bin.setAttribute('data-value', 'bin');
            oct.innerHTML = 'Dec-Oct';
            oct.setAttribute('data-value', 'oct');
            hex.innerHTML = 'Dec-Hex';
            hex.setAttribute('data-value', 'hex');
            pix.innerHTML = 'PI';
            pix.setAttribute('data-value', '*(22/7)');
            pix.setAttribute('data-type', 'append');
            this.shift = false;
        }
        else {
            sin.innerHTML = 'sin<sup>-1</sup>'
            sin.setAttribute('name', '1')
            cos.innerHTML = 'cos<sup>-1</sup>';
            cos.setAttribute('name', '1')
            tan.innerHTML = 'tan<sup>-1</sup>';
            tan.setAttribute('name', '1')
            x_1.innerHTML = 'x!';
            x_1.setAttribute('data-type', 'nonDepOpe')
            x_1.setAttribute('data-value', 'fac')
            bin.innerHTML = 'Bin-Dec';
            bin.setAttribute('data-value', 'bin_1');
            oct.innerHTML = 'Oct-Dec';
            oct.setAttribute('data-value', 'oct_1');
            hex.innerHTML = 'Hex-Dec';
            hex.setAttribute('data-value', 'hex_1');
            pix.innerHTML = 'e<sup>x</sup>';
            pix.setAttribute('data-value', 'e');
            pix.setAttribute('data-type', 'nonDepOpe');
            this.shift = true;
        }
        console.log(this.shift);
    }

    ce() {
        if (this.num) {
            this.num = this.num.slice(0, -1);
            this.dummy = this.dummy.slice(0, -1);
            displayInput(this.dummy);
        }
        else {
            this.evalString = this.evalString.slice(0, -1);
            this.dummy = this.evalString;
            displayInput(this.evalString);
        }
    }

    memory(funcName, obj) {
        switch (funcName) {
            case 'ms':
                obj.ms(Ans);
                break;

            case 'm+':
                obj.memory += Ans;
                break;

            case 'mc':
                obj.memory = 0;
                break;

            case 'm-':
                obj.memory -= Ans;
                break;

            case 'mr':
                Ans = obj.memory;
                displayAns(Ans);
                break;

            default:
                break;
        }
    }
}