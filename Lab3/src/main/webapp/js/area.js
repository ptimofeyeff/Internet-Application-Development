let canvas = document.querySelector("#area");
let context = canvas.getContext("2d");

let canvasPoints = document.querySelector("#points");
let contextPoints = canvasPoints.getContext("2d");

let points = [];
let pointCount = 0;


document.addEventListener("DOMContentLoaded", function(){
    canvasPoints.addEventListener("click", paintPoint);
});



function paintPoint(){


    let hx = event.offsetX;
    let hy = event.offsetY;
    let gx =  Math.round((hx - (canvasPoints.width/2))*0.005*document.querySelector('#R').value*1000)/1000;
    let gy = Math.round((-(hy - (canvasPoints.height/2)))*0.005*document.querySelector('#R').value*1000)/1000;
    let point = {};

    point.gx = gx;
    point.gy = gy;


    points[pointCount] = point;

    sumbitArea(gx,gy);
    contextPoints.beginPath();
    contextPoints.fillStyle = 'red';
    contextPoints.arc(hx,hy,2,0, 2*Math.PI,true);
    contextPoints.stroke();
    contextPoints.fill();
    pointCount++;

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


