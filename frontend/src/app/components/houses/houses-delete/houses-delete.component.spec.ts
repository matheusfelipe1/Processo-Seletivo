import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesDeleteComponent } from './houses-delete.component';

describe('HousesDeleteComponent', () => {
  let component: HousesDeleteComponent;
  let fixture: ComponentFixture<HousesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousesDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
