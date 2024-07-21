import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHSComponent } from './card-h-s.component';

describe('CardHSComponent', () => {
  let component: CardHSComponent;
  let fixture: ComponentFixture<CardHSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
