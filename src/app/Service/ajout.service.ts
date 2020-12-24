import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AjoutService {
  private  addUrl = 'http://127.0.0.1:8000/api/admin/users';
  constructor(private http: HttpClient) { }

  addUse(user:any): any {
    return this.http.post<any>(this.addUrl, user);
  }

  // // tslint:disable-next-line:typedef
  // initializeFormGroup() {
  //   this.form.setValue({
  //   $key: null,
  //   firstname: '',
  //   lastname: '',
  //   email: '',
  //   tel: '',
  //   Adresse: '',
  //   Profil: '',
  //   });

  // }
}
