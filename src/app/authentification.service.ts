import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  // tslint:disable-next-line:variable-name
  private  _loginrUrl = 'http://127.0.0.1:8000/api/login';
  constructor( private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  loginUser(user: any){
    return this.http.post<any>(this._loginrUrl, user);
  }
  // tslint:disable-next-line:typedef
  getToken(){
    // @ts-ignore
    return localStorage.getItem('token');
  }
}
