const DefaultButnColor = document.getElementsByClassName('button')[0].style.background;
document.getElementsByClassName("button")[3].click();

function clickButton(event, button) {
    event.preventDefault();
    document.querySelector('#rVal').value = button.value;
    paintButton(document.getElementsByClassName('button'), button);
}

function paintButton(buttons, targetButton) {

    for (let i = 0; i < buttons.length; i++){
        if(buttons[i] !== targetButton){
            buttons[i].style.background = DefaultButnColor;
        }
    }
    targetButton.style.background = '#3233ff';
}







