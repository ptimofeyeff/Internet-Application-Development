import { Component, OnInit } from '@angular/core';
import {Point} from './model/Point';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  private point: Point = {
    x: 1,
    y: 1,
    r: 1
  };

  form: FormGroup ;

  constructor() { }


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

  sendPoint(): void{
    const controls = this.form.controls;

    if(this.form.invalid){
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAllAsTouched());
      return;
    }

    // TODO: Обработка данных формы

    console.log(this.form.value);
  }
}

















