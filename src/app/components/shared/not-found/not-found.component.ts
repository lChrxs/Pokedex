import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  loginForm!: FormGroup;
  token: boolean = true

  constructor(public authS: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit(){
    let user = this.loginForm.get('user')?.value
    let password = this.loginForm.get('password')?.value
    // this.authS.saveSession(user, password);
    
    this.authS.getToken(user, password) ? this.token = true : this.token = false
  }

  login(){
    // this.authS._user = this.loginForm.get('user')?.value
    // this.authS._password = this.loginForm.get('password')?.value
    this.authS.login();
  }

  logout(){
    this.authS.logout();
  }

  showSession(){
    return this.authS.showSession();
  }

}
