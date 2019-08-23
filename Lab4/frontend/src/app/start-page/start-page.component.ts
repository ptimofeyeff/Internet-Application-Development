import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../share/services/api.service';
import {Router} from '@angular/router';
import {AuthService} from '../share/services/auth.service';
import {User} from '../main-page/model/User';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  form: FormGroup;


  constructor(
    private apiService: ApiService,
    private router: Router,
    private auth: AuthService
  ) {}


  ngOnInit() {
    this.form = new FormGroup( {
        login: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    })

  }

  submit(){

    // TODO попробовать вынести проверку валидности формы в отдельный сервис
    const controls = this.form.controls;

    if(this.form.invalid){
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAllAsTouched());
      return;
    }

    const user: User = {
      login: this.form.value.login,
      password: this.form.value.password
    };

    this.auth.login(user);

  }

}

