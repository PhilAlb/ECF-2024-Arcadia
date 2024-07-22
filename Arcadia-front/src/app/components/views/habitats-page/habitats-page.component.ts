import { Component, OnInit } from "@angular/core";
import { ArcadiaService } from "../../../services/arcadia/arcadia.service";
import { CommonModule } from "@angular/common";
import { CardHabitatsComponent } from "../../cards/card-habitats/card-habitats.component";
import { ICardHabitatsLayout } from "../../../interfaces/cardLayout/cardHabitatsLayout/ICardHabitatsLayout";

@Component({
    selector: 'app-habitats-page',
    standalone: true,
    imports: [ CommonModule, CardHabitatsComponent ],
    templateUrl: './habitats-page.component.html',
    styleUrl: './habitats-page.component.scss'
  })
  export class HabitatsPageComponent implements OnInit {
    cardHabitatsLayout: ICardHabitatsLayout[] = [];

    constructor(private service: ArcadiaService) {}

    ngOnInit() {
      this.service
      .getAllHabitats()
      .subscribe((data: ICardHabitatsLayout[]) => (this.cardHabitatsLayout = data));
    }
  }  