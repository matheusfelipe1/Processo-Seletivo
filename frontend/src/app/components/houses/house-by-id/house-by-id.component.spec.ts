import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseByIdComponent } from './house-by-id.component';

describe('HouseByIdComponent', () => {
  let component: HouseByIdComponent;
  let fixture: ComponentFixture<HouseByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
