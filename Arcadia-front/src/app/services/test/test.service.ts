import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICardLayout } from '../../interfaces/cardLayout/ICardLayout';
import { ICardTestimonyLayout } from '../../interfaces/cardTestimonyLayout/ICardTestimonyLayout';
import { ICarouselLayout } from '../../interfaces/carouselLayout/ICarouselLayout';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private readonly _url = 'https://localhost:7096';

  constructor(private http: HttpClient) {}
  getAllHabitats(): Observable<ICardLayout[]> {
    return this.http.get<ICardLayout[]>(this._url + '/habitats');
  }

  getAllServices(): Observable<ICardLayout[]> {
    return this.http.get<ICardLayout[]>(this._url + '/services');
  }

  getCarouselAnimals(): Observable<ICarouselLayout[]> {
    return this.http.get<ICarouselLayout[]>(this._url + '/animals');
  }

  getTestimonies(): Observable<ICardTestimonyLayout[]> {
    return this.http.get<ICardTestimonyLayout[]>(this._url + '/testimonies');
  }
}
