import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesUpdateComponent } from './houses-update.component';

describe('HousesUpdateComponent', () => {
  let component: HousesUpdateComponent;
  let fixture: ComponentFixture<HousesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
