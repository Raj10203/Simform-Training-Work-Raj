function memory() {
    this.memory = 0;
}

memory.prototype.mc = function () {
    this.memory = 0;  // Memory clear
};

memory.prototype.mr = function () {
    Ans = this.memory;  // Memory recall
    displayAns(Ans);
};

memory.prototype.mAdd = function (value) {
    this.memory += value;  // Memory add
};

memory.prototype.mSubtract = function (value) {
    this.memory -= value;  // Memory subtract
};

memory.prototype.ms = function (value) {
    this.memory = value;  // Memory set
};
(function () {
    let calc = new Calculator;
    let mem = new memory;

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            switch (button.dataset.type) {
                case 'number':
                    calc.number(button.dataset.value);
                    break;

                case 'depOpe':
                    calc.depOper(button.dataset.value);
                    break;

                case 'equal':
                    calc.equal();
                    break;

                case 'ans':
                    calc.ans();
                    break;

                case 'clear':
                    calc.clear();
                    break;

                case 'nonDepOpe':
                    calc.nonDepOpe(button.dataset.value, button.dataset.name);
                    break;

                case 'radianDegree':
                    calc.radianDegree();
                    break;

                case 'shift':
                    calc.shiftBtn();
                    break;

                case 'memory':
                    calc.memory(button.dataset.value, mem);
                    break;

                case 'ce':
                    calc.ce();
                    break;

                case 'append':
                    calc.appendString(button.dataset.value);
                    break;

                case 'bracket':
                    calc.bracket(button.dataset.value);
                    break;

                case 'pm':
                    calc.pm();
                    break;

                default:
                    break;
            }
        })
    })
})();

function displayAns(ans) {
    let ch = document.getElementById('ans');
    ch.value = ans;
}

function displayInput(input) {
    let ch = document.getElementById('changes');
    ch.value = input;
}

