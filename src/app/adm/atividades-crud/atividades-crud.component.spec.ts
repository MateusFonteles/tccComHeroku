import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesCrudComponent } from './atividades-crud.component';

describe('AtividadesCrudComponent', () => {
  let component: AtividadesCrudComponent;
  let fixture: ComponentFixture<AtividadesCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadesCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
