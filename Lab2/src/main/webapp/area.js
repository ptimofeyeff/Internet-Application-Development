let canvas = document.querySelector("#area");
let context = canvas.getContext("2d");
canvas.width = canvas.height = 450;

//-------------Рисуем--фигуры---------------------------------------------------------

// прямоугольник
context.fillStyle = "blue";
context.fillRect(225, 25,100,200);

// треугольник
context.strokeStyle = 'blue';
context.moveTo(25,225);
context.lineTo(225,225);
context.lineTo(225,325);
context.lineTo(25,225);
context.stroke();
context.fill();

// дуга
context.beginPath();
context.arc(225,225, 100, 0,Math.PI/2, false);
context.lineTo(225,225);
context.lineTo(325,225);
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

// рисуем точки на местах клика мышки
canvas.onclick = function (event) {
    let x = event.offsetX;
    let y = event.offsetY;

    context.beginPath();
    context.srokeStyle = 'red';
    context.fillStyle = 'red';
    context.arc(x,y,2,0, 2*Math.PI,true);
    context.stroke();
    context.fill();
};


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











