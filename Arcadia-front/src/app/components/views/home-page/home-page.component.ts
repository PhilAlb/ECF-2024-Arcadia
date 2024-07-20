import { Component } from '@angular/core';
import { CardHSComponent } from '../../cards/card-h-s/card-h-s.component';
import { CommonModule } from '@angular/common';
import { ICardLayout } from '../../../interfaces/cardLayout/ICardLayout';
import { ICarouselLayout } from '../../../interfaces/carouselLayout/ICarouselLayout';
import { CarouselComponent } from "../../../components/carousel/carousel.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardHSComponent, CommonModule, CarouselComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  cardHabitatLayout: ICardLayout[] = [
    {
      url: "../../../../assets/images/habitats/savannah1.jpg",
      title: "Savane",
      verticalPosition: "32%"
    },
    {
      url: "../../../../assets/images/habitats/jungle1.webp",
      title: "Jungle",
    },
    {
      url: "../../../../assets/images/habitats/farm1.jpg",
      title: "Ferme",
      verticalPosition: "25%"
    },
  ]
  cardServiceLayout: ICardLayout[] = [
    {
      url: "../../../../assets/images/services/restauration1.webp",
      title: "Restauration",
      verticalPosition: "70%"
    },
    {
      url: "../../../../assets/images/services/visit1.jpg",
      title: "Visite guidée",
      verticalPosition: "35%"
    },
    {
      url: "../../../../assets/images/services/train1.webp",
      title: "Visite en train",
      verticalPosition: "65%"
    },
  ]

  carouselLayout: ICarouselLayout[] = [
    {
      url: "../../../../assets/images/carousel/tiger1.jpg",
      animalName: "tiger-image",
      verticalPosition: "35%"
    },
    {
      url: "../../../../assets/images/carousel/monkey1.jpg",
      animalName: "monkey-image",
      verticalPosition: "35%"
    },
    {
      url: "../../../../assets/images/carousel/panda1.jpg",
      animalName: "panda-image",
      verticalPosition: "35%"
    },
    {
      url: "../../../../assets/images/carousel/goat1.jpg",
      animalName: "goat-image",
      verticalPosition: "35%"
    },
  ]
}
