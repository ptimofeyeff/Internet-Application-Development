let canvas = document.querySelector("#area");
let context = canvas.getContext("2d");

let canvasPoints = document.querySelector("#points");
let contextPoints = canvasPoints.getContext("2d");

let points = [];
let pointCount = 0;

//-------------Рисуем--фигуры---------------------------------------------------------

// прямоугольник
context.fillStyle = "blue";
context.fillRect(125, 25,100,200);

// треугольник
context.strokeStyle = 'blue';
context.moveTo(225,225);
context.lineTo(425,225);
context.lineTo(225,325);
context.lineTo(225,225);
context.stroke();
context.fill();


// дуга
context.beginPath();
context.arc(225,225, 200, Math.PI,Math.PI/2, true);
context.lineTo(225,225);
context.stroke();
context.fill();

//-------------Рисуем--оси---------------------------------------------------------

context.strokeStyle = 'black';
context.lineWidth = "2";

context.beginPath();

// горизонтальная ось
context.moveTo(5,225);
context.lineTo(445,225);
context.stroke();
// её стрелочка
context.moveTo(449,225);
context.lineTo(435,220);
context.moveTo(449,225);
context.lineTo(435,230);

// вертикальная ось
context.moveTo(225,5);
context.lineTo(225,445);
context.stroke();

// её стрелочка
context.moveTo(225,5);
context.lineTo(220,15);
context.moveTo(225,5);
context.lineTo(230,15);

// засечки сверху
context.moveTo(221,125);
context.lineTo(229,125);
context.stroke();

context.moveTo(221,25);
context.lineTo(229,25);
context.stroke();


// засечки снизу
context.moveTo(221,325);
context.lineTo(229,325);
context.stroke();

context.moveTo(221,425);
context.lineTo(229,425);
context.stroke();


// засечки слева
context.moveTo(125,221);
context.lineTo(125,229);
context.stroke();

context.moveTo(25,221);
context.lineTo(25,229);
context.stroke();

// засечка справа
context.moveTo(325,221);
context.lineTo(325,229);
context.stroke();

context.moveTo(425,221);
context.lineTo(425,229);
context.stroke();


// Рисуем подписи к графикам
context.beginPath();
context.fillStyle = 'black';
context.font = "16pt bold Arial";

context.fillText("-R/2",125,220);
context.fillText("-R/2",230,332);
context.fillText("R/2",230,125);
context.fillText("R/2",332,220);

context.fillText("-R",25,220);
context.fillText("-R",230,428);
context.fillText("R",200,35);
context.fillText("R",412,220);

context.fillText("Y", 235,15);
context.fillText("X", 435,248);


document.addEventListener("DOMContentLoaded", function(){
    canvasPoints.addEventListener("click", paintPoint);
});



function paintPoint(){
    if (buttonValue !== null){

        let hx = event.offsetX;
        let hy = event.offsetY;
        let gx =  Math.round((hx - (canvasPoints.width/2))*0.005*buttonValue*1000)/1000;
        let gy = Math.round((-(hy - (canvasPoints.height/2)))*0.005*buttonValue*1000)/1000;
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
        error.innerHTML = "";
        pointCount++;

    }else {
        error.innerHTML = "Невозможно определить координаты точки, " + "\n" +
            "выберети значение R";
    }
}

function repaintPoint(point) {

    let gx = point.gx;
    let gy = point.gy;

    let hx = gx / (0.005 * buttonValue) + 225;
    let hy = 225 - (gy / (0.005 * buttonValue));

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


