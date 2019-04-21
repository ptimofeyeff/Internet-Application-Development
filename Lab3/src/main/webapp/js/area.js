const graph = document.querySelector("#graph");
let currentX, currentY;
let pointCount = -1;
let points = [];
let currentPoint = 0;
function addPoint(event){
    let radius = document.querySelector('#R').value;
    let svgX = event.offsetX;
    let svgY = event.offsetY;
    let graphX =  Math.round((svgX - (graph.width.baseVal.value/2))*0.005*radius*1000)/1000;
    let graphY = Math.round((-(svgY - (graph.height.baseVal.value/2)))*0.005*radius*1000)/1000;

    document.querySelector("#pointX").value = graphX;
    document.querySelector("#pointY").value = graphY;
    document.querySelector("#pointR").value = radius;
    document.querySelector("#submitPoint").click();

    currentX = svgX;
    currentY = svgY;


    pointCount += 4;

    setTimeout(paintPoint, 100);
}


function paintPoint(){
    const svgNS = "http://www.w3.org/2000/svg";
    let point = document.createElementNS(svgNS,"circle");
    let color = document.querySelector("#resultTable").
        getElementsByTagName("td")[pointCount].innerText === "true" ? "yellow" : "red";

    point.setAttribute("r", "2");
    point.setAttribute("cx", currentX);
    point.setAttribute("cy", currentY);
    point.setAttribute("fill", color);
    graph.appendChild(point);

    let storePoint = {};
    storePoint.graphX = document.querySelector("#pointX").value;
    storePoint.graphY = document.querySelector("#pointY").value;
    storePoint.color = color;
    points[currentPoint] = storePoint;
    currentPoint++;

}

function repaintPoints(){
    let length = document.getElementsByTagName("circle").length;

    for (let i = length-1; i >=0; i--) {
        document.getElementsByTagName("circle")[i].remove();
    }

    points.forEach( (storePoint)=>repaintPoint(storePoint));

}


function repaintPoint(storePoint){
    let gx = storePoint.graphX;
    let gy = storePoint.graphY;
    let r =  document.querySelector('#R').value;

    let svgX = gx / (0.005 * Number(r)) + 225;
    let svgY = 225 - (gy / (0.005 * Number(r)));
    const svgNS = "http://www.w3.org/2000/svg";
    let point = document.createElementNS(svgNS,"circle");

    point.setAttribute("r", "2");
    point.setAttribute("cx", svgX.toString());
    point.setAttribute("cy", svgY.toString());
    point.setAttribute("fill", storePoint.color);
    graph.appendChild(point);
}