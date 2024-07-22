import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHabitatsComponent } from './card-habitats.component';

describe('CardHabitatsComponent', () => {
  let component: CardHabitatsComponent;
  let fixture: ComponentFixture<CardHabitatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHabitatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHabitatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
