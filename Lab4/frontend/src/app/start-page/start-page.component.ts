import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../share/api.service';
import {User} from '../main-page/model/User';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  user: User = {login: undefined, password: undefined };
  form: FormGroup;


  constructor(private apiService: ApiService) {}


  ngOnInit() {
    this.form = new FormGroup( {
        login: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    })

  }


  checkUser(){

    // TODO попробовать вынести проверку валидности формы в отдельный сервис
    const controls = this.form.controls;

    if(this.form.invalid){
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAllAsTouched());
      return;
    }

    this.user.login = this.form.value.login;
    this.user.password = this.form.value.password;

    this.apiService.postUser(this.user).subscribe(
      res => console.log(res),
      err => console.log(err)
    );


  }

}

