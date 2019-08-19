import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DotViewModel} from '../main-page/main-page.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly BASE_URL = "http://localhost:8081/api";
  private readonly SEND_DOT_URL = this.BASE_URL + "/dot";


  constructor(private http: HttpClient) {}


  postDot(dot: DotViewModel): Observable<any>{
    return this.http.post(this.SEND_DOT_URL, dot);
  }
}
