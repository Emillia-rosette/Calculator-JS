//Consider what data needs to be captured in order to run the program
//a + b = ?
var num1 = '';
var num2 = '';
var operator = '';

Add CommentClick to expand inline (74 lines)


Charles Joshua12:11 PM
added this JavaScript/JSON snippet: Better looking with colours ;) 
//Consider what data needs to be captured in order to run the program
//a + b = ?
var num1 = '';
var num2 = '';
var operator = '';
var buttons = document.getElementsByClassName('buttonNum');
var operators = document.getElementsByClassName('operator');
var display = document.getElementById('screen');
var clear = document.getElementById('buttonClear');
var equals = document.getElementById('equals');
var reset = false
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event){
        //console.log(event.target.innerHTML); 
        if (operator) {
            num2 += event.target.innerHTML;
            display.innerHTML = num2;
        } else if (!(operator)) {
            num1 += event.target.innerHTML;
            display.innerHTML = num1;
        }
    });
}
for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function(event){
        if (num1 == '' || num2 !== '') {
        } else {
            operator = event.target.innerHTML;
            display.innerHTML = event.target.innerHTML;
        }
    });
}
equals.addEventListener('click', function(event) {
    switch (operator) {
        case '+':
            display.innerHTML = parseInt(num1) + parseInt(num2);
        break;
        case '-':
            display.innerHTML = parseInt(num1) - parseInt(num2);
        break;
        case '*':
            display.innerHTML = parseInt(num1) * parseInt(num2);
        break;
        case '/':
            display.innerHTML = parseInt(num1) / parseInt(num2);
        break;
    }
    reset = true
        if (reset) {
            num1 = display.innerHTML
            num2 = ''
        }
})
clear.addEventListener('click', function(event){
    display.innerHTML = 'Sparta Calculator'
    reset = true
        if (reset) {
            num1 = ''
            num2 = ''
            operator = ''
        }
})
function convertToInt(num) {
    return parseInt(num) `op`;
}
//function MyCalculation(){
//}