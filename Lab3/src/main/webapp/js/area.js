const area = document.querySelector("#area");

function paintPoint(event){

    let radius = document.querySelector('#R').value;

    let svgX = event.offsetX;
    let svgY = event.offsetY;
    let graphX =  Math.round((svgX - (area.width.baseVal.value/2))*0.005*radius*1000)/1000;
    let graphY = Math.round((-(svgY - (area.height.baseVal.value/2)))*0.005*radius*1000)/1000;

    document.querySelector("#pointX").value = graphX;
    document.querySelector("#pointY").value = graphY;
    document.querySelector("#pointR").value = radius;

    document.querySelector("#submitPoint").click();
}

function repaintPoint(point) {

    let gx = point.gx;
    let gy = point.gy;

    let hx = gx / (0.005 * document.querySelector('#R').value) + 225;
    let hy = 225 - (gy / (0.005 * document.querySelector('#R').value));

    contextPoints.beginPath();
    contextPoints.fillStyle = 'red';
    contextPoints.arc(hx, hy, 2, 0, 2 * Math.PI, true);
    contextPoints.stroke();
    contextPoints.fill();
}


function repaintPoints() {
    contextPoints.clearRect(0, 0, canvasPoints.width, canvasPoints.height);
    points.forEach( (point) => repaintPoint(point));
}


