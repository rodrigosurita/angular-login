import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface myData {
  message: string,
  success: boolean
}

interface logoutStatus {
  status: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData(){
    return this.http.get<myData>('http://localhost:8081/api/database', {
      withCredentials: true
    });
  }

  isLoggedIn(): Observable<any>{
    return this.http.get<any>('http://localhost:8081/api/isloggedin',{
      withCredentials: true
    });
  }

  logout(){
    return this.http.get<logoutStatus>('http://localhost:8081/api/logout',{
      withCredentials: true
    });
  }

}
