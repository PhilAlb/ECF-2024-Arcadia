import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitatsPageComponent } from './habitats-page.component';

describe('HabitatsPageComponent', () => {
  let component: HabitatsPageComponent;
  let fixture: ComponentFixture<HabitatsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitatsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
