import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesRegisterComponent } from './houses-register.component';

describe('HousesRegisterComponent', () => {
  let component: HousesRegisterComponent;
  let fixture: ComponentFixture<HousesRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousesRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
