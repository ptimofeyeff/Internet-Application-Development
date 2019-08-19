import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Dot} from './model/Dot';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../share/api.service';
import {CoordinatesMapperService} from '../share/coordinates-mapper.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @ViewChild('graph', {static: false}) graph:ElementRef;

  form: FormGroup;
  dots: Dot[] = [];

  constructor(private apiService: ApiService, private coordinatesMapper: CoordinatesMapperService) { }


  ngOnInit() {
    this.form = new FormGroup({
      x: new FormControl('', Validators.required),
      y: new FormControl('',
        [Validators.required, Validators.min(-5),
          Validators.max(5),
          Validators.pattern("[-+]?[1-9][0-9]*[.,]?[0-9]*")]),

      r: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  sendForm(): void{
    const controls = this.form.controls;

    if(this.form.invalid){
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAllAsTouched());
      return;
    }

    this.sendDot(new DotViewModel(
      this.form.value.x,
      this.form.value.y,
      this.form.value.r));
  }


  addDot(event){
    if (this.form.controls['r'].invalid){
      this.form.controls['r'].markAllAsTouched();
      return;
    }

    const radius = this.form.value.r;
    const areaX = CoordinatesMapperService.svgXtoAreaX(event.offsetX, radius);
    const areaY = CoordinatesMapperService.svgYtoAreaY(event.offsetY, radius);

    this.sendDot(new DotViewModel(areaX, areaY, radius));
  }

  redrawDots(){
    if (this.form.controls['r'].invalid) return;
    this.dots.forEach((dot) => dot.changeRadius(this.form.value.r));
  }


   sendDot(dot: DotViewModel){
      this.apiService.postDot(dot).subscribe(
        res => {
          const dotEntity = new Dot(res['x'], res['y'], res['radius'], res['hit']);
          this.dots.push(dotEntity);
        },
        error => console.log("Все сломалось")
      )
   }
}


export class DotViewModel {
  x: number;
  y: number;
  radius: number;

  constructor(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
}













