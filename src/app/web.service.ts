import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Common } from './common';



@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private httpClient: HttpClient) { }

  action(serviceName: string, parameter: any) {
    return this.httpClient.post(Common.baseUrl + serviceName, parameter).map(data => {data}).toPromise();
  }
}
