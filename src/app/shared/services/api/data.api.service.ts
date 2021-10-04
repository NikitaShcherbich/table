import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  constructor(private http: HttpClient) { }

  public getData():Observable<any> {
    return this.http.get('./assets/mock/data.json');
  }
}
