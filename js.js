const buttons = document.getElementById('buttonBox');
let numbers = "1234567890.";
let operators = "+-*/"
let screen = document.getElementById('screen');
let displayNum = '';
let storedNum = "";
let operatorPressed = false;
let currentOperator = "";

function addition(a, b){
    return (a + b);
}

function substraction(a, b){
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a/b);
}

function operate(a,b,operator) {
    switch (operator){
        case '+':
            return addition(a,b);
        case '-':
            return substraction(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }

}

buttons.addEventListener('click', (e) => {
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton){
        return;
    }
    if (numbers.includes(e.target.textContent)) {
        let len = screen.innerText.length < 10;
        if (!len){
            return;
        }
        displayNum += e.target.textContent;
        showOnScreen()
    } 

    if (operators.includes(e.target.textContent)){

        if (operatorPressed){
        let newNumber = operate(storedNum, Number(displayNum), currentOperator)
        displayNum = newNumber
        showOnScreen()
            
        }

    storedNum = Number(screen.innerText);
    displayNum = '';
    operatorPressed = true;
    currentOperator = e.target.textContent;
        
    }
})

function showOnScreen(){
    screen.innerText = displayNum;

    if (screen.innerText[0] == 0){
        screen.innerText = screen.innerText.slice(0,0)
    }

}
