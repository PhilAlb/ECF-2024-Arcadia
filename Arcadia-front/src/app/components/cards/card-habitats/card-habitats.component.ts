import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-habitats',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './card-habitats.component.html',
  styleUrl: './card-habitats.component.scss'
})
export class CardHabitatsComponent {
  @Input() cardImage: string="";
  @Input() cardTitle: string="";
  @Input() cardMessage: string="";
  @Input() verticalPosition?: string="50%";
}
