import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Dot} from '../main-page/model/Dot';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  @ViewChild('graph', {static: false}) graph:ElementRef;


  constructor() { }

  ngOnInit() {
  }

  addPoint(){
    /*let radius = this.point.r;
    let svgX = event.offsetX;
    let svgY = event.offsetY;
    let graphX =  Math.round((svgX - (graph.width.baseVal.value/2))*0.005*radius*1000)/1000;
    let graphY = Math.round((-(svgY - (graph.height.baseVal.value/2)))*0.005*radius*1000)/1000;

    document.querySelector("#pointX").value = graphX;
    document.querySelector("#pointY").value = graphY;
    document.querySelector("#pointR").value = radius;
    document.querySelector("#submitPoint").click();*/

    console.log(this.graph.nativeElement.width.baseVal.value);
  }
}


