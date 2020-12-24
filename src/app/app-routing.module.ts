import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AddComponent} from './add/add.component';
import {AdminComponent} from './admin/admin.component';
import {ApprenantComponent} from './apprenant/apprenant.component';
import {FormateurComponent} from './formateur/formateur.component';
import {CMComponent} from './cm/cm.component';
import {ListUserComponent} from './list-user/list-user.component';
import {NavbarComponent} from './navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/navbar',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {path: 'add',
  component: AddComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'apprenant',
    component: ApprenantComponent
  },
  {
    path: 'formateur',
    component: FormateurComponent
  },
  {
    path: 'CM',
    component: CMComponent
  },
  {
    path: 'list-user',
    component: ListUserComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
