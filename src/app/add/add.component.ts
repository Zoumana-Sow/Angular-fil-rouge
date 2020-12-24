import { Component, OnInit } from '@angular/core';
import {AjoutService} from '../Service/ajout.service';
import jwt_decode from 'jwt-decode';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  private addUrl: any;
  constructor(private service: AjoutService, private  router: Router) { }
  ngOnInit(): void {}
  addForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    profils: new FormControl(''),
    adresse: new FormControl(''),
    tel: new FormControl('', [Validators.required, Validators.minLength(9)]),
  });
  addUser(): any {
    // console.log(ok);
    console.log(this.addForm.value);
    // console.log('test');
    this.service.addUse(this.addForm.value)
      .subscribe(
          (res: any ) => {
          console.log(res);
        }
      );
  }

}
