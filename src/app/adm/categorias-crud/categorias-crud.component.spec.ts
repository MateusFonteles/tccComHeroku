import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasCrudComponent } from './categorias-crud.component';

describe('CategoriasCrudComponent', () => {
  let component: CategoriasCrudComponent;
  let fixture: ComponentFixture<CategoriasCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
