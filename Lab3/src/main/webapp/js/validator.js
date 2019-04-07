/*document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#submitButton').addEventListener('click', submitForm);
});
*/
let error = document.querySelector("#error");
let buttons = document.getElementsByClassName("R");
//let DefaultButnColor = getComputedStyle(buttons[0]).background;
let buttonValue = null;


for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function (event) {
        event.preventDefault();
        buttonValue = buttons[i].value;
        paint(buttons[i]);
    })
}

function submitForm(e) {
/*    e.preventDefault();

    if(validateForm()){
        let X = getX();
        let Y = getY();
        const url = '/Lab2/ControllerServlet?X='+X+'&Y='+Y+'&R='+buttonValue;
        fetch(url)
            .then(response => response.text())
            .then(ans => document.querySelector("#resTable").innerHTML = ans);

    }*/
}


function sumbitArea(x, y){
/*    const url = '/Lab2/ControllerServlet?X='+x+'&Y='+y+'&R='+buttonValue;
    fetch(url)
        .then(response => response.text())
        .then(ans => document.querySelector("#resTable").innerHTML = ans);*/
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


function validateY(y) {
    if (!(isNaN(y) || isEmpty(y)) && (y > -3 && y < 3)){
        return true;
    }else {
        error.innerHTML = "X не валиден";
        return false;
    }

}

function validateR() {
    if (!isSelectR()){
        error.innerHTML = "Выберите одно значение Y";
    }
    return isSelectR();
}

function validateX() {
    if(buttonValue === null){
        error.innerHTML = "Выберети значение R";
        return false;
    }else {
        return true;
    }
}


function getY() {
    return document.querySelector("#y").value.trim().replace(",",".");
}

function getR() {
    let checkboxes = document.getElementsByClassName("y");
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked){
            return checkboxes[i];
        }
    }
}


function isSelectR() {
    let checkboxes = document.getElementsByClassName("y");
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