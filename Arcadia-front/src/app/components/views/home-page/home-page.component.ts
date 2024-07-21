import { Component, OnInit } from '@angular/core';
import { CardHSComponent } from '../../cards/card-h-s/card-h-s.component';
import { CommonModule } from '@angular/common';
import { ICardLayout } from '../../../interfaces/cardLayout/ICardLayout';
import { ICarouselLayout } from '../../../interfaces/carouselLayout/ICarouselLayout';
import { CarouselComponent } from "../../../components/carousel/carousel.component";
import { CardTestimonyComponent } from "../../cards/card-testimony/card-testimony.component";
import { ICardTestimonyLayout } from '../../../interfaces/cardTestimonyLayout/ICardTestimonyLayout';
import { TestService } from '../../../services/test/test.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardHSComponent, CommonModule, CarouselComponent, CardTestimonyComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
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
        url: '../../../../assets/images/carousel/lion1.jpg',
        animalName: 'lion',
      },
      {
        url: '../../../../assets/images/carousel/tiger1.jpg',
        animalName: 'tiger-image',
      },
      {
        url: '../../../../assets/images/carousel/monkey1.jpg',
        animalName: 'monkey-image',
      },
      {
        url: '../../../../assets/images/carousel/panda1.jpg',
        animalName: 'panda-image',
      },
      {
        url: '../../../../assets/images/carousel/goat1.jpg',
        animalName: 'goat-image',
      },
    ];
  cardTestimonyLayout: ICardTestimonyLayout[] = [
    {
      title: '"Un après-midi magique"',
      message: "Un après-midi magique dans un zoo immersif qui nous permet d'être au plus près des animaux de les voir évoluer dans un cadre 100 % adapté. Leur histoire touchante nous est comptée sur les panneaux d'information tout au long du parc."
    },
    {
      title: '"Zoo immense"',
      message: "Zoo immense, les animaux semblent très bien traités, on a vu le personnel au petits soins et tendre avec les animaux notamment avec les singes qui le rendent donc super ambiance, et moment agréable en famille. Tarif abordable."
    },
    {
      title: '"Superbe zoo"',
      message: "Superbe zoo. Des enclos bien entretenus et des grands espaces. Des animaux en bonne santé et beaucoup d'espèces. Espace pique nique, toilettes, buvettes, snack et boutique dans le parc. Je recommande fortement !"
    }
  ]

  constructor(private habitats:TestService) {}
  
  ngOnInit() {
    // this.habitats.getAllHabitats().subscribe((data: any) => {
    // console.log(data);    
    // });
  }
}
