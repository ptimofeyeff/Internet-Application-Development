
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#submitButton').addEventListener('click', submit);
});

let error = document.querySelector("#error");
let buttons = document.getElementsByClassName("R");
let DefaultButnColor = getComputedStyle(buttons[0]).background;
let buttonValue = null;
let checkboxValue = 0;




for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function (event) {
        event.preventDefault();
        buttonValue = buttons[i].value;
        paint(buttons[i]);
    })
}

function submit(e) {
    e.preventDefault();
    if(validateForm()){
        //const formData = new FormData(document.querySelector('#form'));

        fetch('', {
            method: 'GET',
        })
            .then(result => result.text())
            //.then(table => document.querySelector('#result').innerHTML = table);
    }
    return false;
}



function validateForm() {
    if (validateX() && validateR() && validateY()){
        error.innerHTML = "";
        document.querySelector("#R_value").value = buttonValue;
        return true;
    }else {
        return false;
    }
}


function validateX() {
    let x = document.querySelector("#x").value.trim().replace(",",".");
    if (!(isNaN(x) || isEmpty(x)) && (x > -3 && x < 3)){
        return true;
    }else {
        error.innerHTML = "X не валиден";
        return false;
    }

}
function validateR() {
    if(buttonValue === null){
        error.innerHTML = "Выберети значение R";
        return false;
    }else {
        return true;
    }
}

function validateY() {
    checkboxValue = 0;
    let check = false;
    let checkboxes = document.getElementsByClassName("Y");

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked){
            checkboxValue += Number(checkboxes[i].id);
            check = true;
        }
    }
    if (!check){
        error.innerHTML = "Выберите значение Y";
    }else {
        error.innerHTML = "";
    }

    return check;
}


function isEmpty(x) {return x.length === 0;}



function paint(button) {
    for (let i = 0; i < buttons.length; i++){
        buttons[i].style.background = DefaultButnColor;
    }
    button.style.background = '#7e8279';
}

