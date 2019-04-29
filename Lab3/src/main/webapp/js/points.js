const graph = document.querySelector("#graph");
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
}

function repaintPoints(){
    let points = Array.from(document.getElementsByTagName("circle"));
    let currentRadius = Number(document.querySelector('#R').value);
    if (currentRadius === 0) return;
    points.forEach( (point) => repaintPoint(point, currentRadius) )

}

function repaintPoint(point, currentRadius){

    let gx = point.getAttribute("gx");
    let gy = point.getAttribute("gy");

    let svgX = gx / (0.005 * currentRadius) + 225;
    let svgY = 225 - (gy / (0.005 * currentRadius));

    point.setAttribute("cx", svgX);
    point.setAttribute("cy", svgY);
}