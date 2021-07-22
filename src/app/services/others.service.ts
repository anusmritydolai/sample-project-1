import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OthersService {

  constructor(private httpClient: HttpClient) { }

  private getMethod(url: string, auth_token?: string) {
    const x = localStorage.getItem('user_info');
    if(!auth_token && x) auth_token = JSON.parse(x).token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.httpClient.get(url, { headers: headers })
  }

  public getClients() {
    return this.getMethod('http://hmaapi.kilobytetech.com/users?pageNo=1&size=20');
  }
}
