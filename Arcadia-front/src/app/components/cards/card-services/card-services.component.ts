import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-services',
  standalone: true,
  imports: [],
  templateUrl: './card-services.component.html',
  styleUrl: './card-services.component.scss'
})
export class CardServicesComponent {
  @Input() cardImage: string="";
  @Input() cardTitle: string="";
  @Input() cardMessage: string="";
  @Input() cardSchedules: string="";
}
