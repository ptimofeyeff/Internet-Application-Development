let form = document.querySelector('#form');
let buttons = document.querySelectorAll('#R');
let error = document.querySelector('#error');
let buttonValue = null;
let DefaultButnColor = getComputedStyle(buttons[0]).background;


buttons.forEach((button) => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        buttonValue = button.value;
        paint(button)
    })
});

function paint(button) {
    buttons.forEach((button) => {
        button.style.background =DefaultButnColor;
    });
    button.style.background = '#b3b7af';
}


function submit(e) {
    e.preventDefault();
    if(validate()){
        const formData = new FormData(document.querySelector('#form'));

        fetch('check.php', {
            method: 'POST',
            body: formData,
        })
        .then(result => result.text())
        .then(table => document.querySelector('#result').innerHTML = table);
    }
    return false;
}



function validate() {

    if(validate_Y() && validate_R()){
        error.innerHTML = "";
        document.querySelector("#R_value").value = buttonValue;
        return true;
    }else {
        return false;
    }
}

function validate_Y () {

    let y = document.querySelector("#Y").value.trim().replace(",",".");

    if ((!isNaN(y) && !isEmpty(y)) && (y > -3 && y < 3)){
        return true;
    }else {
        error.innerHTML = "Y не валиден";
        return false;
    }
}

function validate_R() {
    if(buttonValue === null){
        error.innerHTML = "Выберети значение R";
        return false;
    }else {
        return true;
    }

}

function isEmpty(y) {
    return y.length === 0;
}

document.addEventListener('DOMContentLoaded', function () {
   document.querySelector('#submitButton').addEventListener('click',submit);
});
