import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private readonly _url = "https://localhost:7096"

  constructor(private http: HttpClient) {}
  getAllHabitats(): Observable<any> {
    return this.http.get<any>(this._url + "/habitats");
  }
}
