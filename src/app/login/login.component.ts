import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {AuthentificationService} from '../authentification.service';
import jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 hide = true;
 loginForm = new FormGroup(
   {
     email: new FormControl('', [Validators.required, Validators.email]),
     password: new FormControl('', [Validators.required])
   });

  // tslint:disable-next-line:variable-name
  constructor(private _auth: AuthentificationService, private  router: Router) { }
  email = new FormControl();

  // tslint:disable-next-line:typedef
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // tslint:disable-next-line:typedef
  ngOnInit(){
  }
  // tslint:disable-next-line:typedef
  loginUser(){
    this._auth.loginUser(this.loginForm.value)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          // tslint:disable-next-line:prefer-const
          let decoded = jwt_decode(res.token);
          // @ts-ignore
          let role = decoded.roles;
          if (role == 'ROLE_Admin'){
           this.router.navigate(['admin']);
          }else if (role == 'ROLE_Apprenant'){
            this.router.navigate(['apprenant']);
          }else if (role == 'ROLE_CM'){
            this.router.navigate(['CM']);
          }else if (role == 'ROLE_Formateur'){
            this.router.navigate(['formateur']);
          }
        },
        error => console.log(error)
      );
  }


}

