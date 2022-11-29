const num1 = document.getElementById('number1');
const num2 = document.getElementById('number2');
const num3 = document.getElementById('number3');

var projectCount = 0;
var project = setInterval(project, 10)

function project(){
    projectCount++;
    num1.innerHTML = projectCount;
    if(projectCount == 200){
        clearInterval(project)
    }
}

let clintCount = 0;
var  clint = setInterval( clint, 12)

function  clint(){
    clintCount ++;
    num2.innerText =clintCount ;
    if(clintCount == 250){
        clearInterval( clint)
    }
}

var amountCount = 0;
var amount = setInterval(amount, 10)
function amount() {
    amountCount++
    num3.innerText = amountCount
    if(amountCount == 350){
        clearInterval(amount)
    }
}