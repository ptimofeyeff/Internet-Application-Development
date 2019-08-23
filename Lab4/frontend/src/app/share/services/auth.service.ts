import {Injectable} from '@angular/core';
import {User} from '../../main-page/model/User';
import {ApiService} from './api.service';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
  private isAuth = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
  ){}

  login(user: User): boolean {
    this.apiService.postUser(user).subscribe(
      res => {
        this.isAuth = res;
        this.router.navigate(['/main']);
      },
      err => console.log(err)
    );
    return this.isAuth;
  }

  logout(){
    this.router.navigate(['']);
    this.isAuth = false;
  }

  isAuthenticated():boolean{
    return this.isAuth;
  }

}
