import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-testimony',
  standalone: true,
  imports: [],
  templateUrl: './card-testimony.component.html',
  styleUrl: './card-testimony.component.scss'
})
export class CardTestimonyComponent {
  @Input() cardTitle: string="";
  @Input() message: string="";
}
