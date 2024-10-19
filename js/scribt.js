const previousOperandElement = document.querySelector('.previous-operand');

const numberElement = document.querySelectorAll('[data-number]');
const operatorElement = document.querySelectorAll('[data-operation]');
const deleteOne = document.querySelector('.calculator-grid .delete');
const clearAll = document.querySelector('[data-clear-all]');
const aquel = document.querySelector('[data-aquel]');


for (i = 0; i < numberElement.length; i++) {
    numberElement[i].onclick = function () {
        previousOperandElement.innerHTML += this.innerHTML;
    };

}

for (i = 0; i < operatorElement.length; i++) {
    operatorElement[i].onclick = function () {
        previousOperandElement.innerHTML += this.innerHTML;
    }
}

aquel.onclick = function () {
    previousOperandElement.innerHTML = eval(previousOperandElement.innerHTML)
}

deleteOne.onclick = function () {
    previousOperandElement.innerHTML = previousOperandElement.innerHTML.toString().slice(0, -1);
}

clearAll.onclick = function () {
    previousOperandElement.innerHTML = previousOperandElement.innerHTML = "";
}
