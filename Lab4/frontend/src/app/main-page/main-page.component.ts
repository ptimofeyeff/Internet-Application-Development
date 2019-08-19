import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Dot} from './model/Dot';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../share/api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @ViewChild('graph', {static: false}) graph:ElementRef;

  form: FormGroup;
  dots: Dot[] = [];

  constructor(private apiService: ApiService) { }


  ngOnInit() {
    this.form = new FormGroup({
      x: new FormControl('', Validators.required),
      y: new FormControl('',
        [Validators.required, Validators.min(-5),
          Validators.max(5),
          Validators.pattern("[-+]?[1-9][0-9]*[.,]?[0-9]*")]),

      r: new FormControl('', [Validators.required, Validators.min(0)])
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

    const dot = new Dot(this.form.value.r);
    dot.svgInit(event.offsetX, event.offsetY);
    this.dots.push(dot);
    this.sendDot(new DotViewModel(dot.areaCoordinates.x, dot.areaCoordinates.y, this.form.value.r));
  }

  redrawDots(){
    const newRadius = this.form.value.r;
    if (newRadius.invalid) { console.log(1); return;}
    this.dots.forEach( (dot) => MainPageComponent.redrawDot(dot, newRadius));
  }

   static redrawDot(dot, newRadius){
     dot.r = newRadius;
     dot.areaInit(dot.areaCoordinates.x, dot.areaCoordinates.y);
   }


   sendDot(dot: DotViewModel){
      console.log(dot);

      this.apiService.postDot(dot).subscribe(
        res => console.log("Все отправилось"),
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













