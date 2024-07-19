import { Component } from '@angular/core';
import { CardHSComponent } from '../../cards/card-h-s/card-h-s.component';
import { CommonModule } from '@angular/common';
import { ICardLayout } from '../../../interfaces/cardLayout/ICardLayout';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardHSComponent, CommonModule],
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
      url: "../../../../assets/images/habitats/savannah1.jpg",
      title: "Restauration",
      verticalPosition: "35%"
    },
    {
      url: "../../../../assets/images/habitats/jungle1.webp",
      title: "Visite guidée",
      verticalPosition: ""
    },
    {
      url: "../../../../assets/images/habitats/farm1.jpg",
      title: "Petit train",
      verticalPosition: ""
    },
  ]
}
