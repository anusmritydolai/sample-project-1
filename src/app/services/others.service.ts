import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OthersService {

  constructor(private httpClient: HttpClient) { }

  private getMethod(url: string) {
    return this.httpClient.get(url)
  }

  public getClients() {
    return this.getMethod(environment.test_client_api);
  }
}
