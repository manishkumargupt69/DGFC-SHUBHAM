import { Component, ViewChild } from '@angular/core';
import { Login } from 'src/app/core/api-models/auth-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  data:Login={}
  isPasswordVisible = false;


  @ViewChild('loginForm') loginForm?: any;
  constructor(){}
}
