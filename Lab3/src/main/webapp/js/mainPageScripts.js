document.addEventListener('DOMContentLoaded',() => init());

const DefaultButnColor = document.getElementsByClassName('button')[0].style.background;
document.getElementsByClassName("button")[3].click();

function init() {
    document.getElementsByClassName("button")[3].click();
    selectCheckbox();
}

function clickButton(event, button) {
    event.preventDefault();
    document.querySelector('#X').value = button.value;
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


function selectCheckbox() {
    let checkboxes = document.getElementsByClassName('r');
    let r = 0;
    for (let i = 0; i <checkboxes.length; i++) {
        if(checkboxes[i].checked){
            r += Number(document.getElementsByClassName('r')[i].previousSibling.textContent
                .charAt(document.getElementsByClassName('r')[i].previousSibling.textContent.length-1));
        }
    }
    document.querySelector('#R').value = r;
}





