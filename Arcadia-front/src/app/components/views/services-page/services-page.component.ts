import { Component, OnInit } from "@angular/core";
import { ArcadiaService } from "../../../services/arcadia/arcadia.service";
import { CommonModule } from "@angular/common";
import { CardServicesComponent } from "../../cards/card-services/card-services.component";
import { ICardServicesLayout } from "../../../interfaces/cardLayout/cardServicesLayout/ICardServicesLayout";

@Component({
    selector: 'app-services-page',
    standalone: true,
    imports: [ CommonModule, CardServicesComponent ],
    templateUrl: './services-page.component.html',
    styleUrl: './services-page.component.scss'
  })
  export class ServicesPageComponent implements OnInit {
    cardServiceLayout: ICardServicesLayout[] = [];

    constructor(private service: ArcadiaService) {}

    ngOnInit() {
      this.service
      .getAllServices()
      .subscribe((data: ICardServicesLayout[]) => (this.cardServiceLayout = data));
  }
}