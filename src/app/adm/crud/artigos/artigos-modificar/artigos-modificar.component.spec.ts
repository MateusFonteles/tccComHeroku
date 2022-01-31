import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigosModificarComponent } from './artigos-modificar.component';

describe('ArtigosModificarComponent', () => {
  let component: ArtigosModificarComponent;
  let fixture: ComponentFixture<ArtigosModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigosModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigosModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
