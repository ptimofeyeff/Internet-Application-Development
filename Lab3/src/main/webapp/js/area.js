const graph = document.querySelector("#graph");
let currentX, currentY;
let pointCount = -1;
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
    console.log(2);
    const svgNS = "http://www.w3.org/2000/svg";
    let point = document.createElementNS(svgNS,"circle");
    point.setAttribute("r", "2");
    point.setAttribute("cx", currentX);
    point.setAttribute("cy", currentY);
    point.setAttribute("fill",
        document.querySelector("#resultTable").getElementsByTagName("td")[pointCount].innerText === "true" ? "yellow" : "red");
    graph.appendChild(point);

}
