import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
    // this.login("prakhar@kilobytetech.com", "123456")
  }

  public login(email: string, password: string) {
    return this.httpClient.post('http://hmaapi.kilobytetech.com/auth/login', {email: email, password: password}, {headers: {email: email, password: password}})
  }
}
