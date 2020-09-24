import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private loggedInStatus = JSON.parse(localStorage.getItem('loggedId') || 'false');
  private loggedInStatus = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    //localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn() {

    return this.loggedInStatus;
    //return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());

  }

  getUserDetails(username, password) {
    // post details to API server, return user info if correct
    return this.http.post<myData> ('http://localhost:8081/login/auth', {
      username,
      password
    },{
      withCredentials: true
    });
  }

}
