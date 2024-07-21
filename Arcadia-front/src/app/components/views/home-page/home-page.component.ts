import { Component, OnInit } from '@angular/core';
import { CardHSComponent } from '../../cards/card-h-s/card-h-s.component';
import { CommonModule } from '@angular/common';
import { ICardLayout } from '../../../interfaces/cardLayout/ICardLayout';
import { ICarouselLayout } from '../../../interfaces/carouselLayout/ICarouselLayout';
import { CarouselComponent } from '../../../components/carousel/carousel.component';
import { CardTestimonyComponent } from '../../cards/card-testimony/card-testimony.component';
import { ICardTestimonyLayout } from '../../../interfaces/cardTestimonyLayout/ICardTestimonyLayout';
import { TestService } from '../../../services/test/test.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CardHSComponent,
    CommonModule,
    CarouselComponent,
    CardTestimonyComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  cardHabitatLayout: ICardLayout[] = [];
  cardServiceLayout: ICardLayout[] = [];
  carouselLayout: ICarouselLayout[] = [];
  cardTestimonyLayout: ICardTestimonyLayout[] = [];

  constructor(private service: TestService) {}

  ngOnInit() {
    this.service
      .getAllHabitats()
      .subscribe((data: ICardLayout[]) => (this.cardHabitatLayout = data));

    this.service
      .getAllServices()
      .subscribe((data: ICardLayout[]) => (this.cardServiceLayout = data));

    this.service
      .getCarouselAnimals()
      .subscribe((data: ICarouselLayout[]) => (this.carouselLayout = data));

    this.service
      .getTestimonies()
      .subscribe(
        (data: ICardTestimonyLayout[]) => (this.cardTestimonyLayout = data)
      );
  }
}
