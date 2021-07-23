import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  // API url
  baseApiUrl = "https://file.io"
  
  // Returns an observable
  upload(file):Observable<any> {
      // Create form data
      const formData = new FormData(); 

      // Store form name as "file" with file data
      formData.append("file", file, file.name);

      // Make http post request over api
      // with formData as req
      return this.httpClient.post(this.baseApiUrl, formData)
  }
}
