import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesCadastroComponent } from './houses-cadastro.component';

describe('HousesCadastroComponent', () => {
  let component: HousesCadastroComponent;
  let fixture: ComponentFixture<HousesCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousesCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
