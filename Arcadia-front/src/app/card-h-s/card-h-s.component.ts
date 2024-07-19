import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-h-s',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './card-h-s.component.html',
  styleUrl: './card-h-s.component.scss'
})
export class CardHSComponent {
  @Input() cardImage: string="";
  @Input() cardTitle: string="";
  @Input() index: number=0;
  @Input() verticalPosition?: string="50%";
}

