// colormode start

let btn= document.querySelector(`.btn`);
let body = document.querySelector(`body`);
let text = document.querySelector(`.color h2`);
let light = document.querySelector(`.color .btn .light`);

function color(){
body.classList.toggle(`darkmode`);
if(body.classList.contains(`darkmode`)== true){
    text.innerHTML = `Dark Mode`;
}
else{
    text.innerHTML = `Light Mode`;
    
}
}

btn.addEventListener(`click`, color);


// colormode end


// Counter Start

let incBtn = document.querySelector(`.incbtn`);
let decBtn = document.querySelector(`.decbtn`);
let resetBtn = document.querySelector(`.reset`);
let input = document.querySelector(`.input`);

// INCREMENT

function increment(){
let value = Number(input.value);
if (value== 6){
    alert(`Sorry, Out of Stock!`);
    return false;
}
value = value + 1;
input.value = value;

}
incBtn.addEventListener(`click`, increment);

// DECREMENT

function decrement(){
let value = Number(input.value);
if(value ==0){
    return false;
}
value = value - 1;
input.value = value;

}
decBtn.addEventListener(`click`, decrement);

// RESET

function reset(){
    input.value = 0;
}

resetBtn.addEventListener(`click`,reset);

// Counter End

// Password Start

let passField = document.querySelector(`.passfield`);
let eyeBtn = document.querySelector(`.show`);

function pwField(){
    if(passField.type == `password`){
        passField.type = `text`;
        eyeBtn.innerHTML = `<i class="bi bi-eye-slash"></i>`;
    }

    else{
        passField.type = `password`;
        eyeBtn.innerHTML = `<i class="bi bi-eye"></i>`;
    }
}

eyeBtn.addEventListener(`click`, pwField);

// Password End

// Calculator Start
let calBtn = document.querySelector(`.calc`);
let result;

function calculate(){
const num1 = parseFloat(prompt(`Enter First Number`));
const num2 = parseFloat(prompt(`Enter second Number`));
const operator = prompt(`Enter any operator ( either +, -, * or / ):`);
if(operator == `+`){
    result = num1 + num2 ;   
}
else if (operator == `-`){
    result = num1 - num2 ;   
}
else if (operator == `*`){
    result = num1 * num2 ;   
}

else if (operator == `/`){
    result = num1 / num2 ;   
}
else{
    result = `Invalid! Please Try Again.`
}

document.write(`${num1} ${operator} ${num2} = ${result}`);

}

calBtn.addEventListener(`click`, calculate);
// Calculator End

// Modal Start
let modalBtn = document.querySelector('.mod_btn');

let modalDialgBox = document.querySelector('.modalbox');
let modalBoxClose = document.querySelector('.closeBtn');
function popup(){
    modalDialgBox.classList.add('active');
}

function closePopUp(){
    modalDialgBox.classList.remove('active');
}

modalBoxClose.addEventListener('click',closePopUp);
modalBtn.addEventListener('click',popup);
// Modal end

