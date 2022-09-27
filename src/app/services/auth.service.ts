import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public auth: boolean = false;
  public _user: string = '';
  public _password: string = '';
  public token: string = ''

  constructor() { }

  
  public set user(v : string) {
    this._user = v;
  }

  public set password(v : string) {
    this._password = v;
  }

  saveSession(username: string, password: string){
    localStorage.setItem('user', username)
    localStorage.setItem('password', password)
  }
  

  login(){
    this.auth = true;
    localStorage.setItem('auth', this.auth.toString())
    localStorage.setItem('user', this._user)
    localStorage.setItem('password', this._password)
  }

  logout(){
    this.auth = false;
    localStorage.clear()
  }

  showSession(){
    // return this.auth
    this.auth = (localStorage.getItem('auth')?.toLowerCase() === 'true')
    return this.auth
  }


  getToken(u: string, c: string): boolean{
    if(u == 'chris' && c == 'cjl27'){
      this.token = 'd34r873fjerwf'
      localStorage.setItem('token', this.token)
      return true
    }
    return false
  }

}
