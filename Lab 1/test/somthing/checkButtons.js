

for (let i = 0; i <buttons.length ; i++) {
    buttons[i].addEventListener('click', function (event) {
        event.preventDefault();
        button = buttons[i];
    })
}




function check() {
    console.log(document.querySelector('#R').value);
}

document.querySelector('#submitButton').addEventListener('click',check );