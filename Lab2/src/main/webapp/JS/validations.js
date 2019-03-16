document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#submitButton').addEventListener('click', submitForm);
});

let error = document.querySelector("#error");
let buttons = document.getElementsByClassName("R");
let DefaultButnColor = getComputedStyle(buttons[0]).background;
let buttonValue = null;





for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function (event) {
        event.preventDefault();
        buttonValue = buttons[i].value;
        paint(buttons[i]);
    })
}

function submitForm(e) {
    e.preventDefault();

    if(validateForm()){
        console.log("x = "+getX());
        console.log("y = "+getY());
        console.log("r = "+buttonValue);
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
    let x = getX();
    let y = getY();
    let r = buttonValue;

    if (validateX(x) && validateY(y) && validateR(r)){
        error.innerHTML = "";
        document.querySelector("#R_value").value = r;
        return true;
    }else {
        return false;
    }
}


function validateX(x) {
    if (!(isNaN(x) || isEmpty(x)) && (x > -3 && x < 3)){
        return true;
    }else {
        error.innerHTML = "X не валиден";
        return false;
    }

}

function validateY() {
    if (!isSelectY()){
        error.innerHTML = "Выберите одно значение Y";
    }
    return isSelectY();
}

function validateR() {
    if(buttonValue === null){
        error.innerHTML = "Выберети значение R";
        return false;
    }else {
        return true;
    }
}


function getX() {
    return document.querySelector("#x").value.trim().replace(",",".");
}

function getY() {
    let checkboxes = document.getElementsByClassName("Y");
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked){
            return checkboxes[i].id;
        }
    }
}


function isSelectY() {
    let checkboxes = document.getElementsByClassName("Y");
    let countSelect = 0;

    for (let i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            countSelect++;
        }
    }

    return (countSelect === 1);
}


function paint(button) {
    for (let i = 0; i < buttons.length; i++){
        buttons[i].style.background = DefaultButnColor;
    }
    button.style.background = '#7e8279';
    if (points.length !== 0){
        repaintPoints();
    }
}

function isEmpty(x) {
    return x.length === 0;
}





